require 'rails_helper'

RSpec.describe Comment, type: :model do

  describe 'attributes' do
    it 'should have proper attributes' do
      expect(subject.attributes).to include(
        'content',
        'created_at',
        'id',
        'issue_id',
        'updated_at',
        'user_id',
      )  
    end
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of :content }
  end

  describe 'relations' do
    it { is_expected.to belong_to :user }
    it { is_expected.to belong_to :issue }
  end
end