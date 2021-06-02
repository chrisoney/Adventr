# Migrations

## Users

```ruby
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
```

## Option 2 - Users

```ruby
def change
  create_table :users do |t|
    t.string :username, null: false, unique: true
    t.string :email, null: false, unique: true
    t.string :password_digest, null: false, unique: true
    t.string :session_token, null: false, unique: true
    t.timestamps
  end
  add_index   :users, [:username, :id]
end
```

## Option 2 - Guilds

```ruby
def change
  create_table :guilds do |t|
    t.integer :user_id, null: false
    t.string :guild_name, null: false
    t.string :guild_description
    t.boolean :primary
    t.timestamps
  end
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

## Tags

```ruby
def change
  create_table :tags do |t|
    t.string :tag_name, null: false
    t.timestamps
  end
  add_index :tags, :tag_name, unique: true
end
```

## Tag Joins

```ruby
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
```

## Reblogs

```ruby
def change
  create_table :reblogs do |t|
    t.integer :user_id, null: false
    t.integer :quest_id, null: false
    t.string :text
    t.timestamps
  end
  add_index :reblogs, [:user_id, :quest_id], unique: true
end
```
