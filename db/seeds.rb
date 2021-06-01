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
# Reblog.destroy_all

# New tags
abjuration = Tag.create(tag_name: 'abjuration')
academy = Tag.create(tag_name: 'academy')
acid = Tag.create(tag_name: 'acid')
adamantine = Tag.create(tag_name: 'adamantine')
adventure = Tag.create(tag_name: 'adventure')
alchemists = Tag.create(tag_name: 'alchemists')
alchemy = Tag.create(tag_name: 'alchemy')
ancients = Tag.create(tag_name: 'ancients')
angels = Tag.create(tag_name: 'angels')
arcane_focus = Tag.create(tag_name: 'arcane focus')
aristocrats = Tag.create(tag_name: 'aristocrats')
artifacts = Tag.create(tag_name: 'artifacts')
artificers = Tag.create(tag_name: 'artificers')
assassins = Tag.create(tag_name: 'assassins')
axes = Tag.create(tag_name: 'axes')
barbarians = Tag.create(tag_name: 'barbarians')
beasts = Tag.create(tag_name: 'beasts')
blacksmithing = Tag.create(tag_name: 'blacksmithing')
blood_magic = Tag.create(tag_name: 'blood magic')
blood_oath = Tag.create(tag_name: 'blood oath')
books = Tag.create(tag_name: 'books')
bows = Tag.create(tag_name: 'bows')
bronze_rank = Tag.create(tag_name: 'bronze rank')
caravans = Tag.create(tag_name: 'caravans')
cave = Tag.create(tag_name: 'cave')
celestials = Tag.create(tag_name: 'celestials')
chaotic = Tag.create(tag_name: 'chaotic')
clerics = Tag.create(tag_name: 'clerics')
# tags = ["common","commoners","conjuration","contracts","copper","creatures","cultists","daggers","dark lord","demons","devils","diamond rank","dire wolves","divination","djinn","doppelgangers","dragonborn","dragons","drakes","drow","druids","duergar","dungeons","dwarves","earth","elves","enchantment","ents","evil","evocation","fallen kingdom","fey","fire","fireball","forests","genasi","ghosts","gnomes","goblins","goddesses","gods","gold","gold rank","goliaths","good","grimoires","guilds","halflings","hammers","humans","hunt","ice","illusion","infernals","kami","king","kingdom","lawful","legendary","leonin","liches","lightning","magic", "magic items", "magic staff","magic sword","magic wand","magical","magical creatures","merchants","monks","murder","mystery","mythic","mythril","necromancy","neutral","nobles","obsidian rank","orcs","outer planes","outsider","pit fiend","plane of existence","platinum","platinum rank","plot","polearms","political intrigue","porcelain rank","power","precursors","prince","princess","pseudodragons","queen","rangers","rare","rogues","satyr","scholars","silver","silver rank","slimes","sorcerers","sorcery","spell components","spellbooks","spys","squire","staffs","steel rank","swords","teleport","tieflings","tomes","transmutation","trolls","uncommon","undead","unseelie court","vampires","warlocks","warriors","water","wilderness","wind","wizards","wurms"]
# for tag in tags
#   Tag.create(tag_name: tag)
# end

# New users

hero = User.create(username: "Generic_Hero", password: "hunter12", email: "generic_hero@fake.com");
hero_avatar = File.open('app/assets/adventr_seeder_images/avatars/generic_hero.jpg')
hero.avatar_image.attach(io: hero_avatar, filename: 'hero.jpg')

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




# user = User.find(15)
# tag = Tag.find(3)

# user.tags << tag
# user7.tags << tag2