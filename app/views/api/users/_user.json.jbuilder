json.extract! user, :id, :name, :email

json.total_balance user.total_balance
json.you_owe user.you_owe
json.you_are_owed user.you_are_owed
json.bills user.bills
json.owed_bills user.owed_bills
json.you_are_owed_bills user.you_are_owed_bills
json.owed_bills_info user.owed_bills_info
json.you_are_owed_bills_info user.you_are_owed_bills_info
json.friends user.friends
json.highest_friend_balance user.highest_friend_balance
json.friend_and_balance_array user.friend_and_balance_array
