class AddDetailsToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :current_sign_in_at, :datetime
  end
end
