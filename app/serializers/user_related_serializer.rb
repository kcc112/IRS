class UserRelatedSerializer
  include FastJsonapi::ObjectSerializer
  has_one :user_informations, serializer: UserInformations::UserInformationsSerializer
end