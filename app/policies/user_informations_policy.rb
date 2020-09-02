class UserInformationsPolicy < ApplicationPolicy

  def index?
    user.admin?
  end

  def show?
    user.admin? or record.user_id == user.user_informations.user_id
  end

  def update?
    user.admin? or record.user_id == user.user_informations.user_id
  end

end