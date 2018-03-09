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

  has_many :bill_joins,
    class_name: 'BillJoin',
    foreign_key: :bill_id

  has_many :users,
    through: :bill_joins,
    source: :user

  has_many :payments

  def current_balance
    x = amount_currently_owed
    self.payments.each do |payment|
      
    end
    return x
  end

  def owing_user

  end

end
