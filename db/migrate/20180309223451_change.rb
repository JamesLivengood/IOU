class Change < ActiveRecord::Migration[5.1]
  def change
      rename_column :bills, :owed_by_user_id, :owing_at_creation_user_id
  end
end
