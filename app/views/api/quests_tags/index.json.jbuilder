@quests_tags.each do |quests_tag|
  json.set! quests_tag.id do
    json.partial! 'quests_tag', quests_tag: quests_tag
  end
end