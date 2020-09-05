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

end