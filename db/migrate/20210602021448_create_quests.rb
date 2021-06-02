class CreateQuests < ActiveRecord::Migration[5.2]
  def change
    create_table :quests do |t|
      t.integer :user_id, null: false
      t.string  :title
      t.text    :text
      t.string :quest_type
    
      t.timestamps
    end
    add_index :quests, [:user_id, :id]
  end
end
