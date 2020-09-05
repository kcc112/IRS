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

end