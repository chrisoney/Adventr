@quests.each do |quest|
  json.set! quest.id do
    json.partial! 'quest', quest: quest
  end
end