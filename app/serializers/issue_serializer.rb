class IssueSerializer
  include FastJsonapi::ObjectSerializer
  attributes :description, :issue_type, :created_at, :updated_at
  
  belongs_to :reported_by, serializer: UserRelatedSerializer
  belongs_to :assigned_to, serializer: UserRelatedSerializer
end