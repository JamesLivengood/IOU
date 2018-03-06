class MakeDefaultUserBalanceZero < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :current_user_balance, :float, :default => 0.00
  end
end
