json.extract! user, :id, :name, :email
json.total_balance user.total_balance
json.you_owe user.you_owe
json.you_are_owed user.you_are_owed
json.bills user.bills
# json.favorite_benches user.favorite_benches.pluck(:id)
