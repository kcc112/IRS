class UserInformations::UserRelatedSerializer
  include FastJsonapi::ObjectSerializer
  set_type :user
  attributes :email
end