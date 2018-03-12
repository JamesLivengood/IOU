class DeleteCurrentBalanceFromUsersTable < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :current_user_balance
  end
end
