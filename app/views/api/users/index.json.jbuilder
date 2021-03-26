@users.each do |user|
  json.set! user.id do
      json.extract! user, :id, :username, :email, :avatar, :guild_name, :guild_description
  end
end