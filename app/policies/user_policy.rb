class UserPolicy < ApplicationPolicy

  def deactivate?
    user.admin?
  end

  def activate?
    user.admin?
  end

  def assign_user_to_enterprise?
    user.admin?
  end

end