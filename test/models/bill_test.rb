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

require 'test_helper'

class BillTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
