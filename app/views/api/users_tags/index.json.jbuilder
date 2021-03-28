@users_tags.each do |users_tag|
  json.set! users_tag.id do
    json.partial! 'users_tag', users_tag: users_tag
  end
end