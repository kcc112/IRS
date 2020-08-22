class Issue < ApplicationRecord
  enum issue_type: [:other]
  belongs_to :reported_by, class_name: 'User'
  belongs_to :assigned_to, class_name: 'User', optional: true
end
