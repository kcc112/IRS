class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :email

  belongs_to :enterprise, serializer: EnterpriseSerializer
  
  has_one :user_informations, serializer: UserInformations::UserInformationsSerializer
end