class IssuePolicy < ApplicationPolicy

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
    user.receiver? and record.assigned_to_id.nil?
  end

  def resolve_issue?
    user.receiver? and record.assigned_to_id == user.id
  end

end
