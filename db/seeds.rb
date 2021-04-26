# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# TagJoin.destroy_all
# Follow.destroy_all
# Like.destroy_all
# Reblog.destroy_all
# Quest.destroy_all
# User.destroy_all
# Tag.destroy_all

# New tags
# tags = ["abjuration","academy","acid","adamantine","adventure","ancients","angels","arcane focus","aristocrats","artifacts","assassins","axes","barbarians","beasts","blacksmithing","blood magic","blood oath","books","bows","bronze rank","caravans","cave","celestials","chaotic","clerics","common","commoners","conjuration","contracts","copper","creatures","cultists","daggers","dark lord","demons","devils","diamond rank","dire wolves","divination","djinn","doppelgangers","dragonborn","dragons","drakes","drow","druids","duergar","dungeons","dwarves","earth","elves","enchantment","ents","evil","evocation","fallen kingdom","fey","fire","fireball","forests","genasi","ghosts","gnomes","goblins","goddesses","gods","gold","gold rank","goliaths","good","grimoires","guilds","halflings","hammers","humans","hunt","ice","illusion","infernals","kami","king","kingdom","lawful","legendary","leonin","liches","lightning","magic", "magic items", "magic staff","magic sword","magic wand","magical","magical creatures","merchants","monks","murder","mystery","mythic","mythril","necromancy","neutral","nobles","obsidian rank","orcs","outer planes","outsider","pit fiend","plane of existence","platinum","platinum rank","plot","polearms","political intrigue","porcelain rank","power","precursors","prince","princess","pseudodragons","queen","rangers","rare","rogues","satyr","scholars","silver","silver rank","slimes","sorcerers","sorcery","spell components","spellbooks","spys","squire","staffs","steel rank","swords","teleport","tieflings","tomes","transmutation","trolls","uncommon","undead","unseelie court","vampires","warlocks","warriors","water","wilderness","wind","wizards","wurms"]
# for tag in tags
#   Tag.create(tag_name: tag)
# end
# New users
users = []
users_usernames = []
users_emails = []
users_guild_names = []
users_guild_descriptions = []
users_avatars_filenames = []
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
# user = User.find(15)

# quest = Quest.find(144)
# file = File.open('app/assets/adventr_seeder_images/quest_images/dagger1.jpg')
# quest.images.attach(io: file, filename: 'dagger.jpg')
# quest.tags << tag

# tag = Tag.find(8)

# user = User.find(15)
# tag = Tag.find(3)

# user.tags << tag
# user7.tags << tag2