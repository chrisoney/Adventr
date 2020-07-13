class AddPostColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :quests, :quest_type, :string, null: false
  end
end
