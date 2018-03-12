class BillOwedToChangeToInteger < ActiveRecord::Migration[5.1]
  def change
    change_column :bills, :owed_to_at_creation_user_id, :integer
    change_column :bills, :owing_at_creation_user_id, :integer
  end
end
