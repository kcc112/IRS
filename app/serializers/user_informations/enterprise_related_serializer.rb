class UserInformations::EnterpriseRelatedSerializer
  include FastJsonapi::ObjectSerializer
  set_type :enterprise
  attributes :name
end