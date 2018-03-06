class CreateGroups < ActiveRecord::Migration[5.1]
  def change
    create_table :groups do |t|
      t.integer :group_owner_id, null: false

      t.timestamps
    end
  end
end
