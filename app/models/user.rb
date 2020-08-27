class User < ApplicationRecord
  enum role: [:notifier, :receiver, :admin]

  belongs_to :enterprise, optional: true
  
  has_one :user_informations
  
  has_many :comments
  has_many :issues_reported, class_name: 'Issue', foreign_key: 'reported_by_id'
  has_many :issues_assigned, class_name: 'Issue', foreign_key: 'assigned_to_id'
  
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :trackable
end
