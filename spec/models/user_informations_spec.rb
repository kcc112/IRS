require 'rails_helper'

RSpec.describe UserInformations, type: :model do

  describe 'attributes' do
    it 'should have proper attributes' do
      expect(subject.attributes).to include(
        'created_at',
        'id',
        'name',
        'phone_number',
        'surname',
        'updated_at',
        'user_id'
      )  
    end
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of :name }
    it { is_expected.to validate_presence_of :surname }
    it { should_not allow_values('1', 'ą', '@').for(:name) }
    it { should allow_values('kamil', 'kAmil', 'Kamil').for(:name) }
    it { should_not allow_values('1', 'ą', '@').for(:surname) }
    it { should allow_values('kamil', 'kAmil', 'Kamil').for(:surname) }
  end

  describe 'relations' do
    it { is_expected.to belong_to :user }
  end

  describe 'callbacks' do
    context 'after_create' do
      let(:user) { create :user }
      it 'should create user informations' do
        expect(UserInformations.where(user_id: user.id)).to exist  
      end
    end
  end

end