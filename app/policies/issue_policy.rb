class IssuePolicy < ApplicationPolicy

  def show?
    true
  end
  
  def create?
    user.notifier?
  end
  
  def update?
    user.notifier? and record.reported_by_id = user.id
  end
  
  def destroy?
    user.adimi? or ( user.notifier? and record.reported_by_id = user.id )
  end
  
  def change_status?
    user.receiver? and record.reported_by_id = user.id
  end

  def assign_receiver?
    user.receiver?
  end

end
