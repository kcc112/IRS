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

end