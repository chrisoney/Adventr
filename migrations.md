# Migrations

## Users

```ruby
  def change
    create_table :users do |t|
      t.string :username, null: false, unique: true
      t.string :email, null: false, unique: true
      t.string :password_digest, null: false, unique: true
      t.string :guild_name
      t.string :guild_description
      t.string :session_token, null: false, unique: true
      t.timestamps
    end
    add_index   :users, [:username, :id]
  end
```

## Active Storage Blobs

rails active_storage:install

## Quests

```ruby
def change
  create_table :quests do |t|
    t.integer :original_quest_id
    t.integer :user_id, null: false
    t.string  :title
    t.text    :text
    t.string :quest_type
  
    t.timestamps
  end
  add_index :quests, [:user_id, :id]
end
```

## Follows

```ruby
def change
  create_table :follows do |t|
    t.integer :user_id, null: false
    t.integer :follower_id, null: false
    t.timestamps
  end
  add_index :follows, [:user_id, :follower_id]
end
```

## Likes

```ruby
def change
  create_table :likes do |t|
    t.integer :user_id, null: false
    t.integer :likeable_id, null: false
    t.string :likeable_type, null: false
    t.timestamps
  end
  add_index :likes, [:user_id, :likeable_id, :likeable_type]
end
```
