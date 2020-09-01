require 'rails_helper'

RSpec.describe Api::V1::UsersInformationsController, type: :controller do
  login_admin

  describe 'GET #index' do
    let!(:user) { create :user }
    let!(:user_informations) { create :user_informations, user_id: user.id }
    subject { get :index }
    
    describe 'succesfull response' do
      it { is_expected.to be_successful }
    end

    context 'user_informations' do
      it 'should return user_informations list' do
        subject
        expect(assigns(:users_informations).count).to eq 1
      end
    end
  end

  describe 'GET #show' do
    let(:user) { create :user, role: :notifier }
    let(:user_informations) { create :user_informations, user_id: user.id }

    context 'valid id' do
      subject { get :show, params: { id: user_informations.id } }
      it { is_expected.to be_successful }
    end

    context 'invalid id' do
      subject { get :show, params: { id: '1' } }
      it { is_expected.to have_http_status :not_found }
    end

    context 'access forbidden' do
      login_notifier
      subject { get :show, params: { id: user_informations.id } }
      it { is_expected.to have_http_status :forbidden }
    end

    context 'access allowed' do
      before { sign_in user }
      subject { get :show, params: { id: user_informations.id } }
      it { is_expected.to be_successful }
    end
  end

end