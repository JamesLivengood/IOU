class AddDescriptionToBill < ActiveRecord::Migration[5.1]
  def change
    add_column :bills, :description, :string, null: false
  end
end
