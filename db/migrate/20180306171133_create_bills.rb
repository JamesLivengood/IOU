class CreateBills < ActiveRecord::Migration[5.1]
  def change
    create_table :bills do |t|
      t.float :total_bill_amount, null: false
      t.float :amount_originally_owed, null: false
      t.integer :owed_by_user_id, null: false

      t.timestamps
    end
      add_index :bills, :owed_by_user_id
  end
end
