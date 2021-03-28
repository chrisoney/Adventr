class CreateQuestsTags < ActiveRecord::Migration[5.2]
  def change
    create_table :quests_tags do |t|
      t.integer :quest_id, null:false
      t.integer :tag_id, null:false
      t.timestamps
    end
    add_index :quests_tags, [:quest_id, :tag_id]
  end
end
