require 'rails_helper'

RSpec.describe Api::V1::IssuesController, type: :controller do
  login_admin

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

end