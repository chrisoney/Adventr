class AddGuildInfo < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :guild_name, :string
    add_column :users, :guild_description, :string
  end
end
