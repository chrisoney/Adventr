class CreateQuests < ActiveRecord::Migration[5.2]
  def change
    create_table :quests do |t|
      t.integer :original_quest_id
      t.integer :user_id, null: false
      t.string  :title
      t.text    :text
      t.string  :content_url
      t.string  :tags
    
      t.timestamps
    end
    add_index :quests, [:user_id, :id]
  end
end
