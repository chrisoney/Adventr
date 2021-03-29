json.extract! user, :id, :username, :email, :guild_name, :guild_description,:avatar

if user.avatar_image.attached?
  json.imageUrl url_for(avatar_image)
  json.imageFile avatar_image.blob_id
  json.imageFile2 avatar_image
end

json.follows user.follows
json.tags user.tags
# json.tags user.tags.each do |tag|
#   json.set! :id, tag.id
#   json.set! :quests, json.quests do
#     tag_quests = []
#     tag.quests.each do |quest|
#       tag_quests << quest
#     end
#   end
# end

json.likedQuests do
  liked_ids = []
  user.liked_quests.each do |quest|
    liked_ids << quest.id
  end
  json.array! liked_ids
end
json.followed_users do
  followed_user_ids = []
  user.followed_users.each do |user|
    followed_user_ids << user.id
  end
  json.array! followed_user_ids
end
json.authored_quests do
  authored_quests = []
  user.quests.each do |quest|
    authored_quests << quest.id
  end
  json.array! authored_quests
end
