json.extract! tag, :id, :tag_name, :created_at, :updated_at

json.quests tag.quests


quest_data = {}
tag.quests.each do |quest|
  if quest.images.attached? && quest.quest_type == 'image'
    quest_data["quest_urls"] = quest.images.map {|image| url_for(image) }
    quest_data["user"] = quest.user
    if quest.user.avatar_image.attached?
     quest_data["user_avatar"] = url_for(quest.user.avatar_image)
    end
    if quest_data["user_avatar"]
      break
    end
  end
end
json.quest_data quest_data


json.users do
  users_who_favorited = []
  tag.users.each do |user|
    users_who_favorited << user.id
  end
  json.array! users_who_favorited
end

tag.tag_joins.each do |tag_join|
  if tag_join.taggable_id === current_user.id && tag_join.taggable_type === "User"
    json.set! :current_tag_join, tag_join
  end
end

# json.quests tag.quests.each do |quest|
#   json.id quest.id
#   json.title quest.title
#   if quest.images.attached?
#     json.imageUrls quest.images.map {|image| url_for(image) }
#       json.imageFiles quest.images.map {|image| (image.blob_id) }
#       json.imageFiles2 quest.images.map {|image| (image) }
#   end
# end