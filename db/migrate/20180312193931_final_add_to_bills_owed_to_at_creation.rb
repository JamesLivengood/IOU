class FinalAddToBillsOwedToAtCreation < ActiveRecord::Migration[5.1]
  def change
    add_column :bills, :owed_to_at_creation_user_id, :float, null: false
  end
end
