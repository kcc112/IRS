class User < ApplicationRecord
  has_one :user_informations
  has_many :issues_reported, class_name: 'Issue', foreign_key: 'reported_by_id'
  has_many :issues_assigned, class_name: 'Issue', foreign_key: 'assigned_to_id'
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
