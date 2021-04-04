# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.destroy_all
# Quest.destroy_all
# Like.destroy_all
# Follow.destroy_all
Tag.destroy_all
# TagJoin.destroy_all
# Reblog.destroy_all


# New users
# user1 = User.create(username: "fake-user", password: "hunter12", email: "fakeuser@fake.com", avatar: "https://adventr-dev.s3-us-west-1.amazonaws.com/paladin.jpg");
# user2 = User.create(username: "terriblis", password: "hunter12", email: "terriblis@fake.com", avatar: "https://adventr-dev.s3-us-west-1.amazonaws.com/SezbQhN.png");
# user3 = User.create(username: "carl", password: "hunter12", email: "carl@fake.com", avatar: "https://adventr-dev.s3-us-west-1.amazonaws.com/profile1.jpg");
# user4 = User.create(username: "matthew-brightfield", password: "hunter12", email: "matt@fake.com", avatar: "https://adventr-dev.s3-us-west-1.amazonaws.com/profile2.jpg");
# user5 = User.create(username: "jess", password: "hunter12", email: "jess@fake.com", avatar: "https://adventr-dev.s3-us-west-1.amazonaws.com/profile3.jpg");
# user6 = User.create(username: "Carla-the-Indomitable", password: "hunter12", email: "carla@fake.com", avatar: "https://adventr-dev.s3-us-west-1.amazonaws.com/profile4.jpg");
# user7 = User.create(username: "worry", password: "hunter12", email: "worry@worry.com");

# New quests

# user1.quests.create(title: "Goblin Hunt", text: "There have been goblins spotted nearby", quest_type: "text");
# user2.quests.create(title: "Ogre Hunt", text: "Five gold per head", quest_type: "text");
# user1.quests.create(title: "Free fire magic lessons", text: "Must bring change of clothes", quest_type: "text");
# user1.quests.create(title: "Sewer cleanup", text: "Rats in the sewers. You know the drill.", quest_type: "text");
# user2.quests.create(title: "Escort request", text: "From here to Plainsburrow. Silver Rank minimum. Payment on arrival.", quest_type: "text");
# user1.quests.create(title: "Unidentified dagger",text: "Can anyone determine its value?", quest_type: "image", content_url: "https://adventr-dev.s3-us-west-1.amazonaws.com/SezbQhN.png")

# New tags

Tag.create(tag_name: "warriors")
Tag.create(tag_name: "clerics")
Tag.create(tag_name: "rogues")
Tag.create(tag_name: "rangers")
Tag.create(tag_name: "warlocks")
Tag.create(tag_name: "wizards")
Tag.create(tag_name: "sorcerers")
Tag.create(tag_name: "goblins")
Tag.create(tag_name: "orcs")
Tag.create(tag_name: "slimes")
Tag.create(tag_name: "dragons")
Tag.create(tag_name: "gold rank")
Tag.create(tag_name: "silver rank")
Tag.create(tag_name: "bronze rank")
Tag.create(tag_name: "porcelain rank")
Tag.create(tag_name: "iron rank")
Tag.create(tag_name: 'diamond rank')
# tag = Tag.find(8)

# user = User.find(15)
# tag = Tag.find(3)

# user.tags << tag
# user7.tags << tag2