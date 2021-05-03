class CreateReblogs < ActiveRecord::Migration[5.2]
  def change
    create_table :reblogs do |t|
      t.integer :user_id, null: false
      t.integer :quest_id, null: false
      t.string :text
      t.timestamps
    end
    add_index :reblogs, [:user_id, :quest_id], unique: true
  end
end
