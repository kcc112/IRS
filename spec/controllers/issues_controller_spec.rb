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

end