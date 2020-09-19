class RolePolicy < ApplicationPolicy

  def index?
    true
  end

  def update?
    user.admin?
  end

end