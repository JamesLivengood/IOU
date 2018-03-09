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

require 'test_helper'

class PaymentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
