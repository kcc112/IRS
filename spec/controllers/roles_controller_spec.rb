require 'rails_helper'

RSpec.describe Api::V1::Session::RolesController, type: :controller do
  login_admin

  describe 'GET #index' do
    subject { get :index } 

    describe 'successful response' do
      it { is_expected.to be_successful }
    end

    context 'role' do
      it 'should include all roles' do
        subject
        expect(response.body).to include_json(
          roles: [
            { role: 'notifier', id: 0 },
            { role: 'receiver', id: 1 },
            { role: 'admin',    id: 2 }
          ]
        )
      end
    end
  end

  describe 'PUT #update' do
    let(:user) { create :user }
    let(:valid_attributes) { { id: user.id, role: { value: 1 } } }
    let(:invalid_attributes) { { id: user.id, role: { value: 5 } } }

    context 'valid attributes' do
      subject { put :update, params: valid_attributes, as: :json }
      it { is_expected.to be_successful }
      it 'should update user' do
        subject
        expect(user.reload.receiver?).to eq(true)
      end
    end

    context 'invalid attributes' do
      subject { put :update, params: invalid_attributes }
      it { is_expected.to have_http_status :bad_request }
      it 'should not update user' do
        subject
        expect(user.reload.admin?).to eq(true)
      end
    end

    context 'access forbidden' do
      login_notifier
      subject { put :update, params: valid_attributes }
      it { is_expected.to have_http_status :forbidden }
      it 'should not update user' do
        subject
        expect(user.reload.admin?).to eq(true)
      end
    end
  end

end