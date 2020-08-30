FactoryBot.define do
  factory :enterprise do
    name { Faker::Name.unique.first_name }
    description { Faker::Movies::Hobbit.quote  } 
  end
end