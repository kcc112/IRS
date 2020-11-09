class UserPolicy < ApplicationPolicy

  def deactivate?
    user.admin?
  end

  def activate?
    user.admin?
  end

end