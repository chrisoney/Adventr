@likes.each do |like|
  json.set! like.id do
      json.extract! like, :id, :quest_id
  end
end