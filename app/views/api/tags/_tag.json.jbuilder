json.extract! tag, :id, :tag_name, :created_at, :updated_at

json.quests tag.quests
json.users do
  users_who_favorited = []
  tag.users.each do |user|
    users_who_favorited << user.id
  end
  json.array! users_who_favorited
end
