class Issue < ApplicationRecord
  enum issue_type: [:other]
  enum status: [:unassigned, :assigned, :resolved]
  
  belongs_to :reported_by, class_name: 'User'
  belongs_to :assigned_to, class_name: 'User', optional: true
  
  has_many :comments, dependent: :destroy

  validates :description, presence: true
end
