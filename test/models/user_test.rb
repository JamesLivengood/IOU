# == Schema Information
#
# Table name: users
#
#  id                   :integer          not null, primary key
#  email                :string           not null
#  password_digest      :string           not null
#  session_token        :string           not null
#  current_user_balance :float            default(0.0), not null
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#  name                 :string           not null
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
