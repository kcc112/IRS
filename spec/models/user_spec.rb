require 'rails_helper'

RSpec.describe User, type: :model do

  describe 'attributes' do
    it 'should have proper attributes' do
      expect(subject.attributes).to include(
        'created_at',
        'current_sign_in_at',
        'current_sign_in_ip',
        'email',
        'encrypted_password',
        'id',
        'last_sign_in_at',
        'last_sign_in_ip',
        'remember_created_at',
        'reset_password_sent_at',
        'reset_password_token',
        'sign_in_count',
        'updated_at',
      )  
    end
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of :email }
    it { is_expected.to validate_length_of(:password).is_at_least(6) }
  end
end
