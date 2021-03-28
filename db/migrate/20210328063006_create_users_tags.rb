class CreateUsersTags < ActiveRecord::Migration[5.2]
  def change
    create_table :users_tags do |t|
      t.integer :user_id, null: false
      t.integer :tag_id, null: false
      t.timestamps
    end
    add_index :users_tags, [:user_id, :tag_id]
  end
end
