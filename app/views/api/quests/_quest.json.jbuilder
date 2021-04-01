json.extract! quest, :id, :user_id, :title, :text, :tags, :quest_type, :content_url, :created_at, :updated_at

if quest.images.attached?
      json.imageUrls quest.images.map {|image| url_for(image) }
      json.imageFiles quest.images.map {|image| (image.blob_id) }
      json.imageFiles2 quest.images.map {|image| (image) }
end

json.likes quest.likes.count
json.authorId quest.user.id
json.author quest.user
json.tags quest.tags