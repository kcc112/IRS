class CommentPolicy < ApplicationPolicy

  def show?
    true
  end

  def create?
    true
  end

  def update?
    user.notifier? and record.user_id == user.id
  end

  def destroy?
    user.admin? or ( user.notifier? and record.user_id == user.id )
  end

end