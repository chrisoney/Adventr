class CreateTagJoins < ActiveRecord::Migration[5.2]
  def change
    create_table :tag_joins do |t|
      t.integer :tag_id, null: false
      t.integer :taggable_id, null: false
      t.string :taggable_type, null: false
      t.integer :order
      t.timestamps
    end
    add_index :tag_joins, [:tag_id, :taggable_id, :taggable_type]
  end
end
