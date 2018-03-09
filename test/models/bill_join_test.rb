# == Schema Information
#
# Table name: bill_joins
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  bill_id    :integer          not null
#  owing      :boolean          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class BillJoinTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
