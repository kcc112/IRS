require 'rails_helper'

RSpec.describe Api::V1::UsersInformationsController, type: :controller do
  login_admin

  describe 'GET #index' do
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

    context 'valid id' do
      subject { get :show, params: { id: user.user_informations.id } }
      it { is_expected.to be_successful }
    end

    context 'invalid id' do
      subject { get :show, params: { id: '1' } }
      it { is_expected.to have_http_status :not_found }
    end

    context 'access forbidden' do
      login_notifier
      subject { get :show, params: { id: user.user_informations.id } }
      it { is_expected.to have_http_status :forbidden }
    end

    context 'access allowed' do
      before { sign_in user }
      subject { get :show, params: { id: user.user_informations.id } }
      it { is_expected.to be_successful }
    end
  end

  describe 'PUT #udate' do
    let(:user) { create :user }
    let(:user_informations) { create :user_informations }
    let(:valid_attributes) { { id: user.user_informations.id, users_information: attributes_for(:user_informations, name: 'Test') } }
    let(:invalid_attributes) { { id: user.user_informations.id, users_information: attributes_for(:user_informations, name: 'Test1') } }

    context 'valid attributes' do
      subject { put :update, params: valid_attributes }
      it { is_expected.to be_successful }
      it 'should change user name' do
        subject
        expect(user.user_informations.reload.name).to eq('Test')
      end
    end

    context 'invalid attributes' do
      subject { put :update, params: invalid_attributes }
      it { is_expected.to have_http_status :bad_request }
      it 'should not change user name' do
        subject
        expect(user.user_informations.reload.name).not_to eq('Test1')
      end
    end

    context 'forbidden' do
      login_notifier
      subject { put :update, params: valid_attributes }
      it { is_expected.to have_http_status :forbidden }
      it 'should not change user name' do
        subject
        expect(user.user_informations.reload.name).to eq(nil)
      end
    end
  end

end