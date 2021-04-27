json.extract! quest, :id, :user_id, :title, :text, :quest_type, :content_url, :created_at, :updated_at

if quest.images.attached?
      json.imageUrls quest.images.map {|image| url_for(image) }
      json.imageFiles quest.images.map {|image| (image.blob_id) }
      json.imageFiles2 quest.images.map {|image| (image) }
end

json.likes quest.likes.count
json.authorId quest.user.id
json.author quest.user
if quest.user.avatar_image.attached?
      json.authorAvatar url_for(quest.user.avatar_image)
end
json.tag_joins quest.tag_joins.each do |tag_join|
      json.set! :id, tag_join.id
      json.set! :tag, tag_join.tag
end