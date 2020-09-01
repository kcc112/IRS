require 'rails_helper'

RSpec.describe Api::V1::EnterprisesController, type: :controller do
  login_admin

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

  describe 'GET #show' do
    let(:enterprise) { create :enterprise }

    context 'valid id' do
      subject { get :show, params: { id: enterprise.id } }
      it { is_expected.to be_successful }
    end

    context 'invalid id' do
      subject { get :show, params: { id: '1' } }
      it { is_expected.to have_http_status :not_found }
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

  describe 'PUT #update' do
    let(:enterprise) { create :enterprise }
    let(:valid_attributes) { { id: enterprise.id, enterprise: attributes_for(:enterprise, name: 'Test') } }
    let(:invalid_attributes) { { id: enterprise.id, enterprise: attributes_for(:enterprise, name: 'Test1') } }

    context 'valid attributes' do
      subject { put :update, params: valid_attributes }
      it { is_expected.to be_successful }
      it 'should change enterprise name' do
        subject
        expect(enterprise.reload.name).to eq('Test')
      end
    end

    context 'invalid attributes' do
      subject { put :update, params: invalid_attributes }
      it { is_expected.to have_http_status :bad_request }
      it 'should not change enterprise name' do
        subject
        expect(enterprise.reload.name).not_to eq('Test1')
      end
    end
  end

  describe 'DELETE #destroy' do
    let(:enterprise) { create :enterprise }
    let(:user) { create :user, enterprise_id: enterprise.find(id) }
    subject { delete :destroy, params: { id: enterprise.id } }

    describe 'succesfull response' do
      it { is_expected.to be_successful }
    end

    context 'enterprise' do
      it 'should delete enterprise' do
        enterprise
        expect { subject }.to change(Enterprise, :count).by(-1)
      end
    end

    context 'users' do
      let(:enterprise) { create :enterprise }
      let(:user) { create :user, enterprise_id: enterprise.find(id) }

      it 'should not delete user' do
        enterprise
        expect { subject }.not_to change(User, :count)
      end
    end
  end

end