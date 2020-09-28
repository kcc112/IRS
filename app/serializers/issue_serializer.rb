class IssueSerializer
  include FastJsonapi::ObjectSerializer
  attributes :description, :issue_type

  attribute :created_at do |object|
    object.created_at.to_i
  end

  attribute :updated_at do |object|
    object.created_at.to_i
  end
  
  belongs_to :reported_by, serializer: UserRelatedSerializer
  belongs_to :assigned_to, serializer: UserRelatedSerializer
end