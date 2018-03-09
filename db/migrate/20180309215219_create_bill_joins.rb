class CreateBillJoins < ActiveRecord::Migration[5.1]
  def change
    create_table :bill_joins do |t|
      t.integer :user_id, null: false
      t.integer :bill_id, null: false
      t.boolean :owing, null: false

      t.timestamps
    end
    add_index :bill_joins, :user_id
    add_index :bill_joins, :bill_id
  end
end
