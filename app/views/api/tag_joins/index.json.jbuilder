@tag_joins.each do |tag_join|
  json.set! tag_join.id do
    json.partial! 'tag_join', tag_join: tag_join
  end
end