class CommentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :comment

  attribute :created_at do |object|
    object.created_at.to_i
  end

  attribute :updated_at do |object|
    object.created_at.to_i
  end

  has_one :user, serializer: UserRelatedSerializer
end