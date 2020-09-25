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

if user.profile_picture.attached?
  json.imageUrl = url_for(user.profile_picture)
  json.imageFile = user.profile_picture.blob_id
  json.imageFile2 = user.profile_picture
end