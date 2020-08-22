require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  login_user

  describe 'GET #index' do
    subject { get :index }
    
    describe 'succesfull response' do
      it { is_expected.to be_successful }
      it { is_expected.to render_template :index }
    end

    context 'users' do
      it 'should return users list' do
        subject
        expect(assigns(:users).count).to eq 1
      end
    end
  end
end
