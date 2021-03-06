json.extract! reblog, :id, :user_id, :quest_id, :text, :created_at, :updated_at

json.author reblog.user
json.authorId reblog.user.id

json.quest reblog.quest
# if reblog.quest.images.attached?
#       json.imageUrls reblog.quest.images.map {|image| url_for(image) }
# end
json.likes reblog.likes.count
json.quest_author reblog.quest.user
if reblog.user.avatar_image.attached?
      json.authorAvatar url_for(reblog.user.avatar_image)
end
json.tag_joins reblog.tag_joins.each do |tag_join|
      json.set! :id, tag_join.id
      json.set! :tag, tag_join.tag
end