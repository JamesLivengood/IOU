# == Schema Information
#
# Table name: group_memberships
#
#  id              :integer          not null, primary key
#  group_id        :integer          not null
#  group_member_id :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class GroupMembership < ApplicationRecord
end
