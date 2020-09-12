class UserInformations::UserInformationsSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :surname, :phone_number
  
  has_one :user, serializer: UserInformations::UserRelatedSerializer
end