require 'rails_helper'

RSpec.describe Api::V1::IssuesController, type: :controller do
  login_admin

  describe 'GET #index' do
    let(:enterprise) { create :enterprise }
    let(:user) { create :user, role: :notifier, enterprise_id: enterprise.id }
    let(:user_second) { create :user, role: :notifier }
    let!(:issue) { create :issue, reported_by_id: user.id }
    subject { get :index }
    
    describe 'succesfull response' do
      it { is_expected.to be_successful }
    end

    context 'admin request' do
      it 'should return issues list' do
        subject
        expect(assigns(:issues).count).to eq 1
      end
    end

    context 'user without enterprise request' do
      before { sign_in user_second }
      it 'should return empty list of issues' do
        subject
        expect(assigns(:issues).count).to eq 0
      end
    end

    context 'user with enterprise request' do
      before { sign_in user }
      it 'should return empty list of issues' do
        subject
        expect(assigns(:issues).count).to eq 1
      end
    end
  end

  describe 'GET #show' do
    let(:user) { create :user }
    let(:issue) { create :issue, reported_by_id: user.id }

    context 'valid id' do
      subject { get :show, params: { id: issue.id } }
      it { is_expected.to be_successful }
    end

    context 'invalid id' do
      subject { get :show, params: { id: '1' } }
      it { is_expected.to have_http_status :not_found }
    end
  end

  describe 'POST #create' do
    let(:user) { create :user }
    let(:valid_attributes) { { issue: attributes_for(:issue, reported_by_id: user.id) } }
    let(:invalid_attributes) { { issue: attributes_for(:issue, reported_by_id: '') } }
    login_notifier

    context 'valid attributes' do
      subject { post :create, params: valid_attributes }
      it { is_expected.to be_successful }
      it { expect { subject }.to change(Issue, :count).by(1) }
    end

    context 'invalid attributes' do
      subject { post :create, params: invalid_attributes }
      it { is_expected.to have_http_status :bad_request }
      it { expect { subject }.to_not change(Issue, :count) }
    end

    context 'forbidden' do
      login_admin
      subject { post :create, params: invalid_attributes }
      it { is_expected.to have_http_status :forbidden }
      it { expect { subject }.to_not change(Issue, :count) }
    end
  end

  describe 'PUT #update' do
    let(:user) { create :user, role: :notifier }
    let(:user_second) { create :user }
    let(:issue) { create :issue, reported_by_id: user.id }
    let(:valid_attributes) { { id: issue.id, issue: attributes_for(:issue, description: 'Test') } }
    let(:invalid_attributes) { { id: issue.id, issue: attributes_for(:issue, reported_by_id: user_second.id) } }
    before { sign_in user }

    context 'valid attributes' do
      subject { put :update, params: valid_attributes }
      it { is_expected.to be_successful }
      it 'should update issue' do
        subject
        expect(issue.reload.description).to eq('Test')
      end
    end

    context 'invalid attributes' do
      subject { put :update, params: invalid_attributes }
      it { is_expected.to be_successful }
      it 'should not update issue' do
        subject
        expect(issue.reload.reported_by_id).to_not eq(user_second.id)
      end
    end

    context 'access forbidden' do
      before { sign_in user_second }
      subject { put :update, params: valid_attributes }
      it { is_expected.to have_http_status :forbidden }
      it 'should not update issue' do
        subject
        expect(issue.reload.description).to_not eq('Test')
      end
    end
  end

  describe '#DELETE destroy' do
    let(:user) { create :user }
    let(:issue) { create :issue, reported_by_id: user.id }
    subject { delete :destroy, params: { id: issue.id } }
    
    describe 'succesfull response' do
      it { is_expected.to be_successful }
    end

    context 'issue' do
      it 'should delete issue' do
        issue
        expect { subject }.to change(Issue, :count).by(-1)
      end

      it 'should not delete user' do
        issue
        expect { subject }.to_not change(User, :count)
      end
    end

    context 'forbidden' do
      login_notifier

      it 'should return forbidden status' do
        issue
        expect(subject).to have_http_status :forbidden
      end

      it 'should not delete issue' do
        issue
        expect { subject }.to_not change(Issue, :count)
      end
    end
  end

  describe 'PUT #assign_receiver' do
    login_receiver
    let(:reported_by) { create :user }
    let(:assigned_to) { create :user }
    let(:issue) { create :issue, reported_by_id: reported_by.id }
    let(:valid_attributes) { { id: issue.id, issue: attributes_for(:issue, assigned_to_id: assigned_to.id) } }
    let(:invalid_attributes) { { id: issue.id, issue: attributes_for(:issue, assigned_to_id: '1') } }

    context 'valid attributes' do
      subject { put :assign_receiver, params: valid_attributes }
      it { is_expected.to be_successful }
      it 'should update issue' do
        subject
        expect(issue.reload.assigned_to_id).to eq(assigned_to.id)
      end
      it 'should change issue status' do
        subject
        expect(issue.reload.assigned?).to eq(true)
      end
    end

    context 'invalid attributes' do
      subject { put :assign_receiver, params: invalid_attributes }
      it { is_expected.to be_successful }
      it 'should not update issue' do
        subject
        expect(issue.reload.assigned_to_id).to_not eq('1')
      end
    end

    context 'already assigned' do
      let(:reported_by) { create :user }
      let(:assigned_to) { create :user }
      let(:user) { create :user }
      let(:issue) { create :issue, reported_by_id: reported_by.id, assigned_to_id: assigned_to.id }
      let(:attributes) { { id: issue.id, issue: attributes_for(:issue, assigned_to_id: user.id) } }
      subject { put :assign_receiver, params: attributes }

      it { is_expected.to have_http_status :bad_request }
      it 'should not update issue' do
        subject
        expect(issue.reload.assigned_to_id).to_not eq(user.id)
      end
    end
  end

  describe 'PUT #resolve_issue' do
    let(:reported_by) { create :user, role: :notifier }
    let(:assigned_to) { create :user, role: :receiver }
    let(:user) { create :user }
    let(:issue) { create :issue, reported_by_id: reported_by.id, assigned_to_id: assigned_to.id }
    let(:issue_second) { create :issue, reported_by_id: reported_by.id, assigned_to_id: assigned_to.id }
    subject { put :resolve_issue, params: { id: issue.id } }
    before { @request.env["devise.mapping"] = Devise.mappings[:user] }
    before { sign_in assigned_to }

    describe 'succesfull response' do
      it { is_expected.to be_successful }
      it 'should update status' do
        subject
        expect(issue.reload.resolved?).to eq(true)
      end
    end

    describe 'forbidden' do
      before { sign_in user }
      subject { put :resolve_issue, params: { id: issue_second.id } }

      it { is_expected.to have_http_status :forbidden }
      it 'should not change status' do
        subject
        expect(issue_second.reload.resolved?).to eq(false)
      end
    end
  end

  describe 'GET #issue_types' do
    subject { get :issue_types } 

    describe 'successful response' do
      it { is_expected.to be_successful }
    end

    context 'issue_types' do
      it 'should include all issue_types' do
        subject
        expect(response.body).to include_json(
          types: [
            { type: 'other', id: 0 },
          ]
        )
      end
    end
  end
 
end