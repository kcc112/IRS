require 'rails_helper'

RSpec.describe AppController, type: :controller do
  login_admin

  describe 'GET #index' do
    subject { get :index }
    it { is_expected.to be_successful } 
  end

end