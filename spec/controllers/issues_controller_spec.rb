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

  describe 'PUT #create' do
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

end