# == Schema Information
#
# Table name: bills
#
#  id                        :integer          not null, primary key
#  total_bill_amount         :float            not null
#  amount_originally_owed    :float            not null
#  owing_at_creation_user_id :integer          not null
#  created_at                :datetime         not null
#  updated_at                :datetime         not null
#

class Bill < ApplicationRecord
  #
  # has_many :bill_joins,
  #   class_name: 'BillJoin',
  #   foreign_key: :bill_id
  #
  # has_many :users,
  #   through: :bill_joins,
  #   source: :user

  has_many :payments

  belongs_to :owing_at_creation_user,
    class_name: 'User',
    foreign_key: :owing_at_creation_user_id

  belongs_to :owed_to_at_creation_user,
    class_name: 'User',
    foreign_key: :owed_to_at_creation_user_id

  def users
    return [self.owing_at_creation_user, self.owed_to_at_creation_user]
  end

  def balance
    #returns current balance always to the owing_at_creation user
    #so if it returns a negative number, it means the only user is currently owing the balance
    return_balance = self.amount_originally_owed
    self.payments.each do |payment|
      if payment.paying_user_id === self.owing_at_creation_user_id
        return_balance -= payment.payment_amount
      else
        return_balance += payment.payment_amount
      end
    end
    return return_balance
  end

  def owing_user
    if self.current_balance > 0
      return User.find(self.owing_at_creation_user_id)
    else
      user_id_arr = self.users.map {|user| user.id unless user.id == self.owing_at_creation_user_id}
      return user_id_arr[0]
    end
  end

end
