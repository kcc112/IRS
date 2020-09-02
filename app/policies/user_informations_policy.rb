class UserInformationsPolicy < ApplicationPolicy

  def index?
    user.admin?
  end

  def show?
    user.admin? or record.user_id == user.id
  end

  def update?
    user.admin? or record.user_id == user.id
  end

end