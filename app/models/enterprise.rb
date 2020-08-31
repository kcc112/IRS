class Enterprise < ApplicationRecord
  has_many :users, dependent: :nullify

  validates :name, presence: true, uniqueness: true, format: { with: /\A[a-zA-Z]+\z/ }
end