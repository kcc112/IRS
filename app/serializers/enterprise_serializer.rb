class EnterpriseSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :description
end