class CreatePayments < ActiveRecord::Migration[5.1]
  def change
    create_table :payments do |t|
      t.integer :bill_id
      t.integer :paying_user_id
      t.integer :submitting_user_id
      t.float :payment_amount

      t.timestamps
    end
    add_index :payments, :paying_user_id
    add_index :payments, :submitting_user_id
  end
end
