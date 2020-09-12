require 'rails_helper'

RSpec.describe UserInformations::UserInformationsSerializer, type: :serializer do

  describe '#serializable_hash' do
    let(:user) { create :user }
    let(:user_informations) { create :user_informations, user_id: user.id }
    subject { UserInformations::UserInformationsSerializer.new(user_informations).serializable_hash }
    
    context 'when single object passed' do
      it 'should serialize basic attributes' do
        expect(subject[:data][:attributes]).to have_key(:name)
        expect(subject[:data][:attributes]).to have_key(:surname)
        expect(subject[:data][:attributes]).to have_key(:phone_number)
      end

      it 'should have expected values' do
        expect(subject[:data][:attributes][:name]).to eq(user_informations.name)
        expect(subject[:data][:attributes][:surname]).to eq(user_informations.surname)
        expect(subject[:data][:attributes][:phone_number]).to eq(user_informations.phone_number)
      end
    end
  end

end