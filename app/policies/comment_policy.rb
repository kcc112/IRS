class CommentPolicy < ApplicationPolicy

  def show?
    true
  end

  def create?
    true
  end

  def update?
    record.user_id == user.id
  end

  def destroy?
    user.admin? or record.user_id == user.id
  end

  def issues_list?
    true
  end

end