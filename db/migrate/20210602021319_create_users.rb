class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false, unique: true
      t.string :email, null: false, unique: true
      t.string :password_digest, null: false, unique: true
      t.string :guild_name
      t.text :guild_description
      t.string :session_token, null: false, unique: true
      t.timestamps
    end
    add_index   :users, [:username, :id]
  end
end
