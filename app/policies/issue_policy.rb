class IssuePolicy < ApplicationPolicy

  def index?
    true
  end

  def show?
    true
  end
  
  def create?
    user.notifier?
  end
  
  def update?
    user.notifier? and record.reported_by_id == user.id
  end
  
  def destroy?
    user.admin? or ( user.notifier? and record.reported_by_id == user.id )
  end

  def assign_receiver?
    user.receiver? and user.enterprise_id === record.reported_by.enterprise_id
  end

  def resolve_issue?
    user.receiver? and record.assigned_to_id == user.id
  end

  def issue_types?
    true
  end

end
