# == Schema Information
#
# Table name: groups
#
#  id             :integer          not null, primary key
#  group_owner_id :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

require 'test_helper'

class GroupTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
