require 'rails_helper'

RSpec.describe Api::V1::Session::CurrentUserController , type: :controller do

  describe 'GET #index' do
    let(:enterprise) { create :enterprise }
    let(:user) { create :user, enterprise: enterprise }
    before { @request.env["devise.mapping"] = Devise.mappings[:user] }
    before { sign_in user }
    subject { get :index } 

    describe 'successful response' do
      it { is_expected.to be_successful }
    end

    context 'response' do
      it 'should be equal to json' do
        subject
        expect(response.body).to include_json(
          id: user.id,
          role:	user.role,
          email: user.email,
          name:	nil,
          surname: nil,
          enterprise: enterprise.name,
        )
      end
    end
  end

end