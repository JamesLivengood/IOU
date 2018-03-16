# == Schema Information
#
# Table name: friendships
#
#  id         :integer          not null, primary key
#  user1_id   :integer          not null
#  user2_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Friendship < ApplicationRecord

  def friend_history
    final = []
    Bill.where(owing_at_creation_user_id: user1_id, owed_to_at_creation_user_id: user2_id).each do |bill|
      final << bill
      bill.payments.each do |payment|
        final << payment
      end
    end
    Bill.where(owing_at_creation_user_id: user2_id, owed_to_at_creation_user_id: user1_id).each do |bill|
      final << bill
      bill.payments.each do |payment|
        final << payment
      end
    end
    (final.sort_by {|item| item.created_at}).reverse
  end

end
