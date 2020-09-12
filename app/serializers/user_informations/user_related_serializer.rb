class UserInformations::UserRelatedSerializer
  include FastJsonapi::ObjectSerializer
  set_type :user
  attributes :email, :role

  attribute :created_at do |object|
    object.created_at.to_i
  end

  has_one :enterprise, record_type: :enterprise, serializer: UserInformations::EnterpriseRelatedSerializer
end