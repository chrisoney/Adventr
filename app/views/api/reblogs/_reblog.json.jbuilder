json.extract! reblog, :id, :reblogger_id, :quest_id, :body

json.rebloggerId reblog.user.id
json.reblogger reblog.user

json.quest reblog.quest
json.quest_author reblog.quest.user

json.tag_joins reblog.tag_joins.each do |tag_join|
      json.set! :id, tag_join.id
      json.set! :tag, tag_join.tag
end