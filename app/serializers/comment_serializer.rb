class CommentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :comment, :created_at, :updated_at
end