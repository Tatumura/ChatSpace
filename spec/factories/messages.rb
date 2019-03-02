FactoryGirl.define do
  factory :message do
    content Faker::Lorem.sentence
    image File.open("#{Rails.root}/spec/images//IMG_3470.jpg")
    user
    group
  end
end
