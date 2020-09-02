FactoryBot.define do
  factory :issue do
    description { Faker::Movies::Hobbit.quote  } 
    issue_type { 'other' }
  end
end
