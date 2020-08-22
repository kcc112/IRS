class UserInformations < ApplicationRecord
  belongs_to :user

  validates :name, presence: true, format: { with: /\A[a-zA-Z]+\z/ }
  validates :surname, presence: true, format: { with: /\A[a-zA-Z]+\z/ }
end