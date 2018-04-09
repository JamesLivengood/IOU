# == Schema Information
#
# Table name: payments
#
#  id                 :integer          not null, primary key
#  bill_id            :integer
#  paying_user_id     :integer
#  submitting_user_id :integer
#  payment_amount     :float
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class Payment < ApplicationRecord

  belongs_to :paying_user,
    class_name: 'User',
    foreign_key: :paying_user_id

  belongs_to :submitting_user,
    class_name: 'User',
    foreign_key: :submitting_user_id

  validates :payment_amount, numericality: { less_than_or_equal_to: 999999999, greater_than: 0 }



end
