class DeleteOwedUserFromBills < ActiveRecord::Migration[5.1]
  def change
    remove_column :bills, :owing_at_creation_user_id
  end
end
