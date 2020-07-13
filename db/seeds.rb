# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

user1 = User.create(username: "fake-user", password: "hunter12", email: "fakeuser@fake.com", avatar: "https://adventr-dev.s3-us-west-1.amazonaws.com/paladin.jpg");

user1.quests.create(title: "Goblin Hunt", text: "There have been goblins spotted nearby", quest_type: "text");
user1.quests.create(title: "Unidentified dagger",text: "Can anyone determine its value?", quest_type: "image", content_url: "https://adventr-dev.s3-us-west-1.amazonaws.com/SezbQhN.png")
