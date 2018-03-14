# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

20.times do
  name = Faker::GameOfThrones.character
  email = name.downcase.split(' ').join('_')
  User.create(email: "#{email}@gmail.com", password: 'swagger', name: name)
end

50.times do
  Bill.create(total_bill_amount: rand(100..500), amount_originally_owed: rand(10..99), owing_at_creation_user_id: rand(1..10), owed_to_at_creation_user_id: rand(11..20), description: Faker::GameOfThrones.dragon)
end


Bill.all.each do |bill|
  Friendship.create(user1_id: bill.owed_to_at_creation_user_id, user2_id: bill.owing_at_creation_user_id)
end

# Bill.all.each do |bill|
#   BillJoin.create(user_id: rand(1..20), bill_id: bill.id, owing: false)
#   BillJoin.create(user_id: bill.owing_at_creation_user_id, bill_id: bill.id, owing: true)
# end
