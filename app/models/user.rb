class User < ApplicationRecord
  after_create :create_user_informations, :send_email_to_admin

  enum role: [:notifier, :receiver, :admin]

  belongs_to :enterprise, optional: true
  
  has_one :user_informations
  
  has_many :comments
  has_many :issues_reported, class_name: 'Issue', foreign_key: 'reported_by_id'
  has_many :issues_assigned, class_name: 'Issue', foreign_key: 'assigned_to_id'
  
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :trackable, :confirmable

  def active_for_authentication?
    super && !deactivated
  end

  private
    def create_user_informations
      self.build_user_informations.save(validate: false)
    end

    def send_email_to_admin
      AdminMailer.with(user: self).unlock_user_email.deliver_later
    end
end