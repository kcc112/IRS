require 'rails_helper'

RSpec.describe EnterpriseSerializer, type: :serializer do

  describe '#serializable_hash' do
    let(:enterprise) { create :enterprise }
    subject { EnterpriseSerializer.new(enterprise).serializable_hash }
    
    context 'when single object passed' do
      it 'should serialize basic attributes' do
        expect(subject[:data][:attributes]).to have_key(:name)
        expect(subject[:data][:attributes]).to have_key(:description)
      end

      it 'should have expected values' do
        expect(subject[:data][:attributes][:name]).to eq(enterprise.name)
        expect(subject[:data][:attributes][:description]).to eq(enterprise.description)
      end
    end
  end

end