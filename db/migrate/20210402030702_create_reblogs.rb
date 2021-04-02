class CreateReblogs < ActiveRecord::Migration[5.2]
  def change
    create_table :reblogs do |t|
      t.integer :reblogger_id, null: false
      t.integer :quest_id, null: false
      t.integer :body, null: false
      t.timestamps
    end
    add_index :reblogs, [:reblogger_id, :quest_id], unique: true
  end
end
