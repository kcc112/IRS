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
    it { should_not allow_values('1', 'ą', '@').for(:name) }
    it { should allow_values('kamil', 'kAmil', 'Kamil').for(:name) }
  end

  describe 'relations' do
    it { is_expected.to have_many :users }
  end
end