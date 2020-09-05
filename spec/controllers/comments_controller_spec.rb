require 'rails_helper'

RSpec.describe Api::V1::CommentsController, type: :controller do
  login_admin

  describe 'GET #show' do
    let(:user) { create :user, role: :notifier }
    let(:issue) { create :issue, reported_by_id: user.id }
    let(:comment) { create :comment, issue: issue, user: user }

    context 'valid id' do
      subject { get :show, params: { id: comment.id } }
      it { is_expected.to be_successful }
    end

    context 'invalid id' do
      subject { get :show, params: { id: '1' } }
      it { is_expected.to have_http_status :not_found }
    end
  end

  describe 'POST #create' do
    let(:user) { create :user, role: :notifier }
    let(:issue) { create :issue, reported_by_id: user.id }
    let(:valid_attributes) { { comment: attributes_for(:comment, issue_id: issue.id, user_id: user.id) } }
    let(:invalid_attributes) { { comment: attributes_for(:comment, issue_id: issue.id, user_id: '') } }

    context 'valid attributes' do
      subject { post :create, params: valid_attributes }
      it { is_expected.to be_successful }
      it { expect { subject }.to change(Comment, :count).by(1) }
    end

    context 'invalid attributes' do
      subject { post :create, params: invalid_attributes }
      it { is_expected.to have_http_status :bad_request }
      it { expect { subject }.to_not change(Comment, :count) }
    end
  end

  describe 'PUT #update' do
    let(:user) { create :user, role: :notifier }
    let(:issue) { create :issue, reported_by_id: user.id }
    let(:comment) { create :comment, issue_id: issue.id, user_id: user.id }
    let(:valid_attributes) { { id: comment.id, comment: attributes_for(:comment, issue_id: issue.id, comment: 'Test') } }
    let(:invalid_attributes) { { id: comment.id, comment: attributes_for(:comment, issue_id: issue.id, user_id: '1') } }
    before { @request.env["devise.mapping"] = Devise.mappings[:user] }
    before { sign_in user }

    context 'valid attributes' do
      subject { post :update, params: valid_attributes }
      it { is_expected.to be_successful }
      it 'should update comment' do
        subject
        expect(comment.reload.comment).to eq('Test')
      end
    end

    context 'invalid attributes' do
      subject { post :update, params: invalid_attributes }
      it { is_expected.to be_successful }
      it 'should not update comment' do
        subject
        expect(comment.reload.user_id).to_not eq('1')
      end
    end

    context 'forbidden' do
      login_receiver
      subject { post :update, params: valid_attributes }
      it { is_expected.to have_http_status :forbidden }
      it 'should not update comment' do
        subject
        expect(comment.reload.comment).to_not eq('Test')
      end
    end
  end

  describe 'DELETE #destroy' do
    let(:user) { create :user, role: :notifier }
    let(:issue) { create :issue, reported_by_id: user.id }
    let(:comment) { create :comment, issue: issue, user: user }
    subject { delete :destroy, params: { id: comment.id } }

    describe 'succesfull response' do
      it { is_expected.to be_successful }
    end

    context 'comment' do
      it 'should delete comment' do
        comment
        expect { subject }.to change(Comment, :count).by(-1)
      end
    end

    context 'users' do
      it 'should not delete user' do
        comment
        expect { subject }.not_to change(User, :count)
      end
    end

    context 'issues' do
      it 'should not delete issue' do
        comment
        expect { subject }.not_to change(Issue, :count)
      end
    end
  end

end