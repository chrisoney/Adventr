json.extract! tag, :id, :tag_name, :created_at, :updated_at

json.quests tag.quests

json.users do
  users_who_favorited = []
  tag.users.each do |user|
    users_who_favorited << user.id
  end
  json.array! users_who_favorited
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