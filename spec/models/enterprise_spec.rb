require 'rails_helper'

RSpec.describe Enterprise, type: :model do

  describe 'attributes' do
    it 'should have proper attributes' do
      expect(subject.attributes).to include(
        'created_at',
        'description',
        'id',
        'name',
        'updated_at',
      )  
    end
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of :name }
    it { is_expected.to validate_uniqueness_of :name }
  end

  describe 'relations' do
    it { is_expected.to have_many(:users).dependent(:nullify) }
  end
end