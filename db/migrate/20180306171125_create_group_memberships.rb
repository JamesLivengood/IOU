class CreateGroupMemberships < ActiveRecord::Migration[5.1]
  def change
    create_table :group_memberships do |t|
      t.integer :group_id, null: false
      t.integer :group_member_id, null: false

      t.timestamps
    end
    add_index :group_memberships, :group_id
    add_index :group_memberships, :group_member_id
    add_index :group_memberships, [:group_id, :group_member_id], unique: true
  end
end
