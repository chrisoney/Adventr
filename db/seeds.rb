# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

TagJoin.destroy_all
# Follow.destroy_all
# Like.destroy_all
# Reblog.destroy_all
Quest.destroy_all
User.destroy_all
Tag.destroy_all
# Reblog.destroy_all

# New tags
abjuration = Tag.create(tag_name: 'abjuration')
academy = Tag.create(tag_name: 'academy')
acid = Tag.create(tag_name: 'acid')
adamantine = Tag.create(tag_name: 'adamantine')
adventure = Tag.create(tag_name: 'adventure')
ai = Tag.create(tag_name: 'ai')
alchemists = Tag.create(tag_name: 'alchemists')
alchemy = Tag.create(tag_name: 'alchemy')
anarchy = Tag.create(tag_name: 'anarchy')
ancients = Tag.create(tag_name: 'ancients')
angels = Tag.create(tag_name: 'angels')
arcane_focus = Tag.create(tag_name: 'arcane focus')
aristocrats = Tag.create(tag_name: 'aristocrats')
army = Tag.create(tag_name: 'army')
artifacts = Tag.create(tag_name: 'artifacts')
artificers = Tag.create(tag_name: 'artificers')
assassins = Tag.create(tag_name: 'assassins')
axes = Tag.create(tag_name: 'axes')
bandits = Tag.create(tag_name: 'bandits')
barbarians = Tag.create(tag_name: 'barbarians')
bards = Tag.create(tag_name: 'bards')
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
common = Tag.create(tag_name: 'common')
commoners = Tag.create(tag_name: 'commoners')
conjuration = Tag.create(tag_name: 'conjuration')
contracts = Tag.create(tag_name: 'contracts')
copper = Tag.create(tag_name: 'copper')
creatures = Tag.create(tag_name: 'creatures')
creller = Tag.create(tag_name: 'creller')
cultists = Tag.create(tag_name: 'cultists')
daggers = Tag.create(tag_name: 'daggers')
dark_lord = Tag.create(tag_name: 'darklord')
demon_army = Tag.create(tag_name: 'demon_army')
demons = Tag.create(tag_name: 'demons')
devils = Tag.create(tag_name: 'devils')
diamond_rank = Tag.create(tag_name: 'diamond rank')
dire_wolves = Tag.create(tag_name: 'dire wolves')
divination = Tag.create(tag_name: 'divination')
djinn = Tag.create(tag_name: 'djinn')
dopplegangers = Tag.create(tag_name: 'dopplegangers')
dragonborn = Tag.create(tag_name: 'dragonborn')
dragons = Tag.create(tag_name: 'dragons')
drakes = Tag.create(tag_name: 'drakes')
drow = Tag.create(tag_name: 'drow')
druids = Tag.create(tag_name: 'druids')
duergar = Tag.create(tag_name: 'duergar')
dungeons = Tag.create(tag_name: 'dungeons')
dwarves = Tag.create(tag_name: 'dwarves')
dynamos = Tag.create(tag_name: 'dynamos')
earth = Tag.create(tag_name: 'earth')
elves = Tag.create(tag_name: 'elves')
enchantment = Tag.create(tag_name: 'enchantment')
ents = Tag.create(tag_name: 'ents')
escort_quest = Tag.create(tag_name: 'escort quest')
evil = Tag.create(tag_name: 'evil')
evil_overlords = Tag.create(tag_name: 'evil overlords')
evocation = Tag.create(tag_name: 'evocation')
exploration = Tag.create(tag_name: 'exploration')
explosives = Tag.create(tag_name: 'explosives')
fetch = Tag.create(tag_name: 'fetch')
fallen_kingdom = Tag.create(tag_name: 'fallen kingdom')
familiars = Tag.create(tag_name: 'familiars')
fey = Tag.create(tag_name: 'fey')
fighters = Tag.create(tag_name: 'fighters')
fire = Tag.create(tag_name: 'fire')
fireball = Tag.create(tag_name: 'fireball')
food = Tag.create(tag_name: 'food')
forests = Tag.create(tag_name: 'forests')
genasi = Tag.create(tag_name: 'genasi')
ghosts = Tag.create(tag_name: 'ghosts')
gnomes = Tag.create(tag_name: 'gnomes')
goblins = Tag.create(tag_name: 'goblins')
goblin_champions = Tag.create(tag_name: 'goblin champions')
goblin_lords = Tag.create(tag_name: 'goblin lords')
goblin_kings = Tag.create(tag_name: 'goblin kings')
gods = Tag.create(tag_name: 'gods')
goddesses = Tag.create(tag_name: 'goddesses')
gold = Tag.create(tag_name: 'gold')
gold_rank = Tag.create(tag_name: 'gold rank')
goliaths = Tag.create(tag_name: 'goliaths')
good = Tag.create(tag_name: 'good')
grimoires = Tag.create(tag_name: 'grimoires')
guilds = Tag.create(tag_name: 'guilds')
halflings = Tag.create(tag_name: 'halflings')
hammers = Tag.create(tag_name: 'hammers')
hero_tag = Tag.create(tag_name: 'hero')
humans = Tag.create(tag_name: 'humans')
hunt = Tag.create(tag_name: 'hunt')
ice = Tag.create(tag_name: 'ice')
illusion = Tag.create(tag_name: 'illusion')
infernals = Tag.create(tag_name: 'infernals')
kami = Tag.create(tag_name: 'kami')
king = Tag.create(tag_name: 'king')
kingdom = Tag.create(tag_name: 'kingdom')
lawful = Tag.create(tag_name: 'lawful')
legendary = Tag.create(tag_name: 'legendary')
leonin = Tag.create(tag_name: 'leonin')
lich = Tag.create(tag_name: 'lich')
lightning = Tag.create(tag_name: 'lightning')
magic = Tag.create(tag_name: 'magic')
magic_items = Tag.create(tag_name: 'magic items')
magical_creatures = Tag.create(tag_name: 'magical creatures')
merchants = Tag.create(tag_name: 'merchants')
monks = Tag.create(tag_name: 'monks')
monster_extermination = Tag.create(tag_name: 'monster_extermination')
monster_nest = Tag.create(tag_name: 'monster nest')
mountains = Tag.create(tag_name: 'mountains')
murder = Tag.create(tag_name: 'murder')
mystery = Tag.create(tag_name: 'mystery')
mythic = Tag.create(tag_name: 'mythic')
mythril = Tag.create(tag_name: 'mythril')
necromancy = Tag.create(tag_name: 'necromancy')
neutral = Tag.create(tag_name: 'neutral')
nobles = Tag.create(tag_name: 'nobles')
obsidian_rank = Tag.create(tag_name: 'obsidian rank')
orcs = Tag.create(tag_name: 'orcs')
outer_planes = Tag.create(tag_name: 'outer planes')
outsider = Tag.create(tag_name: 'outsider')
paladins = Tag.create(tag_name: 'paladins')
pit_fiend = Tag.create(tag_name: 'pit fiend')
plane_of_existence = Tag.create(tag_name: 'plane_of_existence')
platinum = Tag.create(tag_name: 'platinum')
platinum_rank = Tag.create(tag_name: 'platinum rank')
plot = Tag.create(tag_name: 'plot')
polearms = Tag.create(tag_name: 'polearms')
political_intrigue = Tag.create(tag_name: 'political intrigue')
porcelain_rank = Tag.create(tag_name: 'porcelain rank')
power = Tag.create(tag_name: 'power')
precursors = Tag.create(tag_name: 'precursors')
prince = Tag.create(tag_name: 'prince')
princess = Tag.create(tag_name: 'princess')
protection = Tag.create(tag_name: 'protection')
pseudodragons = Tag.create(tag_name: 'pseudodragons')
queen = Tag.create(tag_name: 'queen')
rangers = Tag.create(tag_name: 'rangers')
rare = Tag.create(tag_name: 'rare')
rescue_mission = Tag.create(tag_name: 'rescue_mission')
rogues = Tag.create(tag_name: 'rogues')
satyr = Tag.create(tag_name: 'satyr')
scholars = Tag.create(tag_name: 'scholars')
silver = Tag.create(tag_name: 'silver')
silver_rank = Tag.create(tag_name: 'silverrank')
slimes = Tag.create(tag_name: 'slimes')
sorcerers = Tag.create(tag_name: 'sorcerers')
sorcery = Tag.create(tag_name: 'sorcery')
spell_components = Tag.create(tag_name: 'spell components')
spellbooks = Tag.create(tag_name: 'spellbooks')
spellcasting = Tag.create(tag_name: 'spellcasting')
spys = Tag.create(tag_name: 'spys')
squire = Tag.create(tag_name: 'squire')
staffs = Tag.create(tag_name: 'staffs')
steel_rank = Tag.create(tag_name: 'steel rank')
swords = Tag.create(tag_name: 'swords')
teleport = Tag.create(tag_name: 'teleport')
the_watch = Tag.create(tag_name: 'the_watch')
tieflings = Tag.create(tag_name: 'tieflings')
tomes = Tag.create(tag_name: 'tomes')
transmutation = Tag.create(tag_name: 'transmutation')
trolls = Tag.create(tag_name: 'trolls')
undead = Tag.create(tag_name: 'undead')
unseelie_court = Tag.create(tag_name: 'unseelie court')
vampires = Tag.create(tag_name: 'vampires')
warlocks = Tag.create(tag_name: 'warlocks')
warriors = Tag.create(tag_name: 'warriors')
wilderness = Tag.create(tag_name: 'wilderness')
wind = Tag.create(tag_name: 'wind')
wizards = Tag.create(tag_name: 'wizards')
wurms = Tag.create(tag_name: 'wurms')

# tags = ["warriors","water","wilderness","wind","wizards","wurms"]
# for tag in tags
#   Tag.create(tag_name: tag)
# end

# New users
# User 1
hero = User.create(username: "Generic_Hero", password: "hunter12", email: "generic_hero@fake.com", guild_name: "Demo-lition Crew", guild_description: "The Hero's party. We will vanquish the demon lord!");
hero_avatar = File.open('app/assets/adventr_seeder_images/avatars/generic_hero.jpg')
hero.avatar_image.attach(io: hero_avatar, filename: 'hero.jpg')

# User 2
terriblis = User.create(username: "terriblis", password: "hunter12", email: "terriblis@fake.com", guild_name: "Mage College", guild_description: "Stop killing my skeletons");
terriblis_avatar = File.open('app/assets/adventr_seeder_images/avatars/terriblis.jpg')
terriblis.avatar_image.attach(io: terriblis_avatar, filename: 'terriblis.jpg')

# User 3
matt = User.create(username: "Matt", password: "hunter12", email: "matt@fake.com", guild_name: "Spellcaster Apprentices", guild_description: "Our alchemists can raise your charisma stat!");
matt_avatar = File.open('app/assets/adventr_seeder_images/avatars/matt.jpg')
matt.avatar_image.attach(io: matt_avatar, filename: 'matt.jpg')

# User 4
jess = User.create(username: "jess", password: "hunter12", email: "jess@fake.com", guild_name: "Hunter's Guild", guild_description: "We'll hunt anything! Maybe even you!");
jess_avatar = File.open('app/assets/adventr_seeder_images/avatars/jess.png')
jess.avatar_image.attach(io: jess_avatar, filename: 'jess.png')

# User 5
ingrid = User.create(username: "Ingrid-the-Indomitable", password: "hunter12", email: "ingrid@fake.com", guild_name: "The Court of Winter", guild_description: "Nothing will stand in our way");
ingrid_avatar = File.open('app/assets/adventr_seeder_images/avatars/ingrid.jpg')
ingrid.avatar_image.attach(io: ingrid_avatar, filename: 'ingrid.jpg')

# User 6
kmsvr = User.create(username: "Kmsvr", password: "hunter12", email: "kmsvr@horns.org", guild_name: "Horns of Hammerad", guild_description: "Inspired by the former Horns of Hammerad, we rose from the ashes of old teams or affiliations.");
kmsvr_avatar = File.open('app/assets/adventr_seeder_images/avatars/kmsvr.png')
kmsvr.avatar_image.attach(io: kmsvr_avatar, filename: 'kmsvr.png')

# User 7
goblin_slayer = User.create(username: "Goblin Slayer", password: "hunter12", email: "beardcutter@exterminate.com", guild_name: "The Guild", guild_description: "We kill goblins. Are you a goblin?");
goblin_slayer_avatar = File.open('app/assets/adventr_seeder_images/avatars/goblin_slayer.png')
goblin_slayer.avatar_image.attach(io: goblin_slayer_avatar, filename: 'goblin_slayer.png')

# User 8
rain = User.create(username: "Rain", password: "hunter12", email: "rain@fake.com", guild_name: "Ascension", guild_description: "Ascension, allied with both The Adventurer's Guild and The Watch, is a growing guild meant to support equal opportunity for all its members through otherworldly math and paperwork.")
rain_avatar = File.open('app/assets/adventr_seeder_images/avatars/rain.jpg')
rain.avatar_image.attach(io: rain_avatar, filename: 'rain.jpg')

# User 9
carl = User.create(username: "Dungeon_Crawler_Carl", password: "hunter12", email: "carl@princessdonutsociety.com", guild_name: "Princess Donut Royal Entourage", guild_description: "The Princess Donut Royal Entourage will soon reach the Sixth Floor. Don't mind Carl and all his explosive nonsense, this is a proper party.")
carl_avatar = File.open('app/assets/adventr_seeder_images/avatars/carl.jpg')
carl.avatar_image.attach(io: carl_avatar, filename: 'carl.jpg')

# User 10
catherine = User.create(username: "Catherine_Foundling", password: "hunter12", email: "queen-catherine@evil.org", guild_name: "Army of Callow", guild_description: "The army under Queen Catherine, formerly the Squire, First Under the Night. Set against the Undead Horror.")
catherine_avatar = File.open('app/assets/adventr_seeder_images/avatars/catherine.jpg')
catherine.avatar_image.attach(io: catherine_avatar, filename: 'catherine.jpg')

# Adding tags to users
hero_tags = [gold_rank, goblins, magic_items, dungeons, fighters, warriors, paladins, dragons, exploration, monster_extermination]
for tag in hero_tags
  hero.tags << tag
end

terriblis_tags = [silver_rank, necromancy, divination, sorcerers, magic, magic_items, spellcasting, evil_overlords, lich, undead]
for tag in terriblis_tags
  terriblis.tags << tag
end

matt_tags = [bronze_rank, magic, magic_items, spellcasting, wizards, sorcerers, necromancy, clerics, artificers, druids]
for tag in matt_tags
  matt.tags << tag
end

jess_tags = [rangers, hunt, monster_extermination, dungeons, fetch, food, wilderness, bows]
for tag in jess_tags
  jess.tags << tag
end

ingrid_tags = [warriors, barbarians, monster_extermination, dungeons, dragons, mountains, exploration]
for tag in ingrid_tags
  ingrid.tags << tag
end

kmsvr_tags = [gold_rank, magic_items, creller, ice, magic, warriors, rangers, sorcerers, wizards, necromancy, silver, bandits, dungeons]
for tag in kmsvr_tags
  kmsvr.tags << tag
end

goblin_slayer_tags = [goblins, silver_rank, monster_extermination, monster_nest, demon_army, magic_items, dungeons, goblin_champions, goblin_kings, goblin_lords, rescue_mission, protection, escort_quest]
for tag in goblin_slayer_tags
  goblin_slayer.tags << tag
end

rain_tags = [dungeons, magic_items, artificers, alchemists, barbarians, bards, clerics, druids, dynamos, fighters, monks, paladins, rangers, rogues, sorcerers, warlocks, wizards, the_watch, slimes, silver_rank]
for tag in rain_tags
  rain.tags << tag
end

carl_tags = [magic, explosives, dungeons, monster_extermination, anarchy, ai, familiars]
for tag in carl_tags
  carl.tags << tag
end

catherine_tags = [undead, angels, army, orcs, goblins, magic, gods, evil, fallen_kingdom, squire, staffs, unseelie_court]
for tag in catherine_tags
  catherine.tags << tag
end


# Code for putting in quest tags with order
# temp_array = [good, sorcerers]
# temp_array.each_with_index do |tag, idx|
#   TagJoin.create(taggable: catherine, tag: tag, order: idx + 1)
# end

# New quests for hero
# Hero quest 1
hero_quest_1 = Quest.create(title: "So I've got this [Hero] class...", text: "I'm not sure what I'm supposed to be doing. I level really quickly but since my Guild apparently doesn't make exceptions, I'm stuck killing rats in sewers like the other Porcelains. Does anybody know of any loopholes to rise through the ranks quickly? I'm worried that I'll be fetching mushrooms from Kantai forest when the Demon Lord razes the capital.", quest_type: 'text', user_id: hero.id)

hero_quest_1_tags = [hero_tag, dark_lord, demon_army, outsider, monster_extermination, monster_nest, plot]

hero_quest_1_tags.each_with_index do |tag, idx|
  TagJoin.create(taggable: hero_quest_1, tag: tag, order: idx + 1)
end



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