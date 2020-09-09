json.extract! user, :id, :username, :email, :avatar
json.follows user.follows
json.likedQuests do
  liked_ids = []
  user.liked_quests.each do |quest|
    liked_ids << quest.id
  end
  json.array! liked_ids
end
json.following do
  followed_user_ids = []
  user.following.each do |user|
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

if user.profile_pictures.attached?
  json.imageUrls user.profile_pictures.map {|image| url_for(image) }
  json.imageFiles user.profile_pictures.map {|image| (image.blob_id) }
  json.imageFiles2 user.profile_pictures.map {|image| (image) }
end