require 'rails_helper'

RSpec.describe Issue, type: :model do

  describe 'attributes' do
    it 'should have proper attributes' do
      expect(subject.attributes).to include(
        'assigned_to_id',
        'created_at',
        'description',
        'id',
        'issue_type',
        'reported_by_id',
        'updated_at',
        'status'
      )  
    end
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of :description }
  end

  describe 'relations' do
    it { is_expected.to belong_to :reported_by }
    it { is_expected.to belong_to(:assigned_to).optional }
    it { is_expected.to have_many(:comments).dependent(:destroy) }
    it { should define_enum_for(:issue_type).with_values([:other, :equipment, :air_conditioning]) }
    it { should define_enum_for(:status).with_values([:unassigned, :assigned, :resolved]) }
  end
end