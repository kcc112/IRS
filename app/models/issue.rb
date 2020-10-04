class Issue < ApplicationRecord
  enum issue_type: [:other, :equipment, :air_conditioning]
  enum status: [:unassigned, :assigned, :resolved]
  
  belongs_to :reported_by, class_name: 'User'
  belongs_to :assigned_to, class_name: 'User', optional: true
  
  has_many :comments, dependent: :destroy

  validates :description, presence: true

  scope :associated_with_enterprise , -> (enterprise_id) { 
    self.joins(:reported_by).where(users: { enterprise_id: enterprise_id })
  }
end
