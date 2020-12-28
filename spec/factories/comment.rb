FactoryBot.define do
  factory :comment do
    content { Faker::Movies::Hobbit.quote  } 
  end
end