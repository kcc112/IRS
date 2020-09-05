FactoryBot.define do
  factory :comment do
    comment { Faker::Movies::Hobbit.quote  } 
  end
end