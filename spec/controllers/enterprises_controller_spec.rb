require 'rails_helper'

RSpec.describe Api::V1::EnterprisesController, type: :controller do
  login_user

  describe 'GET #index' do
    let!(:enterprise) { create :enterprise }
    subject { get :index }
    
    describe 'succesfull response' do
      it { is_expected.to be_successful }
    end

    context 'enterprises' do
      it 'should return enterprises list' do
        subject
        expect(assigns(:enterprises).count).to eq 1
      end
    end
  end

  describe 'POST #create' do
    let(:valid_attributes) { { enterprise: attributes_for(:enterprise, name: 'Test') } }
    let(:invalid_attributes) { { enterprise: attributes_for(:enterprise, name: 'Test1') } }

    context 'valid attributes' do
      subject { post :create, params: valid_attributes }
      it { is_expected.to be_successful }
      it { expect { subject }.to change(Enterprise, :count).by(1) }
    end

    context 'invalid attributes' do
      subject { post :create, params: invalid_attributes }
      it { is_expected.to have_http_status :bad_request }
      it { expect { subject }.to_not change(Enterprise, :count) }
    end
  end
end