class EnterprisePolicy < ApplicationPolicy

  def index?
    user.admin?
  end

end