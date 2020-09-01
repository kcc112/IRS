FactoryBot.define do
  factory :user_informations do
    name { Faker::Name.first_name }
    surname { Faker::Name.last_name } 
    phone_number { Faker::PhoneNumber.cell_phone }
  end
end