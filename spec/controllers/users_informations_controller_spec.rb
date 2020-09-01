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

  describe 'POST #create' do
    let(:user) { create :user }
    let!(:user_second) { create :user }
    let!(:user_informations) { create :user_informations, user_id: user_second.id }
    let(:valid_attributes) { { user_informations: attributes_for(:user_informations, name: 'Test') } }
    let(:invalid_attributes) { { user_informations: attributes_for(:user_informations, name: 'Test1') } }

    context 'valid attributes' do
      login_admin
      subject { post :create, params: valid_attributes }
      it { is_expected.to be_successful }
      it { expect { subject }.to change(UserInformations, :count).by(1) }
    end

    context 'invalid attributes' do
      before { sign_in user }
      subject { post :create, params: invalid_attributes }
      it { is_expected.to have_http_status :bad_request }
      it { expect { subject }.to_not change(UserInformations, :count) }
    end

    context 'user_informations' do
      before { sign_in user_second }
      subject { post :create, params: valid_attributes }
      it { is_expected.to be_successful }
      it { expect { subject }.to_not change(UserInformations, :count) }
    end
  end

end