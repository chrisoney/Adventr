# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# TagJoin.destroy_all
Follow.destroy_all
Like.destroy_all
# Reblog.destroy_all
Quest.destroy_all
# User.destroy_all
# Tag.destroy_all

# # New tags
# abjuration = Tag.create(tag_name: 'abjuration')
# academy = Tag.create(tag_name: 'academy')
# acid = Tag.create(tag_name: 'acid')
# adamantine = Tag.create(tag_name: 'adamantine')
# adventure = Tag.create(tag_name: 'adventure')
# ai = Tag.create(tag_name: 'ai')
# alchemists = Tag.create(tag_name: 'alchemists')
# alchemy = Tag.create(tag_name: 'alchemy')
# anarchy = Tag.create(tag_name: 'anarchy')
# ancients = Tag.create(tag_name: 'ancients')
# angels = Tag.create(tag_name: 'angels')
# arcane_focus = Tag.create(tag_name: 'arcane focus')
# aristocrats = Tag.create(tag_name: 'aristocrats')
# army = Tag.create(tag_name: 'army')
# artifacts = Tag.create(tag_name: 'artifacts')
# artificers = Tag.create(tag_name: 'artificers')
# assassins = Tag.create(tag_name: 'assassins')
# axes = Tag.create(tag_name: 'axes')
# bandits = Tag.create(tag_name: 'bandits')
# barbarians = Tag.create(tag_name: 'barbarians')
# bards = Tag.create(tag_name: 'bards')
# beasts = Tag.create(tag_name: 'beasts')
# blacksmithing = Tag.create(tag_name: 'blacksmithing')
# blood_magic = Tag.create(tag_name: 'blood magic')
# blood_oath = Tag.create(tag_name: 'blood oath')
# books = Tag.create(tag_name: 'books')
# bows = Tag.create(tag_name: 'bows')
# bronze_rank = Tag.create(tag_name: 'bronze rank')
# caravans = Tag.create(tag_name: 'caravans')
# cave = Tag.create(tag_name: 'cave')
# chaotic = Tag.create(tag_name: 'chaotic')
# clerics = Tag.create(tag_name: 'clerics')
# common = Tag.create(tag_name: 'common')
# commoners = Tag.create(tag_name: 'commoners')
# conjuration = Tag.create(tag_name: 'conjuration')
# contracts = Tag.create(tag_name: 'contracts')
# creatures = Tag.create(tag_name: 'creatures')
# creler = Tag.create(tag_name: 'creler')
# cultists = Tag.create(tag_name: 'cultists')
# daggers = Tag.create(tag_name: 'daggers')
# dark_lord = Tag.create(tag_name: 'darklord')
# demon_army = Tag.create(tag_name: 'demon_army')
# demons = Tag.create(tag_name: 'demons')
# devils = Tag.create(tag_name: 'devils')
# diamond_rank = Tag.create(tag_name: 'diamond rank')
# dire_wolves = Tag.create(tag_name: 'dire wolves')
# divination = Tag.create(tag_name: 'divination')
# djinn = Tag.create(tag_name: 'djinn')
# dragonborn = Tag.create(tag_name: 'dragonborn')
# dragons = Tag.create(tag_name: 'dragons')
# drakes = Tag.create(tag_name: 'drakes')
# druids = Tag.create(tag_name: 'druids')
# dungeons = Tag.create(tag_name: 'dungeons')
# dwarves = Tag.create(tag_name: 'dwarves')
# dynamos = Tag.create(tag_name: 'dynamos')
# earth = Tag.create(tag_name: 'earth')
# elves = Tag.create(tag_name: 'elves')
# enchantment = Tag.create(tag_name: 'enchantment')
# ents = Tag.create(tag_name: 'ents')
# escort_quest = Tag.create(tag_name: 'escort quest')
# evil = Tag.create(tag_name: 'evil')
# evil_overlords = Tag.create(tag_name: 'evil overlords')
# evocation = Tag.create(tag_name: 'evocation')
# exploration = Tag.create(tag_name: 'exploration')
# explosives = Tag.create(tag_name: 'explosives')
# fetch = Tag.create(tag_name: 'fetch')
# fallen_kingdom = Tag.create(tag_name: 'fallen kingdom')
# familiars = Tag.create(tag_name: 'familiars')
# fey = Tag.create(tag_name: 'fey')
# fighters = Tag.create(tag_name: 'fighters')
# fire = Tag.create(tag_name: 'fire')
# fireball = Tag.create(tag_name: 'fireball')
# food = Tag.create(tag_name: 'food')
# forests = Tag.create(tag_name: 'forests')
# goblins = Tag.create(tag_name: 'goblins')
# goblin_champions = Tag.create(tag_name: 'goblin champions')
# goblin_lords = Tag.create(tag_name: 'goblin lords')
# goblin_kings = Tag.create(tag_name: 'goblin kings')
# gods = Tag.create(tag_name: 'gods')
# goddesses = Tag.create(tag_name: 'goddesses')
# gold = Tag.create(tag_name: 'gold')
# gold_rank = Tag.create(tag_name: 'gold rank')
# goliaths = Tag.create(tag_name: 'goliaths')
# good = Tag.create(tag_name: 'good')
# grimoires = Tag.create(tag_name: 'grimoires')
# guilds = Tag.create(tag_name: 'guilds')
# hammers = Tag.create(tag_name: 'hammers')
# hero_tag = Tag.create(tag_name: 'hero')
# humans = Tag.create(tag_name: 'humans')
# hunt = Tag.create(tag_name: 'hunt')
# ice = Tag.create(tag_name: 'ice')
# illusion = Tag.create(tag_name: 'illusion')
# king = Tag.create(tag_name: 'king')
# kingdom = Tag.create(tag_name: 'kingdom')
# lawful = Tag.create(tag_name: 'lawful')
# legendary = Tag.create(tag_name: 'legendary')
# lich = Tag.create(tag_name: 'lich')
# lightning = Tag.create(tag_name: 'lightning')
# magic = Tag.create(tag_name: 'magic')
# magic_items = Tag.create(tag_name: 'magic items')
# magical_creatures = Tag.create(tag_name: 'magical creatures')
# merchants = Tag.create(tag_name: 'merchants')
# monks = Tag.create(tag_name: 'monks')
# monster_extermination = Tag.create(tag_name: 'monster_extermination')
# monster_nest = Tag.create(tag_name: 'monster nest')
# mountains = Tag.create(tag_name: 'mountains')
# murder = Tag.create(tag_name: 'murder')
# mystery = Tag.create(tag_name: 'mystery')
# mythic = Tag.create(tag_name: 'mythic')
# mythril = Tag.create(tag_name: 'mythril')
# necromancy = Tag.create(tag_name: 'necromancy')
# neutral = Tag.create(tag_name: 'neutral')
# nobles = Tag.create(tag_name: 'nobles')
# obsidian_rank = Tag.create(tag_name: 'obsidian rank')
# orcs = Tag.create(tag_name: 'orcs')
# outer_planes = Tag.create(tag_name: 'outer planes')
# outsider = Tag.create(tag_name: 'outsider')
# paladins = Tag.create(tag_name: 'paladins')
# platinum = Tag.create(tag_name: 'platinum')
# platinum_rank = Tag.create(tag_name: 'platinum rank')
# plot = Tag.create(tag_name: 'plot')
# polearms = Tag.create(tag_name: 'polearms')
# political_intrigue = Tag.create(tag_name: 'political intrigue')
# porcelain_rank = Tag.create(tag_name: 'porcelain rank')
# power = Tag.create(tag_name: 'power')
# princess = Tag.create(tag_name: 'princess')
# protection = Tag.create(tag_name: 'protection')
# pseudodragons = Tag.create(tag_name: 'pseudodragons')
# queen = Tag.create(tag_name: 'queen')
# rangers = Tag.create(tag_name: 'rangers')
# rare = Tag.create(tag_name: 'rare')
# rescue_mission = Tag.create(tag_name: 'rescue_mission')
# rogues = Tag.create(tag_name: 'rogues')
# satyr = Tag.create(tag_name: 'satyr')
# scholars = Tag.create(tag_name: 'scholars')
# silver = Tag.create(tag_name: 'silver')
# silver_rank = Tag.create(tag_name: 'silverrank')
# slimes = Tag.create(tag_name: 'slimes')
# sorcerers = Tag.create(tag_name: 'sorcerers')
# sorcery = Tag.create(tag_name: 'sorcery')
# spell_components = Tag.create(tag_name: 'spell components')
# spellbooks = Tag.create(tag_name: 'spellbooks')
# spellcasting = Tag.create(tag_name: 'spellcasting')
# spies = Tag.create(tag_name: 'spies')
# squire = Tag.create(tag_name: 'squire')
# staffs = Tag.create(tag_name: 'staffs')
# steel_rank = Tag.create(tag_name: 'steel rank')
# swords = Tag.create(tag_name: 'swords')
# the_watch = Tag.create(tag_name: 'the_watch')
# tomes = Tag.create(tag_name: 'tomes')
# transmutation = Tag.create(tag_name: 'transmutation')
# trolls = Tag.create(tag_name: 'trolls')
# undead = Tag.create(tag_name: 'undead')
# unseelie_court = Tag.create(tag_name: 'unseelie court')
# vampires = Tag.create(tag_name: 'vampires')
# warlocks = Tag.create(tag_name: 'warlocks')
# warriors = Tag.create(tag_name: 'warriors')
# wilderness = Tag.create(tag_name: 'wilderness')
# wind = Tag.create(tag_name: 'wind')
# wizards = Tag.create(tag_name: 'wizards')
# wurms = Tag.create(tag_name: 'wurms')
#---------------------------Tag Creation Ends------------------------------

# Tag Search
abjuration = Tag.find_by(tag_name: 'abjuration')
academy = Tag.find_by(tag_name: 'academy')
acid = Tag.find_by(tag_name: 'acid')
adamantine = Tag.find_by(tag_name: 'adamantine')
adventure = Tag.find_by(tag_name: 'adventure')
ai = Tag.find_by(tag_name: 'ai')
alchemists = Tag.find_by(tag_name: 'alchemists')
alchemy = Tag.find_by(tag_name: 'alchemy')
anarchy = Tag.find_by(tag_name: 'anarchy')
ancients = Tag.find_by(tag_name: 'ancients')
angels = Tag.find_by(tag_name: 'angels')
arcane_focus = Tag.find_by(tag_name: 'arcane focus')
aristocrats = Tag.find_by(tag_name: 'aristocrats')
army = Tag.find_by(tag_name: 'army')
artifacts = Tag.find_by(tag_name: 'artifacts')
artificers = Tag.find_by(tag_name: 'artificers')
assassins = Tag.find_by(tag_name: 'assassins')
axes = Tag.find_by(tag_name: 'axes')
bandits = Tag.find_by(tag_name: 'bandits')
barbarians = Tag.find_by(tag_name: 'barbarians')
bards = Tag.find_by(tag_name: 'bards')
beasts = Tag.find_by(tag_name: 'beasts')
blacksmithing = Tag.find_by(tag_name: 'blacksmithing')
blood_magic = Tag.find_by(tag_name: 'blood magic')
blood_oath = Tag.find_by(tag_name: 'blood oath')
books = Tag.find_by(tag_name: 'books')
bows = Tag.find_by(tag_name: 'bows')
bronze_rank = Tag.find_by(tag_name: 'bronze rank')
caravans = Tag.find_by(tag_name: 'caravans')
cave = Tag.find_by(tag_name: 'cave')
chaotic = Tag.find_by(tag_name: 'chaotic')
clerics = Tag.find_by(tag_name: 'clerics')
common = Tag.find_by(tag_name: 'common')
commoners = Tag.find_by(tag_name: 'commoners')
conjuration = Tag.find_by(tag_name: 'conjuration')
contracts = Tag.find_by(tag_name: 'contracts')
creatures = Tag.find_by(tag_name: 'creatures')
creler = Tag.find_by(tag_name: 'creler')
cultists = Tag.find_by(tag_name: 'cultists')
daggers = Tag.find_by(tag_name: 'daggers')
dark_lord = Tag.find_by(tag_name: 'darklord')
demon_army = Tag.find_by(tag_name: 'demon_army')
demons = Tag.find_by(tag_name: 'demons')
devils = Tag.find_by(tag_name: 'devils')
diamond_rank = Tag.find_by(tag_name: 'diamond rank')
dire_wolves = Tag.find_by(tag_name: 'dire wolves')
divination = Tag.find_by(tag_name: 'divination')
djinn = Tag.find_by(tag_name: 'djinn')
dragonborn = Tag.find_by(tag_name: 'dragonborn')
dragons = Tag.find_by(tag_name: 'dragons')
drakes = Tag.find_by(tag_name: 'drakes')
druids = Tag.find_by(tag_name: 'druids')
dungeons = Tag.find_by(tag_name: 'dungeons')
dwarves = Tag.find_by(tag_name: 'dwarves')
dynamos = Tag.find_by(tag_name: 'dynamos')
earth = Tag.find_by(tag_name: 'earth')
elves = Tag.find_by(tag_name: 'elves')
enchantment = Tag.find_by(tag_name: 'enchantment')
ents = Tag.find_by(tag_name: 'ents')
escort_quest = Tag.find_by(tag_name: 'escort quest')
evil = Tag.find_by(tag_name: 'evil')
evil_overlords = Tag.find_by(tag_name: 'evil overlords')
evocation = Tag.find_by(tag_name: 'evocation')
exploration = Tag.find_by(tag_name: 'exploration')
explosives = Tag.find_by(tag_name: 'explosives')
fetch = Tag.find_by(tag_name: 'fetch')
fallen_kingdom = Tag.find_by(tag_name: 'fallen kingdom')
familiars = Tag.find_by(tag_name: 'familiars')
fey = Tag.find_by(tag_name: 'fey')
fighters = Tag.find_by(tag_name: 'fighters')
fire = Tag.find_by(tag_name: 'fire')
fireball = Tag.find_by(tag_name: 'fireball')
food = Tag.find_by(tag_name: 'food')
forests = Tag.find_by(tag_name: 'forests')
goblins = Tag.find_by(tag_name: 'goblins')
goblin_champions = Tag.find_by(tag_name: 'goblin champions')
goblin_lords = Tag.find_by(tag_name: 'goblin lords')
goblin_kings = Tag.find_by(tag_name: 'goblin kings')
gods = Tag.find_by(tag_name: 'gods')
goddesses = Tag.find_by(tag_name: 'goddesses')
gold = Tag.find_by(tag_name: 'gold')
gold_rank = Tag.find_by(tag_name: 'gold rank')
goliaths = Tag.find_by(tag_name: 'goliaths')
good = Tag.find_by(tag_name: 'good')
grimoires = Tag.find_by(tag_name: 'grimoires')
guilds = Tag.find_by(tag_name: 'guilds')
hammers = Tag.find_by(tag_name: 'hammers')
hero_tag = Tag.find_by(tag_name: 'hero')
humans = Tag.find_by(tag_name: 'humans')
hunt = Tag.find_by(tag_name: 'hunt')
ice = Tag.find_by(tag_name: 'ice')
illusion = Tag.find_by(tag_name: 'illusion')
king = Tag.find_by(tag_name: 'king')
kingdom = Tag.find_by(tag_name: 'kingdom')
lawful = Tag.find_by(tag_name: 'lawful')
legendary = Tag.find_by(tag_name: 'legendary')
lich = Tag.find_by(tag_name: 'lich')
lightning = Tag.find_by(tag_name: 'lightning')
magic = Tag.find_by(tag_name: 'magic')
magic_items = Tag.find_by(tag_name: 'magic items')
magical_creatures = Tag.find_by(tag_name: 'magical creatures')
merchants = Tag.find_by(tag_name: 'merchants')
monks = Tag.find_by(tag_name: 'monks')
monster_extermination = Tag.find_by(tag_name: 'monster_extermination')
monster_nest = Tag.find_by(tag_name: 'monster nest')
mountains = Tag.find_by(tag_name: 'mountains')
murder = Tag.find_by(tag_name: 'murder')
mystery = Tag.find_by(tag_name: 'mystery')
mythic = Tag.find_by(tag_name: 'mythic')
mythril = Tag.find_by(tag_name: 'mythril')
necromancy = Tag.find_by(tag_name: 'necromancy')
neutral = Tag.find_by(tag_name: 'neutral')
nobles = Tag.find_by(tag_name: 'nobles')
obsidian_rank = Tag.find_by(tag_name: 'obsidian rank')
orcs = Tag.find_by(tag_name: 'orcs')
outer_planes = Tag.find_by(tag_name: 'outer planes')
outsider = Tag.find_by(tag_name: 'outsider')
paladins = Tag.find_by(tag_name: 'paladins')
platinum = Tag.find_by(tag_name: 'platinum')
platinum_rank = Tag.find_by(tag_name: 'platinum rank')
plot = Tag.find_by(tag_name: 'plot')
polearms = Tag.find_by(tag_name: 'polearms')
political_intrigue = Tag.find_by(tag_name: 'political intrigue')
porcelain_rank = Tag.find_by(tag_name: 'porcelain rank')
power = Tag.find_by(tag_name: 'power')
princess = Tag.find_by(tag_name: 'princess')
protection = Tag.find_by(tag_name: 'protection')
pseudodragons = Tag.find_by(tag_name: 'pseudodragons')
queen = Tag.find_by(tag_name: 'queen')
rangers = Tag.find_by(tag_name: 'rangers')
rare = Tag.find_by(tag_name: 'rare')
rescue_mission = Tag.find_by(tag_name: 'rescue_mission')
rogues = Tag.find_by(tag_name: 'rogues')
satyr = Tag.find_by(tag_name: 'satyr')
scholars = Tag.find_by(tag_name: 'scholars')
silver = Tag.find_by(tag_name: 'silver')
silver_rank = Tag.find_by(tag_name: 'silverrank')
slimes = Tag.find_by(tag_name: 'slimes')
sorcerers = Tag.find_by(tag_name: 'sorcerers')
sorcery = Tag.find_by(tag_name: 'sorcery')
spell_components = Tag.find_by(tag_name: 'spell components')
spellbooks = Tag.find_by(tag_name: 'spellbooks')
spellcasting = Tag.find_by(tag_name: 'spellcasting')
spies = Tag.find_by(tag_name: 'spies')
squire = Tag.find_by(tag_name: 'squire')
staffs = Tag.find_by(tag_name: 'staffs')
steel_rank = Tag.find_by(tag_name: 'steel rank')
swords = Tag.find_by(tag_name: 'swords')
the_watch = Tag.find_by(tag_name: 'the_watch')
tomes = Tag.find_by(tag_name: 'tomes')
transmutation = Tag.find_by(tag_name: 'transmutation')
trolls = Tag.find_by(tag_name: 'trolls')
undead = Tag.find_by(tag_name: 'undead')
unseelie_court = Tag.find_by(tag_name: 'unseelie court')
vampires = Tag.find_by(tag_name: 'vampires')
warlocks = Tag.find_by(tag_name: 'warlocks')
warriors = Tag.find_by(tag_name: 'warriors')
wilderness = Tag.find_by(tag_name: 'wilderness')
wind = Tag.find_by(tag_name: 'wind')
wizards = Tag.find_by(tag_name: 'wizards')
wurms = Tag.find_by(tag_name: 'wurms')
#---------------------------Tag Search Ends------------------------------------

# tags = ["warriors","water","wilderness","wind","wizards","wurms"]
# for tag in tags
#   Tag.create(tag_name: tag)
# end

# # New users
# # User 1
# hero = User.create(username: "Generic_Hero", password: "hunter12", email: "generic_hero@fake.com", guild_name: "Demo-lition Crew", guild_description: "The Hero's party. We will vanquish the demon lord!");
# hero_avatar = File.open('app/assets/adventr_seeder_images/avatars/generic_hero.jpg')
# hero.avatar_image.attach(io: hero_avatar, filename: 'hero.jpg')

# # User 2
# terriblis = User.create(username: "terriblis", password: "hunter12", email: "terriblis@fake.com", guild_name: "Mage College", guild_description: "Stop killing my skeletons");
# terriblis_avatar = File.open('app/assets/adventr_seeder_images/avatars/terriblis.jpg')
# terriblis.avatar_image.attach(io: terriblis_avatar, filename: 'terriblis.jpg')

# # User 3
# matt = User.create(username: "Matt", password: "hunter12", email: "matt@fake.com", guild_name: "Spellcaster Apprentices", guild_description: "Our alchemists can raise your charisma stat!");
# matt_avatar = File.open('app/assets/adventr_seeder_images/avatars/matt.jpg')
# matt.avatar_image.attach(io: matt_avatar, filename: 'matt.jpg')

# # User 4
# jess = User.create(username: "jess", password: "hunter12", email: "jess@fake.com", guild_name: "Hunter's Guild", guild_description: "We'll hunt anything! Maybe even you!");
# jess_avatar = File.open('app/assets/adventr_seeder_images/avatars/jess.png')
# jess.avatar_image.attach(io: jess_avatar, filename: 'jess.png')

# # User 5
# ingrid = User.create(username: "Ingrid-the-Indomitable", password: "hunter12", email: "ingrid@fake.com", guild_name: "The Court of Winter", guild_description: "Nothing will stand in our way");
# ingrid_avatar = File.open('app/assets/adventr_seeder_images/avatars/ingrid.jpg')
# ingrid.avatar_image.attach(io: ingrid_avatar, filename: 'ingrid.jpg')

# # User 6
# kmsvr = User.create(username: "Kmsvr", password: "hunter12", email: "kmsvr@horns.org", guild_name: "Horns of Hammerad", guild_description: "Inspired by the former Horns of Hammerad, we rose from the ashes of old teams or affiliations.");
# kmsvr_avatar = File.open('app/assets/adventr_seeder_images/avatars/kmsvr.png')
# kmsvr.avatar_image.attach(io: kmsvr_avatar, filename: 'kmsvr.png')

# # User 7
# goblin_slayer = User.create(username: "Goblin Slayer", password: "hunter12", email: "beardcutter@exterminate.com", guild_name: "The Guild", guild_description: "We kill goblins. Are you a goblin?");
# goblin_slayer_avatar = File.open('app/assets/adventr_seeder_images/avatars/goblin_slayer.png')
# goblin_slayer.avatar_image.attach(io: goblin_slayer_avatar, filename: 'goblin_slayer.png')

# # User 8
# rain = User.create(username: "Rain", password: "hunter12", email: "rain@fake.com", guild_name: "Ascension", guild_description: "Ascension, allied with both The Adventurer's Guild and The Watch, is a growing guild meant to support equal opportunity for all its members through otherworldly math and paperwork.")
# rain_avatar = File.open('app/assets/adventr_seeder_images/avatars/rain.jpg')
# rain.avatar_image.attach(io: rain_avatar, filename: 'rain.jpg')

# # User 9
# carl = User.create(username: "Dungeon_Crawler_Carl", password: "hunter12", email: "carl@princessdonutsociety.com", guild_name: "The Royal Court of Princess Donut", guild_description: "The Royal Court of Princess Donut will soon reach the Sixth Floor. Don't mind Carl and all his explosive nonsense, this is a proper party.")
# carl_avatar = File.open('app/assets/adventr_seeder_images/avatars/carl.jpg')
# carl.avatar_image.attach(io: carl_avatar, filename: 'carl.jpg')

# # User 10
# catherine = User.create(username: "Catherine_Foundling", password: "hunter12", email: "queen-catherine@evil.org", guild_name: "Army of Callow", guild_description: "The army under Queen Catherine, formerly the Squire, First Under the Night. Set against the Undead Horror.")
# catherine_avatar = File.open('app/assets/adventr_seeder_images/avatars/catherine.jpg')
# catherine.avatar_image.attach(io: catherine_avatar, filename: 'catherine.jpg')

# User Finds Start
hero = User.find_by(username: 'Generic_Hero')
terriblis = User.find_by(username: "terriblis")
matt = User.find_by(username: "Matt")
jess = User.find_by(username: "jess")
ingrid = User.find_by(username: "Ingrid-the-Indomitable")
kmsvr = User.find_by(username: "Kmsvr")
goblin_slayer = User.find_by(username: "Goblin Slayer")
rain = User.find_by(username: "Rain")
carl = User.find_by(username: "Dungeon_Crawler_Carl")
catherine = User.find_by(username: "Catherine_Foundling")

# user array in case you lose it
# [hero, terriblis, matt, jess, ingrid, kmsvr, goblin_slayer, rain, carl, catherine]

# # Adding tags to users
# hero_tags = [gold_rank, goblins, magic_items, dungeons, fighters, warriors, paladins, dragons, exploration, monster_extermination]
# for tag in hero_tags
#   hero.tags << tag
# end

# terriblis_tags = [silver_rank, necromancy, divination, sorcerers, magic, magic_items, spellcasting, evil_overlords, lich, undead]
# for tag in terriblis_tags
#   terriblis.tags << tag
# end

# matt_tags = [bronze_rank, magic, magic_items, spellcasting, wizards, sorcerers, necromancy, clerics, artificers, druids]
# for tag in matt_tags
#   matt.tags << tag
# end

# jess_tags = [rangers, hunt, monster_extermination, dungeons, fetch, food, wilderness, bows]
# for tag in jess_tags
#   jess.tags << tag
# end

# ingrid_tags = [warriors, barbarians, monster_extermination, dungeons, dragons, mountains, exploration]
# for tag in ingrid_tags
#   ingrid.tags << tag
# end

# kmsvr_tags = [gold_rank, magic_items, creler, ice, magic, warriors, rangers, sorcerers, wizards, necromancy, silver, bandits, dungeons]
# for tag in kmsvr_tags
#   kmsvr.tags << tag
# end

# goblin_slayer_tags = [goblins, silver_rank, monster_extermination, monster_nest, demon_army, magic_items, dungeons, goblin_champions, goblin_kings, goblin_lords, rescue_mission, protection, escort_quest]
# for tag in goblin_slayer_tags
#   goblin_slayer.tags << tag
# end

# rain_tags = [dungeons, magic_items, artificers, alchemists, barbarians, bards, clerics, druids, dynamos, fighters, monks, paladins, rangers, rogues, sorcerers, warlocks, wizards, the_watch, slimes, silver_rank]
# for tag in rain_tags
#   rain.tags << tag
# end

# carl_tags = [magic, explosives, dungeons, monster_extermination, anarchy, ai, familiars]
# for tag in carl_tags
#   carl.tags << tag
# end

# catherine_tags = [undead, angels, army, orcs, goblins, kingdom, magic, gods, evil, fallen_kingdom, squire, staffs, queen, unseelie_court]
# for tag in catherine_tags
#   catherine.tags << tag
# end
#--------------------------User TagJoins End------------------------------------


# Code for putting in quest tags with order
# temp_array = [good, sorcerers]
# temp_array.each_with_index do |tag, idx|
#   TagJoin.create(taggable: catherine, tag: tag, order: idx + 1)
# end

# Method for adding an array of tags to a quest
def addTagsToQuest(tags, quest)
  tags.each_with_index do |tag, idx|
    TagJoin.create(taggable: quest, tag: tag, order: idx + 1)
  end
end

def addLikesToQuest(users, quest)
  users.each do |user|
    user.liked_quests << quest
  end
end

# New quests for hero
# Hero quest 1 - Text
hero_quest_1 = Quest.create(title: "So I've got this [Hero] class...", text: "I'm not sure what I'm supposed to be doing. I level really quickly but since my Guild apparently doesn't make exceptions, I'm stuck killing rats in sewers like the other Porcelains. Does anybody know of any loopholes to rise through the ranks quickly? I'm worried that I'll be fetching mushrooms from Kantai forest when the Demon Lord razes the capital.", quest_type: 'text', user_id: hero.id)

hero_quest_1_tags = [hero_tag, dark_lord, demon_army, outsider, monster_extermination, monster_nest, plot].shuffle

addTagsToQuest(hero_quest_1_tags, hero_quest_1)

quest_1_likes = [matt, jess, kmsvr]
addLikesToQuest(quest_1_likes, hero_quest_1)

# Hero quest 2 - Image
hero_quest_2 = Quest.create(title: "Has anyone seen a macguffin lying around?", text: "I think I'm supposed to be tracking down a low-level general in the demon army, but I'm struggling to figure out what I need to do to trigger the quest. I'm pretty sure I'm supposed to find a letter, but it's not in any of the lore/readable items I make my wizard cart around. Attached are pictures of other suspicious letters I've found that are probably somewhat similar.", quest_type: 'image', user_id: hero.id)

quest_2_image_1 = File.open('app/assets/adventr_seeder_images/quest_images/quest_2/mysterious_letter_1.png')
hero_quest_2.images.attach(io: quest_2_image_1, filename: 'mysterious_letter_1.png')
quest_2_image_2 = File.open('app/assets/adventr_seeder_images/quest_images/quest_2/mysterious_letter_2.png')
hero_quest_2.images.attach(io: quest_2_image_2, filename: 'mysterious_letter_2.png')

hero_quest_2_tags = [hero_tag, demon_army, plot, wizards, artifacts, books, contracts, mystery].shuffle

addTagsToQuest(hero_quest_2_tags, hero_quest_2)

quest_2_likes = [kmsvr, rain, carl]
addLikesToQuest(quest_2_likes, hero_quest_2)

# Hero quest 3 - Image
hero_quest_3 = Quest.create(title: "Found this grimoire. Anyone know how to destroy it?", text: "Apparently it's known as The Necronomicon. At first I planned on keeping or selling it, but I'm 95% sure it's bound in human skin. Also, it whispers things to me at night. Horrible things.\nSide note: If you're known as 'Old Man Henderson', there are some unimaginable horrors out to get you.", quest_type: 'image', user_id: hero.id)

quest_3_image_1 = File.open('app/assets/adventr_seeder_images/quest_images/quest_3/necronomicon.jpeg')
hero_quest_3.images.attach(io: quest_3_image_1, filename: 'necronomicon.jpeg')

hero_quest_3_tags = [books, acid, alchemists, alchemy, artifacts, blood_magic, chaotic, cultists, demons, devils, evil, fire, grimoires, magic_items, necromancy, tomes].shuffle

addTagsToQuest(hero_quest_3_tags, hero_quest_3)

quest_3_likes = [terriblis, matt, rain, catherine]
addLikesToQuest(quest_3_likes, hero_quest_3)

# Hero quest 4 - Image
hero_quest_4 = Quest.create(title: "Looking for a smith to make me better pauldrons.", text: "I learned in my old world that bigger pauldrons make for a stronger, more intimidating warrior. For some reason, the only ones I've found so far in this land have been reasonably sized. Willing to spend about 10 gold on each, 15 if they can have different but complementary designs.", quest_type: "image", user_id: hero.id)

quest_4_image_1 = File.open('app/assets/adventr_seeder_images/quest_images/quest_4/pauldron_1.jpg')
hero_quest_4.images.attach(io: quest_4_image_1, filename: 'pauldron_1.jpg')

quest_4_image_2 = File.open('app/assets/adventr_seeder_images/quest_images/quest_4/pauldron_2.jpg')
hero_quest_4.images.attach(io: quest_4_image_2, filename: 'pauldron_2.jpg')

hero_quest_4_tags = [adamantine, artificers, blacksmithing, dwarves, gold, magic_items, merchants, mythic, mythril, platinum, power, protection].shuffle

addTagsToQuest(hero_quest_4_tags, hero_quest_4)

quest_4_likes = [ingrid, kmsvr, rain]
addLikesToQuest(quest_4_likes, hero_quest_4)

# Hero quest 5 - Quote
hero_quest_5 = Quest.create(title: "It's really exciting to get to be the main character of something.", text: "Noah Schnapp", quest_type: "quote", user_id: hero.id)

hero_quest_5_tags = [hero_tag, adventure, chaotic, good, guilds, legendary, paladins, plot].shuffle

addTagsToQuest(hero_quest_5_tags, hero_quest_5)

quest_5_likes = [matt, kmsvr, goblin_slayer, rain, carl, catherine]
addLikesToQuest(quest_5_likes, hero_quest_5)

# Hero quest 6 - Video
hero_quest_6 = Quest.create(title: "Sometimes it really feels like this.", text: "", quest_type: "video", user_id: hero.id)

quest_6_video_1 = File.open('app/assets/adventr_seeder_images/quest_videos/everything_goes_wrong.mp4')
hero_quest_6.images.attach(io: quest_6_video_1, filename: 'everything_goes_wrong.mp4')

hero_quest_6_tags = [hero_tag, bandits, beasts, cave, commoners, contracts, divination, escort_quest, exploration, fetch, forests, humans, hunt, chaotic, magical_creatures, murder, mystery, neutral, outsider, plot, rescue_mission, the_watch, trolls, warriors, wilderness].shuffle

addTagsToQuest(hero_quest_6_tags, hero_quest_6)

quest_6_likes = [rain, carl, catherine]
addLikesToQuest(quest_6_likes, hero_quest_6)

# Hero quest 7 - Audio
hero_quest_7 = Quest.create(title: "Does anyone else hear this?", text: "Whenever I start fighting, I hear a song start playing. My teammates swear they don't hear it, and I'm not sure if I believe them. I had a bard recreate it as best as he could. Please let me know if you recognize it.", quest_type: 'audio', user_id: hero.id)

quest_7_audio = File.open('app/assets/adventr_seeder_images/quest_audio/final_fantasy_battle.mp3')
hero_quest_7.images.attach(io: quest_7_audio, filename: 'final_fantasy_battle.mp3')

hero_quest_7_tags = [bards, magic, monster_extermination, enchantment, fey].shuffle

addTagsToQuest(hero_quest_7_tags, hero_quest_7)

quest_7_likes = [matt, kmsvr, rain]
addLikesToQuest(quest_7_likes, hero_quest_7)

# Terriblis quests
# Terriblis quest 1 - Text
terriblis_quest_8 = Quest.create(title: "Please stop killing my skeletons.", text: "I know they're easy experience. I know the sound of their bones jumbling around is annoying. But please stop killing them. \n You would not believe how long it takes to raise 10 skeletons. Don't even get me started on the material cost, since I go through legal channels. \n \n And to the person that seems to target my [Awakened Skeleton Knight] exclusively, there will be no mercy for you. You have sunk entire fortunes with your murder hobo antics. I know for a fact it never initiated a fight, because I only taught it to love. Your days are numbered.", quest_type: "text", user_id: terriblis.id)

terriblis_quest_8_tags = [barbarians, blood_magic, blood_oath, clerics, evil_overlords, fallen_kingdom, lawful, lich, murder, necromancy, paladins, scholars, spell_components, spellcasting, undead, warlocks].shuffle

addTagsToQuest(terriblis_quest_8_tags, terriblis_quest_8)

quest_8_likes = [matt, ingrid, kmsvr, rain]
addLikesToQuest(quest_8_likes, terriblis_quest_8)

# Terriblis quest 2 - Image
terriblis_quest_9 = Quest.create(title: "Looking for spellcasters to test my new offal dragon golem", text: "I have finally achieved my dream of creating a dragon golem from offal. It is glory incarnate. I am looking for a variety of mages to test their spells against my creation. It should be a rewarding experience for everyone involved, though you will also be compensated with gold and enough crystal wash to eliminate the smell of being in the same room as an offal dragon for several hours.", quest_type: "image", user_id: terriblis.id)

quest_9_image_1 = File.open('app/assets/adventr_seeder_images/quest_images/quest_9/meat_dragon.png')
terriblis_quest_9.images.attach(io: quest_9_image_1, filename: 'meat_dragon.png')

terriblis_quest_9_tags = [abjuration, acid, alchemy, bards, blood_magic, conjuration, dragons, familiars, fire, ice, lightning, magical_creatures, necromancy, sorcerers, sorcery, transmutation, undead, warlocks, wizards, wurms].shuffle

addTagsToQuest(terriblis_quest_9_tags, terriblis_quest_9)

quest_9_likes = [hero, matt, kmsvr, goblin_slayer, rain, catherine]
addLikesToQuest(quest_9_likes, terriblis_quest_9)


# Terriblis quest 10 - Image
terriblis_quest_10 = Quest.create(title: "Shoggoth infestation", text: "I spilled something perfectly legal to possess and now my castle is full of Shoggoths. They don't do much besides eat valuable artifacts and whisper secrets from a place I've never heard of in the voice of my second nemesis. I want them gone immediately.", quest_type: "image", user_id: terriblis.id)

quest_10_image_1 = File.open('app/assets/adventr_seeder_images/quest_images/quest_10/shoggoth_1.jpeg')
terriblis_quest_10.images.attach(io: quest_10_image_1, filename: 'shoggoth_1.jpeg')
quest_10_image_2 = File.open('app/assets/adventr_seeder_images/quest_images/quest_10/shoggoth_2.jpg')
terriblis_quest_10.images.attach(io: quest_10_image_2, filename: 'shoggoth_2.jpg')
quest_10_image_3 = File.open('app/assets/adventr_seeder_images/quest_images/quest_10/shoggoth_3.png')
terriblis_quest_10.images.attach(io: quest_10_image_3, filename: 'shoggoth_3.png')

terriblis_quest_10_tags = [ancients, beasts, chaotic, creatures, evil, magical_creatures, monster_extermination, monster_nest, outer_planes].shuffle

addTagsToQuest(terriblis_quest_10_tags, terriblis_quest_10)

quest_10_likes = [ingrid, kmsvr, goblin_slayer, rain, catherine]
addLikesToQuest(quest_10_likes, terriblis_quest_10)

# Terriblis quest 11 - Image

terriblis_quest_11 = Quest.create(title: "Looking to hire an assassin. Must be Platinum Rank or higher", text: "As a disclaimer, your target is still low level. This is a real request. Payment and dossier on the victim will be provided upon acceptance of the quest. I cannot say their name here, but their title rhymes with [Zero].", quest_type: "image", user_id: terriblis.id)

quest_11_image_1 = File.open('app/assets/adventr_seeder_images/quest_images/quest_11/assassination_target.jpg')
terriblis_quest_11.images.attach(io: quest_11_image_1, filename: 'assassination_target.jpg')

terriblis_quest_11_tags = [assassins, bandits, blood_oath, contracts, hero_tag, murder, political_intrigue, rogues, spies].shuffle

addTagsToQuest(terriblis_quest_11_tags, terriblis_quest_11)

quest_11_likes = [hero, catherine]
addLikesToQuest(quest_11_likes, terriblis_quest_11)

# Terriblis quest 12 - Quote
terriblis_quest_12 = Quest.create(title: "Oh, I get it. The real treasure was the people I had executed along the way!", text: "Dread Emperor Irritant I, the Oddly Successful", quest_type: "quote", user_id: terriblis.id)

terriblis_quest_12_tags = [aristocrats, chaotic, dark_lord, evil, evil_overlords, lawful, murder, nobles, political_intrigue, power, spies].shuffle

addTagsToQuest(terriblis_quest_12_tags, terriblis_quest_12)

quest_12_likes = [jess, ingrid, kmsvr, catherine]
addLikesToQuest(quest_12_likes, terriblis_quest_12)

# Terriblis quest 13 - Video
terriblis_quest_13 = Quest.create(title: "There may be similarities...", text: "", quest_type: "video", user_id: terriblis.id)

quest_13_video = File.open('app/assets/adventr_seeder_images/quest_videos/prozd_villain.mp4')
terriblis_quest_11.images.attach(io: quest_13_video, filename: 'prozd_villain.mp4')

terriblis_quest_13_tags = [aristocrats, bards, dark_lord, evil, evil_overlords, hero_tag, mystery, nobles, plot].shuffle

addTagsToQuest(terriblis_quest_13_tags, terriblis_quest_13)

quest_13_likes = [rain, carl, catherine]
addLikesToQuest(quest_13_likes, terriblis_quest_13)

# Terriblis quest 14 - Audio
terriblis_quest_14 = Quest.create(title: "An excellent song by a rather odd bard.", text: "I have not had the pleasure of meeting this bard in person, mind you. I was sold this song crystal and thought it a scam due to the price. Only after slaughtering the merchant caravan in its entirety did I test the product and find its music most agreeable. I hope to \"recruit\" the bard himself one day.", quest_type: "audio", user_id: terriblis.id)

quest_14_audio = File.open('app/assets/adventr_seeder_images/quest_audio/witch_drums.mp3')
terriblis_quest_14.images.attach(io: quest_14_audio, filename: 'witch_drums.mp3')

terriblis_quest_14_tags = [bards, caravans, magic_items, merchants, sorcery, wizards].shuffle

addTagsToQuest(terriblis_quest_14_tags, terriblis_quest_14)

quest_14_likes = [hero, ingrid, catherine]
addLikesToQuest(quest_14_likes, terriblis_quest_14)

# Matt quests
# Matt quest 15 - Text

matt_quest_15 = Quest.create(title: "Hello from Spellcaster Apprentices!", text: "Guilds are sprouting up every single day to help adventurers live happier, wealthier lives. Out with the old, in with the new. Innovation is all around us, and new teams are formed to help us maximize treasure haul and increase leveling speed.\n\nBut in a world where one wrong step can result in a lightningbolt to the face and literal dragons are breathing fire down our necks, there's too little accountability. Guilds incentivize adventurers to make false promises, pay town cries and bards to tell fake stories about them, all while not backing up their teams with support they can rely on. It's bulette shite.\n\nSpellcaster Apprentices was born to bring transparency to the our heroes' journeys - or the heroes themselves - specifically around spell matrices that help you maximize your power and potential rewards. We'll also help you weed through the BS quests, and highlight the ones worth the attention.", quest_type: "text", user_id: matt.id)

matt_quest_15_tags = [abjuration, academy, adventure, artificers, bards, books, bronze_rank, clerics, commoners, contracts, conjuration, diamond_rank, divination, druids, dynamos, elves, enchantment, evocation, exploration, gold_rank, guilds, illusion, magic, magic_items, necromancy, neutral, obsidian_rank, paladins, platinum_rank, porcelain_rank, power, protection, scholars, silver_rank, sorcerers, steel_rank, tomes, transmutation, warlocks, wizards].shuffle

addTagsToQuest(matt_quest_15_tags, matt_quest_15)

quest_15_likes = [terriblis, rain]
addLikesToQuest(quest_15_likes, matt_quest_15)

# Matt quest 16 - Image
matt_quest_16 = Quest.create(title: "Having trouble with a \"Loot Dispute\"?", text: "Divying up the spoils of a successful quest can be tough, especially when your party members have... conflicting personalities. There's no reason to take on all of that stress yourself, though! Our mediators have experience in coming to agreements that are beneficial for everyone, or making the tough decisions for the sake of party integrity. Schedule an appointment at one of our branch offices and have your Loot Dispute settled amicably - or at least bloodlessly - today!", quest_type: "image", user_id: matt.id)

quest_16_image_1 = File.open('app/assets/adventr_seeder_images/quest_images/quest_16/magic_item_tug_of_war.png')
matt_quest_16.images.attach(io: quest_16_image_1, filename: 'magic_item_tug_of_war.png')

matt_quest_16_tags = [adamantine, arcane_focus, artifacts, axes, books, bows, daggers, dungeons, enchantment, grimoires, hammers, legendary, magic_items, merchants, mythic, mythril, platinum, polearms, silver, gold, spell_components, spellbooks, staffs, swords, tomes].shuffle

addTagsToQuest(matt_quest_16_tags, matt_quest_16)

quest_16_likes = [hero, jess, ingrid, goblin_slayer, carl]
addLikesToQuest(quest_16_likes, matt_quest_16)

# Matt quest 17 - Image

matt_quest_17 = Quest.create(title: "Are you having issues preparing for battle?", text: "As time goes on and true battle is seen, many warriors begin to find donning their armor and dashing into the fray more difficult. Whether it be mental, emotional, or physical, it is no fault of their own. The lifestyle of  an adventurer can wear on you. Luckily, our guild has discovered a solution. A team of Alchemists from Soleil have developed a potion from the liver of certain species of non-sentient fey that can be used to give you back that warrior's spirit! Our own members of different ranks have thoroughly tested the effects and found them safe - though not for our foes! Inquire with any of our adventurers or staff for a 1-part-in-10 discount!", quest_type: "image", user_id: matt.id)

quest_17_image_1 = File.open('app/assets/adventr_seeder_images/quest_images/quest_17/potion.png')
matt_quest_17.images.attach(io: quest_17_image_1, filename: 'potion.png')

quest_17_image_2 = File.open('app/assets/adventr_seeder_images/quest_images/quest_17/berserker.png')
matt_quest_17.images.attach(io: quest_17_image_2, filename: 'berserker.png')

matt_quest_17_tags = [alchemists, alchemy, army, barbarians, blood_magic, chaotic, explosives, fighters, lawful, magic, merchants, power, transmutation, warriors].shuffle

addTagsToQuest(matt_quest_17_tags, matt_quest_17)

quest_17_likes = [hero, terriblis, ingrid, goblin_slayer]
addLikesToQuest(quest_17_likes, matt_quest_17)

# Matt quest 18 - Image

matt_quest_18 = Quest.create(title: "Staffs or wands? Which do you want to wield in the heat of battle?", text: "After extensive research into the strengths and weaknesses of both, we give the edge to staffs. They're heavier and often less wieldy, but you can't argue with the resilience or power that they offer. Luckily, we have enchanters in our employ that can convert any wand lower than the Very Rare grade to a staff of even greater quality! Inquire at any of our offices for a price quote and estimated end result.", quest_type: "image", user_id: matt.id)

quest_18_image_1 = File.open('app/assets/adventr_seeder_images/quest_images/quest_18/staffs.png')
matt_quest_18.images.attach(io: quest_18_image_1, filename: 'staffs.png')

quest_18_image_2 = File.open('app/assets/adventr_seeder_images/quest_images/quest_18/wands.png')
matt_quest_18.images.attach(io: quest_18_image_2, filename: 'wands.png')

matt_quest_18_tags = [academy, arcane_focus, artifacts, artificers, bards, clerics, common, enchantment, magic_items, merchants, necromancy, power, rare, sorcerers, spellcasting, staffs, warlocks, wizards, druids].shuffle

addTagsToQuest(matt_quest_18_tags, matt_quest_18)

quest_18_likes = [terriblis, rain, catherine]
addLikesToQuest(quest_18_likes, matt_quest_18)

# Matt quest 19 - Quote

matt_quest_19 = Quest.create(title: "You have power over your mind - not outside events. Unless someone has mind magic; then you have power over nothing.", text: "Marcus the Aeromancer", quest_type: "quote", user_id: matt.id)

matt_quest_19_tags = [academy, books, divination, magic, magic_items, magical_creatures, merchants, nobles, power, protection, sorcery, spellcasting, unseelie_court, fey, vampires].shuffle

addTagsToQuest(matt_quest_19_tags, matt_quest_19)

quest_19_likes = [terriblis, kmsvr, goblin_slayer, rain]
addLikesToQuest(quest_19_likes, matt_quest_19)

# Matt quest 20 - Video

matt_quest_20 = Quest.create(title: "Some of our members show off their magic.", text: "", quest_type: "video", user_id: matt.id)

quest_20_video_1 = File.open('app/assets/adventr_seeder_images/quest_videos/lightning_bolt.mp4')
matt_quest_20.images.attach(io: quest_20_video_1, filename: 'lightning_bolt.mp4')

quest_20_video_2 = File.open('app/assets/adventr_seeder_images/quest_videos/bean_wizard.mp4')
matt_quest_20.images.attach(io: quest_20_video_2, filename: 'bean_wizard.mp4')

matt_quest_20_tags = [academy, anarchy, bronze_rank, chaotic, beasts, creatures, forests, lightning, magic, spellcasting, staffs, wizards].shuffle

addTagsToQuest(matt_quest_20_tags, matt_quest_20)

quest_20_likes = [hero, rain]
addLikesToQuest(quest_20_likes, matt_quest_20)

# Matt quest 21 - Audio

matt_quest_21 = Quest.create(title: "A breakout hit by a band of bards", text: "Spellcaster Apprentices is a firm supporter of the arts, especially those related to spellcasting!", quest_type: "audio", user_id: matt.id)

quest_21_audio = File.open('app/assets/adventr_seeder_images/quest_audio/do_you_believe_in_magic.mp3')
matt_quest_21.images.attach(io: quest_21_audio, filename: 'do_you_believe_in_magic.mp3')

matt_quest_21_tags = [abjuration, artificers, bards, blood_magic, clerics, conjuration, divination, druids, dynamos, enchantment, evocation, familiars, illusion, magic, necromancy, paladins, sorcerers, spellcasting, transmutation, wizards].shuffle

addTagsToQuest(matt_quest_21_tags, matt_quest_21)

quest_21_likes = [terriblis, kmsvr, carl]
addLikesToQuest(quest_21_likes, matt_quest_21)

# Jess quests
# Jess quest 22 - Text

jess_quest_22 = Quest.create(title: "Looking for a new member for our party.", text: "We're a group of mostly rogues, rangers, and druids, though we're open to most other classes. Our general choice in quest leans towards hunting for supplies for alchemists/smaller settlements, tracking down and potentially eliminating bandits, or maintenance of the natural balance of wild areas. You must have the following characterstics to apply:\nA love and respect of nature,\nA standard bronze ranking in the generalistic system\nExperience working with a team of any size above and including 3 three members\nA willingness to learn and share your own knowledge\n100+ years of senior developer experience\n\nWe look foward to hearing from all applicants!", quest_type: "text", user_id: jess.id)

jess_quest_22_tags = [adventure, alchemy, bandits, beasts, creatures, bows, caravans, cave, commoners, dire_wolves, druids, dungeons, elves, earth, escort_quest, exploration, goblins, goblin_champions, good, hunt, lawful, magical_creatures, monster_extermination, monster_nest, neutral, mountains, pseudodragons, rangers, rescue_mission, rogues, spell_components, the_watch, undead, wilderness, wind].shuffle

addTagsToQuest(jess_quest_22_tags, jess_quest_22)

quest_22_likes = [hero]
addLikesToQuest(quest_22_likes, jess_quest_22)

# Jess quest 23 - Image

jess_quest_23 = Quest.create(title: "Goblin King sighting. Requesting collaboration.", text: "We have confirmed a sighting of the [Goblin King] near Restmos. Our group is not capable of besting it on our own, but can provide support to a group with frontliners. Inquire around Restmos or at the Adventurer's Guild branch in Atsu. Only accepting parties of Gold Rank or above", quest_type: "image", user_id: jess.id)

quest_23_image_1 = File.open('app/assets/adventr_seeder_images/quest_images/quest_23/goblin_king.jpg')
jess_quest_23.images.attach(io: quest_23_image_1, filename: 'goblin_king.jpg')

quest_23_image_2 = File.open('app/assets/adventr_seeder_images/quest_images/quest_23/goblin_king_2.jpg')
jess_quest_23.images.attach(io: quest_23_image_2, filename: 'goblin_king_2.jpg')

jess_quest_23_tags = [creatures, diamond_rank, evil, goblins, goblin_champions, goblin_lords, goblin_kings, gold_rank, guilds, hunt, monster_extermination, obsidian_rank, platinum_rank, warriors, barbarians, monks, paladins, fighters].shuffle

addTagsToQuest(jess_quest_23_tags, jess_quest_23)

quest_23_likes = [hero, goblin_slayer]
addLikesToQuest(quest_23_likes, jess_quest_23)

# Jess quest 24 - Image

jess_quest_24 = Quest.create(title: "Looking for an appraisal on a seemingly magical bow", text: "No known effects yet. Presumed to be free of curses as our idiot of a rogue seems fine after picking it up with his bare hands. Willing to negotiate prior to appraisal for costs of evaluation.", quest_type: "image", user_id: jess.id)

quest_24_image_1 = File.open('app/assets/adventr_seeder_images/quest_images/quest_24/unknown_bow.jpg')
jess_quest_24.images.attach(io: quest_24_image_1, filename: 'unknown_bow.jpg')

jess_quest_24_tags = [artifacts, artificers, blacksmithing, bows, contracts, divination, enchantment, magic_items, rare, transmutation, wizards].shuffle

addTagsToQuest(jess_quest_24_tags, jess_quest_24)

quest_24_likes = [terriblis, matt, ingrid, kmsvr, catherine]
addLikesToQuest(quest_24_likes, jess_quest_24)

# Jess quest 25 - Image

jess_quest_25 = Quest.create(title: "Mutated kuo-toa parts for sale", text: "Before anyone starts, it's not the sapient variety. Even if it was, these monsters were so mutated by some sick, unidentified strain of mana that they were damn near unrecognizable at first. The parts seem to be poison- and water-aligned to some extent like normal, but also carry a disturbing amount of acidic mana. That's the best layman guess, a good alchemist will tell you more. Also, I guess if anyone wants their daggers we'll sell them cheaply. Same alignments on the enchantments, low quality. Picture related: like that, but somewhat more inside-out.", quest_type: "image", user_id: jess.id)

quest_25_image_1 = File.open('app/assets/adventr_seeder_images/quest_images/quest_25/kuo_toa.png')
jess_quest_25.images.attach(io: quest_25_image_1, filename: 'kuo_toa.png')

jess_quest_25_tags = [academy, acid, alchemists, alchemy, beasts, cave, creatures, daggers, dungeons, enchantment, ice, magic_items, magical_creatures, merchants, monster_extermination, monster_nest, spell_components].shuffle

addTagsToQuest(jess_quest_25_tags, jess_quest_25)

quest_25_likes = [terriblis, matt, goblin_slayer, rain, carl]
addLikesToQuest(quest_25_likes, jess_quest_25)

# Jess quest 26 - Quote

jess_quest_26 = Quest.create(title: "Nature, for me is raw and dangerous and difficult and beautiful and unnerving.", text: "Hollowseeker Goldsworthy", quest_type: "quote", user_id: jess.id)

jess_quest_26_tags = [adventure, beasts, cave, creatures, creler, dire_wolves, dragons, drakes, earth, ents, exploration, fey, food, hunt, magical_creatures, mountains, pseudodragons, satyr, slimes, trolls, wilderness, wurms, wind].shuffle

addTagsToQuest(jess_quest_26_tags, jess_quest_26)

quest_26_likes = [ingrid, kmsvr, rain]
addLikesToQuest(quest_26_likes, jess_quest_26)

# Jess quest 27 - Video

jess_quest_27 = Quest.create(title: "The benefits of high DEX", text: "STR is important too, but I cannot express emphatically enough how easily a decent DEX could save your hide. This is just an example of the mobility a solid DEX stat can give you, even in rough terrain.", quest_type: "video", user_id: jess.id)

quest_27_video_1 = File.open('app/assets/adventr_seeder_images/quest_videos/forest_parkour.mp4')
jess_quest_27.images.attach(io: quest_27_video_1, filename: 'forest_parkour.mp4')

jess_quest_27_tags = [adventure, assassins, bows, cave, daggers, druids, elves, exploration, forests, hunt, monks, mountains, rangers, rogues, wilderness, wind].shuffle

addTagsToQuest(jess_quest_27_tags, jess_quest_27)

quest_27_likes = [hero, ingrid, kmsvr, goblin_slayer]
addLikesToQuest(quest_27_likes, jess_quest_27)

# Jess quest 28 - Audio

jess_quest_28 = Quest.create(title: "Our team's anthem", text: "", quest_type: "audio", user_id: jess.id)

quest_28_audio_1 = File.open('app/assets/adventr_seeder_images/quest_audio/born_to_be_wild.mp3')
jess_quest_28.images.attach(io: quest_28_audio_1, filename: 'born_to_be_wild.mp3')

jess_quest_28_tags = [adventure, barbarians, beasts, cave, dire_wolves, druids, earth, elves, ents, exploration, fey, food, forests, hunt, monster_nest, mountains, orcs, rangers, rogues, unseelie_court, wilderness, wind].shuffle

addTagsToQuest(jess_quest_28_tags, jess_quest_28)

quest_28_likes = [hero, ingrid, kmsvr]
addLikesToQuest(quest_28_likes, jess_quest_28)

# Ingrid quests
# Ingrid quest 29 - Text

ingrid_quest_29 = Quest.create(title: "Looking for talented craftswomen and craftsmen to build equipment based around the scales of an adult white dragon.", text: "Payment can be negotiated, but will based around normal currency and materials remaining after the jobs are done. Please only inquire if you are skilled enough to have worked with materials from platinum ranks threats or above.", quest_type: "text", user_id: ingrid.id)

ingrid_quest_29_tags = [artificers, beasts, blacksmithing, caravans, creatures, diamond_rank, dragons, hunt, ice, magical_creatures, wurms].shuffle

addTagsToQuest(ingrid_quest_29_tags, ingrid_quest_29)

quest_29_likes = [jess, kmsvr, carl, catherine]
addLikesToQuest(quest_29_likes, ingrid_quest_29)

# Ingrid quest 30 - Image

ingrid_quest_30 = Quest.create(title: "Looking for information on local dire wolf populations", text: "Half payment up front, the other half after your intel is confirmed. Looking for any and all information, especially locations and warnings about any aberrant behavior.", quest_type: "image", user_id: ingrid.id)

quest_30_image_1 = File.open('app/assets/adventr_seeder_images/quest_images/quest_30/dire_wolves_1.jpeg')
ingrid_quest_30.images.attach(io: quest_30_image_1, filename: 'dire_wolves_1.jpeg')

quest_30_image_2 = File.open('app/assets/adventr_seeder_images/quest_images/quest_30/dire_wolves_2.jpg')
ingrid_quest_30.images.attach(io: quest_30_image_2, filename: 'dire_wolves_2.jpg')

ingrid_quest_30_tags = [beasts, cave, creatures, dire_wolves, food, ice, magical_creatures, monster_extermination, monster_nest, mountains, rangers, druids, silver_rank, wilderness].shuffle

addTagsToQuest(ingrid_quest_30_tags, ingrid_quest_30)

quest_30_likes = [hero, jess, kmsvr, rain]
addLikesToQuest(quest_30_likes, ingrid_quest_30)

# Ingrid quest 31 - Image

ingrid_quest_31 = Quest.create(title: "Request mage support with the exploration of a potentially new dungeon in the Brennan range.", text: "Exact details will be discussed during negotiations. We hold claim over first delve for over 3 weeks due to guild law. We seek those with powerful fire magic.", quest_type: "image", user_id: ingrid.id)

quest_31_image_1 = File.open('app/assets/adventr_seeder_images/quest_images/quest_31/dungeon_entrance.jpg')
ingrid_quest_31.images.attach(io: quest_31_image_1, filename: 'dungeon_entrance.jpg')

ingrid_quest_31_tags = [adventure, bards, clerics, druids, dungeons, dynamos, escort_quest, exploration, fire, fireball, ice, magic, mountains, paladins, protection, sorcerers, sorcery, spellcasting, warlocks, wilderness, wizards].shuffle

addTagsToQuest(ingrid_quest_31_tags, ingrid_quest_31)

quest_31_likes = [hero, terriblis, goblin_slayer, rain]
addLikesToQuest(quest_31_likes, ingrid_quest_31)

# Ingrid quest 32 - Image

ingrid_quest_32 = Quest.create(title: "Don't know what the hells this is supposed to be but it's out there.", text: "Any information would be useful, though we don't intend on hunting it down. We almost lost 3 of our own. It used purely physical attacks to chase us off, though that doesn't rule out it knowing magic. Couldn't [Appraise] it, which is why we don't have a name. It seems DEX focused.", quest_type: "image", user_id: ingrid.id)

quest_32_image_1 = File.open('app/assets/adventr_seeder_images/quest_images/quest_32/mysterious_creature.jpg')
ingrid_quest_32.images.attach(io: quest_32_image_1, filename: 'mysterious_creature.jpg')

ingrid_quest_32_tags = [beasts, creatures, diamond_rank, divination, dungeons, exploration, guilds, hunt, magical_creatures, monster_extermination, monster_nest, mountains, mystery, outer_planes, outsider, rare, wilderness].shuffle

addTagsToQuest(ingrid_quest_32_tags, ingrid_quest_32)

quest_32_likes = [terriblis, kmsvr, catherine]
addLikesToQuest(quest_32_likes, ingrid_quest_32)

# Ingrid quest 33 - Quote

ingrid_quest_33 = Quest.create(title: "In preparing for battle I have always found that plans are useless, but planning is indispensable.", text: "Dwight D. Eisenhower", quest_type: "quote", user_id: ingrid.id)

ingrid_quest_33_tags = [adventure, anarchy, army, barbarians, bronze_rank, chaotic, demon_army, diamond_rank, fighters, gold_rank, hero_tag, monks, paladins, platinum_rank, porcelain_rank, silver_rank, steel_rank, the_watch, warriors, obsidian_rank].shuffle

addTagsToQuest(ingrid_quest_33_tags, ingrid_quest_33)

quest_33_likes = [hero, kmsvr, goblin_slayer, rain]
addLikesToQuest(quest_33_likes, ingrid_quest_33)

# Ingrid quest 34 - Video

ingrid_quest_34 = Quest.create(title: "Footage from a scrying orb of an old battle my kingdom was involved in", text: "It was a great day for my people. A resounding win. Enjoy and take note of our power", quest_type: "video", user_id: ingrid.id)

quest_34_video_1 = File.open('app/assets/adventr_seeder_images/quest_videos/viking_battle.mp4')
ingrid_quest_34.images.attach(io: quest_34_video_1, filename: 'viking_battle.mp4')

ingrid_quest_34_tags = [army, axes, barbarians, bows, commoners, druids, dwarves, elves, evil_overlords, fallen_kingdom, fighters, forests, gods, goddesses, goliaths, good, hammers, humans, king, kingdom, lawful, legendary, mountains, plot, queen, rangers, rogues, sorcery, swords, staffs, trolls, warriors, wilderness].shuffle

addTagsToQuest(ingrid_quest_34_tags, ingrid_quest_34)

quest_34_likes = [hero, rain, catherine]
addLikesToQuest(quest_34_likes, ingrid_quest_34)

# Ingrid quest 35 - Audio

ingrid_quest_35 = Quest.create(title: "Battle music is integral to success", text: "We often hire a bard for the greatest battles we partake in", quest_type: "audio", user_id: ingrid.id)

quest_35_audio_1 = File.open('app/assets/adventr_seeder_images/quest_audio/immigrant_song.mp3')
ingrid_quest_35.images.attach(io: quest_35_audio_1, filename: 'immigrant_song.mp3')

quest_35_audio_2 = File.open('app/assets/adventr_seeder_images/quest_audio/ride_of_the_valkyries.mp3')
ingrid_quest_35.images.attach(io: quest_35_audio_2, filename: 'ride_of_the_valkyries.mp3')

ingrid_quest_35_tags = [adventure, angels, army, barbarians, demon_army, hunt, legendary, mythic, warriors, paladins, bards, fighters].shuffle

addTagsToQuest(ingrid_quest_35_tags, ingrid_quest_35)

quest_35_likes = [hero, rain, carl, catherine]
addLikesToQuest(quest_35_likes, ingrid_quest_35)

# Kmsvr quests
# Kmsvr quest 36 - Text

kmsvr_quest_36 = Quest.create(title: "Have you read The Wandering Inn?", text: "It is a very long story, but it's a good story. It also has several wonderful characters like me (Kmsvr). Please go give it a chance, it is one of my (Kmsvr's) favorites.", quest_type: "text", user_id: kmsvr.id)

kmsvr_quest_36_tags = [academy, adventure, ai, alchemists, ancients, aristocrats, artifacts, assassins, blacksmithing, chaotic, commoners, creler, demons, djinn, dragons, dungeons, escort_quest, exploration, fey, goblins, good, humans, legendary, magical_creatures, necromancy, political_intrigue, rescue_mission, the_watch].shuffle

addTagsToQuest(kmsvr_quest_36_tags, kmsvr_quest_36)

quest_36_likes = [terriblis, matt, jess, ingrid, rain]
addLikesToQuest(quest_36_likes, kmsvr_quest_36)

# Kmsvr quest 37 - Image

kmsvr_quest_37 = Quest.create(title: "Here is a picture of our team.", text: "Someone drew a picture of our team. It is great and my team let's me hold on to it. Notice how powerful each of us is. I am asserting dominance over whoever reads this.", quest_type: "image", user_id: kmsvr.id)

quest_37_image_1 = File.open('app/assets/adventr_seeder_images/quest_images/quest_37/horns_of_hammerad_by_mg.jpg')
kmsvr_quest_37.images.attach(io: quest_37_image_1, filename: 'horns_of_hammerad_by_mg.jpg')

kmsvr_quest_37_tags = [academy, adventure, artifacts, commoners, contracts, creler, dungeons, elves, fighters, gold_rank, good, guilds, humans, ice, lawful, magic_items, monster_extermination, necromancy, nobles, sorcerers, swords, undead].shuffle

addTagsToQuest(kmsvr_quest_37_tags, kmsvr_quest_37)

quest_37_likes = [hero, matt, jess, ingrid, rain]
addLikesToQuest(quest_37_likes, kmsvr_quest_37)

# Kmsvr quest 38 - Image

kmsvr_quest_38 = Quest.create(title: "There are crelers and we need more teams to kill them.", text: "There are just the baby crelers. We have defeated an adult before with assistance. Dominance asserted. We request assistance wiping these babies out.", quest_type: "image", user_id: kmsvr.id)

quest_38_image_1 = File.open('app/assets/adventr_seeder_images/quest_images/quest_38/creler_1.jpeg')
kmsvr_quest_38.images.attach(io: quest_38_image_1, filename: 'creler_1.jpeg')

quest_38_image_1 = File.open('app/assets/adventr_seeder_images/quest_images/quest_38/creler_2.png')
kmsvr_quest_38.images.attach(io: quest_38_image_1, filename: 'creler_2.png')

kmsvr_quest_38_tags = [acid, contracts, creatures, creler, evil, gold_rank, magical_creatures, monster_extermination, monster_nest, silver_rank, the_watch].shuffle

addTagsToQuest(kmsvr_quest_38_tags, kmsvr_quest_38)

quest_38_likes = [terriblis, jess, ingrid, carl, catherine]
addLikesToQuest(quest_38_likes, kmsvr_quest_38)

# Kmsvr quest 39 - Image

kmsvr_quest_39 = Quest.create(title: "There is a lich loose in the Flooded Plains", text: "This is a bad lich. There are plenty of good necromancers, like Comrade Pisces. This, however, is a bad lich, so we should stop him. Looking for information about the bad lich. Thank you.", quest_type: "image", user_id: kmsvr.id)

quest_39_image_1 = File.open('app/assets/adventr_seeder_images/quest_images/quest_39/lich.png')
kmsvr_quest_39.images.attach(io: quest_39_image_1, filename: 'lich.png')

kmsvr_quest_39_tags = [ancients, blood_magic, clerics, dark_lord, evil, evil_overlords, gold_rank, lich, magical_creatures, monster_extermination, necromancy, paladins, sorcerers, warlocks, undead].shuffle

addTagsToQuest(kmsvr_quest_39_tags, kmsvr_quest_39)

quest_39_likes = [hero, matt, catherine]
addLikesToQuest(quest_39_likes, kmsvr_quest_39)

# Kmsvr quest 40 - Quote

kmsvr_quest_40 = Quest.create(title: "Is it war?", text: "Me (Kmsvr)", quest_type: "quote", user_id: kmsvr.id)

kmsvr_quest_40_tags = [army, chaotic, fighters, gold_rank, hero_tag, hunt, kingdom, the_watch].shuffle

addTagsToQuest(kmsvr_quest_40_tags, kmsvr_quest_40)

quest_40_likes = [hero, rain, carl, catherine]
addLikesToQuest(quest_40_likes, kmsvr_quest_40)

# Kmsvr quest 41 - Video

kmsvr_quest_41 = Quest.create(title: "Fan-made video about our lives", text: "We're not mentioned, but that's only because we're very important characters that come later on.", quest_type: "video", user_id: kmsvr.id)

quest_41_video_1 = File.open('app/assets/adventr_seeder_images/quest_videos/wandering_inn_fan_video.mp4')
kmsvr_quest_41.images.attach(io: quest_41_video_1, filename: 'wandering_inn_fan_video.mp4')

kmsvr_quest_41_tags = [adventure, creatures, creler, cultists, demon_army, dragons, dungeons, evocation, exploration, explosives, goblins, goblin_champions, goblin_lords, goblin_kings, gods, goddesses, good, hero_tag, legendary, magic, murder, mystery, political_intrigue, rescue_mission, the_watch, undead].shuffle

addTagsToQuest(kmsvr_quest_41_tags, kmsvr_quest_41)

quest_41_likes = [hero, matt, jess, rain, catherine]
addLikesToQuest(quest_41_likes, kmsvr_quest_41)

# Kmsvr quest 42 - Audio

kmsvr_quest_42 = Quest.create(title: "New release by The Singer of Terandria", text: "She calls it We Will Rock You and claims it to be the work of a [Queen]!", quest_type: "audio", user_id: kmsvr.id)

quest_42_audio_1 = File.open('app/assets/adventr_seeder_images/quest_audio/we_will_rock_you.mp3')
kmsvr_quest_42.images.attach(io: quest_42_audio_1, filename: 'we_will_rock_you.mp3')

kmsvr_quest_42_tags = [angels, army, bards, commoners, good, mythic, outsider, plot, queen].shuffle

addTagsToQuest(kmsvr_quest_42_tags, kmsvr_quest_42)

quest_42_likes = [matt, rain, carl]
addLikesToQuest(quest_42_likes, kmsvr_quest_42)

# Goblin Slayer quests
# Goblin Slayer quest 43 - Text

goblin_slayer_quest_43 = Quest.create(title: "Do not overlook goblins", text: "It is easy to not see them as a threat. They are weak alone. Most are not overly clever. A good [Porcelain Rank] team can defeat them.\nBut they learn. They group up. They become a problem. Do not overlook goblin quests, or you will allow the world to face another [Goblin King].", quest_type: "text", user_id: goblin_slayer.id)

goblin_slayer_quest_43_tags = [evil, goblins, goblin_champions, goblin_lords, goblin_kings, hunt, monster_extermination, monster_nest, obsidian_rank, porcelain_rank, rescue_mission, wilderness].shuffle

addTagsToQuest(goblin_slayer_quest_43_tags, goblin_slayer_quest_43)

quest_43_likes = [hero, matt, jess, ingrid, rain, carl]
addLikesToQuest(quest_43_likes, goblin_slayer_quest_43)

# Goblin Slayer quest 44 - Image

goblin_slayer_quest_44 = Quest.create(title: "Goblin Champions", text: "Gold Rank threat. Spotted outside of Water Town. I will also take this quest.", quest_type: "image", user_id: goblin_slayer.id)

quest_44_image_1 = File.open('app/assets/adventr_seeder_images/quest_images/quest_44/goblin_champion_1.jpg')
goblin_slayer_quest_44.images.attach(io: quest_44_image_1, filename: 'goblin_champion_1.jpg')

quest_44_image_1 = File.open('app/assets/adventr_seeder_images/quest_images/quest_44/goblin_champion_2.jpeg')
goblin_slayer_quest_44.images.attach(io: quest_44_image_1, filename: 'goblin_champion_2.jpeg')

goblin_slayer_quest_44_tags = [goblins, goblin_champions, goblin_lords, goblin_kings, gold_rank, monster_nest, monster_extermination, kingdom, wilderness].shuffle

addTagsToQuest(goblin_slayer_quest_44_tags, goblin_slayer_quest_44)

quest_44_likes = [hero, rain, carl]
addLikesToQuest(quest_44_likes, goblin_slayer_quest_44)

# Goblin Slayer quest 45 - Image

goblin_slayer_quest_45 = Quest.create(title: "Looking for magical scrolls", text: "Utility spells would be best. Prices negotiable.", quest_type: "image", user_id: goblin_slayer.id)

quest_45_image_1 = File.open('app/assets/adventr_seeder_images/quest_images/quest_45/magic_scroll_1.png')
goblin_slayer_quest_45.images.attach(io: quest_45_image_1, filename: 'magic_scroll_1.png')

quest_45_image_2 = File.open('app/assets/adventr_seeder_images/quest_images/quest_45/magic_scroll_2.jpg')
goblin_slayer_quest_45.images.attach(io: quest_45_image_2, filename: 'magic_scroll_2.jpg')

quest_45_image_3 = File.open('app/assets/adventr_seeder_images/quest_images/quest_45/magic_scroll_3.jpg')
goblin_slayer_quest_45.images.attach(io: quest_45_image_3, filename: 'magic_scroll_3.jpg')

goblin_slayer_quest_45_tags = [goblins, goblin_champions, goblin_lords, goblin_kings, abjuration, artifacts, artificers, books, conjuration, divination, enchantment, explosives, fireball, lightning, magic_items, monster_extermination, protection, rare, spellcasting, transmutation].shuffle

addTagsToQuest(goblin_slayer_quest_45_tags, goblin_slayer_quest_45)

quest_45_likes = [terriblis, matt, kmsvr, rain, carl, catherine]
addLikesToQuest(quest_45_likes, goblin_slayer_quest_45)

# Goblin Slayer quest 46 - Image

goblin_slayer_quest_46 = Quest.create(title: "Is this a goblin?", text: "I've been told it is not. It acts like a goblin though.", quest_type: "image", user_id: goblin_slayer.id)

quest_46_image_1 = File.open('app/assets/adventr_seeder_images/quest_images/quest_46/ogre.jpeg')
goblin_slayer_quest_46.images.attach(io: quest_46_image_1, filename: 'ogre.jpeg')

goblin_slayer_quest_46_tags = [goblins, goblin_champions, goblin_lords, goblin_kings, alchemists, beasts, creatures, demons, devils, goliaths, magical_creatures, monster_extermination, monster_nest, mountains].shuffle

addTagsToQuest(goblin_slayer_quest_46_tags, goblin_slayer_quest_46)

quest_46_likes = [jess, ingrid, kmsvr, rain, carl]
addLikesToQuest(quest_46_likes, goblin_slayer_quest_46)

# Goblin Slayer quest 47 - Quote

goblin_slayer_quest_47 = Quest.create(title: "It's your actions.. not your strength, that would lead you to victory.", text: "Burglar", quest_type: "quote", user_id: goblin_slayer.id)

goblin_slayer_quest_47_tags = [adventure, ancients, barbarians, blood_oath, fighters, gods, goblins, goblin_champions, goblin_lords, goblin_kings, hunt, monster_extermination, monster_nest].shuffle

addTagsToQuest(goblin_slayer_quest_47_tags, goblin_slayer_quest_47)

quest_47_likes = [kmsvr, rain, carl, catherine]
addLikesToQuest(quest_47_likes, goblin_slayer_quest_47)

# Goblin Slayer quest 48 - Video

goblin_slayer_quest_48 = Quest.create(title: "This is how the party formed.", text: "We kill goblins together.", quest_type: "video", user_id: goblin_slayer.id)

quest_48_video_1 = File.open('app/assets/adventr_seeder_images/quest_videos/party_formation.mp4')
goblin_slayer_quest_48.images.attach(io: quest_48_video_1, filename: 'party_formation.mp4')

goblin_slayer_quest_48_tags = [goblins, goblin_champions, goblin_lords, goblin_kings, adventure, clerics, dragonborn, druids, elves, exploration, guilds, monks, monster_extermination, dwarves, humans, protection, rangers, silver_rank, warriors].shuffle

addTagsToQuest(goblin_slayer_quest_48_tags, goblin_slayer_quest_48)

quest_48_likes = [hero, matt, rain, catherine]
addLikesToQuest(quest_48_likes, goblin_slayer_quest_48)

# Goblin Slayer quest 49 - Audio

goblin_slayer_quest_49 = Quest.create(title: "I like this music.", text: "", quest_type: "audio", user_id: goblin_slayer.id)

quest_49_audio_1 = File.open('app/assets/adventr_seeder_images/quest_audio/goblin_slayer_theme.mp3')
goblin_slayer_quest_49.images.attach(io: quest_49_audio_1, filename: 'goblin_slayer_theme.mp3')

goblin_slayer_quest_49_tags = [goblins, goblin_champions, goblin_lords, goblin_kings, bards].shuffle

addTagsToQuest(goblin_slayer_quest_49_tags, goblin_slayer_quest_49)

quest_49_likes = [hero, terriblis, catherine]
addLikesToQuest(quest_49_likes, goblin_slayer_quest_49)

# Rain quests
# Rain quest 50 - Text

rain_quest_50 = Quest.create(title: "Looking for insight into how you all interact with the [System].", text: "I know the [System] can be a very touchy subject, so I assure you that I will not share your information with anyone. I'm just looking into how different people interact with it, as from what I've read and heard this can vary wildly. Any information at all will help, though if you've done something especially odd with it I would be especially interested.", quest_type: "text", user_id: rain.id)

rain_quest_50_tags = [academy, ai, enchantment, magic, mystery, outsider].shuffle

addTagsToQuest(rain_quest_50_tags, rain_quest_50)

quest_50_likes = [hero, carl]
addLikesToQuest(quest_50_likes, rain_quest_50)

# Rain quest 51 - Image

rain_quest_51 = Quest.create(title: "Not all slimes are evil!", text: "This probably isn't the best picture to include considering Dozer was helping clean up after a fight, but I promise he's harmless. The worst thing he'll do is try to hug your face, but he would never injure someone. Crystal slimes aren't bad slimes!", quest_type: "image", user_id: rain.id)

quest_51_image_1 = File.open('app/assets/adventr_seeder_images/quest_images/quest_51/slime.jpg')
rain_quest_51.images.attach(io: quest_51_image_1, filename: 'slime.jpg')

rain_quest_51_tags = [creatures, good, magical_creatures, slimes].shuffle

addTagsToQuest(rain_quest_51_tags, rain_quest_51)

quest_51_likes = [hero, matt, catherine]
addLikesToQuest(quest_51_likes, rain_quest_51)

# Rain quest 52 - Image

rain_quest_52 = Quest.create(title: "Now I know we aren't supposed to talk about dragons", text: "Hear me out, though. Is there any information at all that's safe to discuss? Does writing it down protect the reader from \"retribution\"? Do they just have really good hearing? Is magic involved? Are there magical protections you could use? Are there different types? Are different types more dangerous to talk about? If you talk about them in a very general sense, do some become angrier than others? Any answers at all would be appreciated.", quest_type: "image", user_id: rain.id)

quest_52_image_1 = File.open('app/assets/adventr_seeder_images/quest_images/quest_52/dragons.jpg')
rain_quest_52.images.attach(io: quest_52_image_1, filename: 'dragons.jpg')

rain_quest_52_tags = [books, cave, beasts, creatures, dragonborn, dragons, drakes, evil, good, hunt, magical_creatures, monster_nest, mountains,  outsider,power, protection, pseudodragons, rare, wurms].shuffle

addTagsToQuest(rain_quest_52_tags, rain_quest_52)

quest_52_likes = [kmsvr]
addLikesToQuest(quest_52_likes, rain_quest_52)

# Rain quest 53 - Image

rain_quest_53 = Quest.create(title: "Where are the dwarves?", text: "I expected dwarves and yet I haven't met any. I know you're out there. I know a master smith, you can trade tips! Wait, I know that not all dwarves are blacksmiths. Is that racist? Sorry. Let's be friends!", quest_type: "image", user_id: rain.id)

quest_53_image_1 = File.open('app/assets/adventr_seeder_images/quest_images/quest_53/dwarves.jpg')
rain_quest_53.images.attach(io: quest_53_image_1, filename: 'dwarves.jpg')
quest_53_image_2 = File.open('app/assets/adventr_seeder_images/quest_images/quest_53/grudges.jpg')
rain_quest_53.images.attach(io: quest_53_image_2, filename: 'grudges.jpg')

rain_quest_53_tags = [blacksmithing, dwarves, enchantment, hammers, kingdom, mountains, outsider, scholars].shuffle

addTagsToQuest(rain_quest_53_tags, rain_quest_53)

quest_53_likes = [hero, kmsvr, catherine]
addLikesToQuest(quest_53_likes, rain_quest_53)

# Rain quest 54 - Quote

rain_quest_54 = Quest.create(title: "Even the smallest person can change the course of the future.", text: "Galadriel", quest_type: "quote", user_id: rain.id)

rain_quest_54_tags = [adventure, ancients, dwarves, elves, evil_overlords, fallen_kingdom, good, hero_tag, mythic, outsider, queen, sorcerers, wizards].shuffle

addTagsToQuest(rain_quest_54_tags, rain_quest_54)

quest_54_likes = [hero, matt, jess, ingrid, kmsvr, goblin_slayer, carl, catherine]
addLikesToQuest(quest_54_likes, rain_quest_54)

# Rain quest 55 - Video

rain_quest_55 = Quest.create(title: "You shall not pass!", text: "Great scene from a great movie. Movies are like plays. Um, never mind.", quest_type: "video", user_id: rain.id)

quest_55_video_1 = File.open('app/assets/adventr_seeder_images/quest_videos/you_shall_not_pass.mp4')
rain_quest_55.images.attach(io: quest_55_video_1, filename: 'you_shall_not_pass.mp4')

rain_quest_55_tags = [adventure, army, bards, books, commoners, creatures, demon_army, demons, dwarves, evil, hero_tag, legendary, mountains, orcs, plot, spellcasting, staffs, wizards].shuffle

addTagsToQuest(rain_quest_55_tags, rain_quest_55)

quest_55_likes = [hero, matt, goblin_slayer, carl]
addLikesToQuest(quest_55_likes, rain_quest_55)

# Rain quest 56 - Audio

rain_quest_56 = Quest.create(title: "Had some bards recreate some songs.", text: "I hope you like them! They're from some of my favorite stories.", quest_type: "audio", user_id: rain.id)

quest_56_audio_1 = File.open('app/assets/adventr_seeder_images/quest_audio/concerning_hobbits.mp3')
rain_quest_56.images.attach(io: quest_56_audio_1, filename: 'concerning_hobbits.mp3')

quest_56_audio_2 = File.open('app/assets/adventr_seeder_images/quest_audio/song_of_durin.mp3')
rain_quest_56.images.attach(io: quest_56_audio_2, filename: 'song_of_durin.mp3')

quest_56_audio_3 = File.open('app/assets/adventr_seeder_images/quest_audio/use_well_the_days.mp3')
rain_quest_56.images.attach(io: quest_56_audio_3, filename: 'use_well_the_days.mp3')

quest_56_audio_4 = File.open('app/assets/adventr_seeder_images/quest_audio/the_bridge_of _khazad_dum.mp3')
rain_quest_56.images.attach(io: quest_56_audio_4, filename: 'the_bridge_of _khazad_dum.mp3')

rain_quest_56_tags = [adventure, army, bards, books, dark_lord, dwarves, elves, escort_quest, exploration, fallen_kingdom, forests, hero_tag, humans, legendary, magic, mountains, outsider, power, dragons, wizards, wurms].shuffle

addTagsToQuest(rain_quest_56_tags, rain_quest_56)

quest_56_likes = [hero, matt, jess, ingrid, kmsvr, goblin_slayer, carl, catherine]
addLikesToQuest(quest_56_likes, rain_quest_56)

# Carl quests
# Carl quest 57 - Text

carl_quest_57 = Quest.create(title: "Is anyone else having weird interactions with the system AI?", text: "Carl: I don't want to go into details, but it seems pretty into... feet. I don't know if this is just me. I really really hope it isn't. It won't leave me alone though, and almost caused my party to die on a few occasions. Any advice at all would be much appreciated.", quest_type: "text", user_id: carl.id)

carl_quest_57_tags = [ai, chaotic, dungeons, evil, gods, murder].shuffle

addTagsToQuest(carl_quest_57_tags, carl_quest_57)

quest_57_likes = [hero, kmsvr, rain]
addLikesToQuest(quest_57_likes, carl_quest_57)

# Carl quest 58 - Image

carl_quest_58 = Quest.create(title: "This is my original party.", text: "Carl: We have new members and there are a few people we team up with occasionally, but we haven't exactly had the time to sketch out pictures for everyone. If you see Donut or Mordecai, trade information so we can help each other out.\n\nDonut: THIS IS DONUT. IF YOU SEE A MAN IN HIS UNDERPANTS MAKING EVERYTHING EXPLODE, THAT'S CARL. HE'S ACTUALLY NICE AND NOT A PREDATOR.\n\nCarl: God dammit, Donut.", quest_type: "image", user_id: carl.id)

quest_58_image_1 = File.open('app/assets/adventr_seeder_images/quest_images/quest_58/princess_donut.jpg')
carl_quest_58.images.attach(io: quest_58_image_1, filename: 'princess_donut.jpg')

quest_58_image_2 = File.open('app/assets/adventr_seeder_images/quest_images/quest_58/mordecai.jpg')
carl_quest_58.images.attach(io: quest_58_image_2, filename: 'mordecai.jpg')

carl_quest_58_tags = [ai, adventure, anarchy, books, chaotic, dungeons, earth, explosives, familiars, fighters, good, hero_tag, humans, magic, magical_creatures, outer_planes, plot, sorcerers, spellcasting, alchemists, alchemy, princess].shuffle

addTagsToQuest(carl_quest_58_tags, carl_quest_58)

quest_58_likes = [matt, jess, ingrid, kmsvr, goblin_slayer, rain]
addLikesToQuest(quest_58_likes, carl_quest_58)

# Carl quest 59 - Image

carl_quest_59 = Quest.create(title: "Here's an example of what we used to be up against.", text: "Carl: These guys were a headache, though I'm pretty sure we could take them pretty easily at this point. They're not smart, and they don't pay attention to their weapon cache, so that's a good source of explosives if you can sneak in. If they spot you, though, just run. You don't want to deal with their Hob lobbers, even if you're too powerful to be in danger.\n\nDonut: CARL FLIRTED WITH A GOBLIN TO TRICK THEM. THAT WASN'T VERY NICE OF HIM. MISS BEATRICE WOULD NOT STAND FOR SUCH BEHAVIOR IF SHE WAS HERE.", quest_type: "image", user_id: carl.id)

quest_59_image_1 = File.open('app/assets/adventr_seeder_images/quest_images/quest_59/goblin_bomb_bard.jpg')
carl_quest_59.images.attach(io: quest_59_image_1, filename: 'goblin_bomb_bard.jpg')

carl_quest_59_tags = [ai, alchemy, chaotic, creatures, bards, dungeons, evil, explosives, goblins, hunt, magical_creatures, monster_extermination, plot, porcelain_rank, princess].shuffle

addTagsToQuest(carl_quest_59_tags, carl_quest_59)

quest_59_likes = [jess, ingrid, goblin_slayer, rain]
addLikesToQuest(quest_59_likes, carl_quest_59)

# Carl quest 60 - Image

carl_quest_60 = Quest.create(title: "Some notes on The Iron Tangle", text: "Carl: Here are some quick notes on what we've learned about The Iron Tangle. Also be on the lookout for fairies in the engine rooms; they can be helpful. Also, Gods and Goddesses are starting to be summoned. If you see any of those, just run.", quest_type: "image", user_id: carl.id)

quest_60_image_1 = File.open('app/assets/adventr_seeder_images/quest_images/quest_60/iron_tangle.jpg')
carl_quest_60.images.attach(io: quest_60_image_1, filename: 'iron_tangle.jpg')

carl_quest_60_tags = [anarchy, books, conjuration, creatures, dungeons, exploration, gods, goddesses, humans, magic, magical_creatures, monster_nest, monster_extermination, outer_planes, protection, rescue_mission, scholars, trolls, undead].shuffle

addTagsToQuest(carl_quest_60_tags, carl_quest_60)

quest_60_likes = [kmsvr, goblin_slayer, rain, catherine]
addLikesToQuest(quest_60_likes, carl_quest_60)

# Carl quest 61 - Quote

carl_quest_61 = Quest.create(title: "Can't go into detail here. I'll update if I survive this. My party member got that Color Spray spell that I remember from D&D, but it's basically useless here. It's just a light show that does no damage and hangs around for too long. There seems to be some solidness to the colors, because you can trap them.\nI figured out that if I can grab some of the colors, I can mix them in a flash bang. It's not a great weapon, but it's really useful against any mob with sensitive eyesight.\nIf you know someone with the spell, stock up on several of this kind of bomb for Floor 8. If you make something called... [Carkin Jazz Bombnanza]... you did it right. I didn't pick the name.", text: "Cark, 17th holder of the Anarchist's Cookbook", quest_type: "quote", user_id: carl.id)

carl_quest_61_tags = [ai, anarchy, chaotic, dungeons, enchantment, explosives, illusion, magic, magic_items, monster_extermination, sorcery, spellcasting, transmutation].shuffle

addTagsToQuest(carl_quest_61_tags, carl_quest_61)

quest_61_likes = [hero, matt, kmsvr, goblin_slayer, rain, catherine]
addLikesToQuest(quest_61_likes, carl_quest_61)

# Carl quest 62 - Video

carl_quest_62 = Quest.create(title: "HERE ARE SOME TIPS IF ANYONE WANTS TO HOLD A CAT SHOW", text: "Donut: I KNOW WE'VE GOT A LOT GOING ON TRYING TO SURVIVE, BUT I THINK WE SHOULD HOLD A CAT SHOW. IT WOULD HELP TAKE EVERYONE'S MIND OFF THINGS FOR A BIT. YES IT WOULD, CARL. PLUS, MISS BEATRICE MIGHT SEE THE SHOW AND BE ABLE TO FIND US. IT'S LIKE THAT TIME SHE SAW YOU ON TV IN A CITY A FEW HOURS AWAY SO SHE TOLD HER YOGA INSTRUCTOR BRAD HE COULD STAY LONGER.\n\nI WON'T PARTICIPATE SO THAT OTHERS CAN HAVE A CHANCE TO WIN. THE AI CAN BE THE ANNOUNCER. NO DOGS OR GOATS ALLOWED.", quest_type: "video", user_id: carl.id)

quest_62_video_1 = File.open('app/assets/adventr_seeder_images/quest_videos/cat_show.mp4')
carl_quest_62.images.attach(io: quest_62_video_1, filename: 'cat_show.mp4')

carl_quest_62_tags = [ai, beasts,gods, goddesses, gold, gold_rank, lawful, princess, spies].shuffle

addTagsToQuest(carl_quest_62_tags, carl_quest_62)

quest_62_likes = [kmsvr, catherine]
addLikesToQuest(quest_62_likes, carl_quest_62)

# Carl quest 63 - Audio

carl_quest_63 = Quest.create(title: "I figured out how to code some of the songs to specific explosives/tools", text: "Carl: I finally figured out how to map specific songs to specific explosives/tools/contraptions. I still don't know how to select the pool of songs though. Here are two that I'm using right now. If you hear Rainbow in the Dark, run away. That's a grab bag of different dangerous effects depending on the mobs I know of in the area. If you hear I Believe In A Thing Called Love, make your way towards it. I'm just using that as a meet up point with a defensible position.", quest_type: "audio", user_id: carl.id)

quest_63_audio_1 = File.open('app/assets/adventr_seeder_images/quest_audio/rainbow_in_the_dark.mp3')
carl_quest_63.images.attach(io: quest_63_audio_1, filename: 'rainbow_in_the_dark.mp3')

quest_63_audio_2 = File.open('app/assets/adventr_seeder_images/quest_audio/i_believe_in_a_thing_called_love.mp3')
carl_quest_63.images.attach(io: quest_63_audio_2, filename: 'i_believe_in_a_thing_called_love.mp3')

carl_quest_63_tags = [acid, alchemy, anarchy, chaotic, bards, creatures, dungeons, earth, explosives, fire, ice, lightning, magic, magic_items, monster_extermination, plot, transmutation].shuffle

addTagsToQuest(carl_quest_63_tags, carl_quest_63)

quest_63_likes = [hero, kmsvr, goblin_slayer, rain, catherine]
addLikesToQuest(quest_63_likes, carl_quest_63)

# Catherine quests
# Catherine quest 64 - Text

catherine_quest_64 = Quest.create(title: "Join the Army of Callow", text: "The time has come. An ancient evil has always been at our doorstep for longer than we care to remember, but now it encroaches on our land. The time for apathy or delusion is over.\n\nThe Grand Alliance has formed because we have no other choice. We need brave men and women like yourself to drive the undead hordes back. Make no mistake, looking the other way will not save your families. It is only together that we have any hope of finally putting down the enemy once and for all. Join the Army of Callow today and save our future.", quest_type: "text", user_id: catherine.id)

catherine_quest_64_tags = [ancients, army, contracts, cultists, dark_lord, demon_army, demons, devils, diamond_rank, evil, evil_overlords, fallen_kingdom, lich, political_intrigue, queen, sorcerers, sorcery, spies, undead, necromancy].shuffle

addTagsToQuest(catherine_quest_64_tags, catherine_quest_64)

quest_64_likes = [hero, terriblis]
addLikesToQuest(quest_64_likes, catherine_quest_64)

# Catherine quest 65 - Image

catherine_quest_65 = Quest.create(title: "Looking for a band of five to retrieve something lost by Kairos, the Named", text: "Prefered make up will combine Heroes and Villains. We don't have time to squabble right now.\n\nWe seek Kairos' old scepter. By all accounts it is ridiculously gaudy, so it shouldn't be hard to spot. You will be given a container within which to transport the item once you've found it. You'll also receive tools with which to handle the item and instructions for how to do so. Your band must contain a caster well versed in Trismegistan sorceries.\n\nYou will be paid well for undertaking this mission.", quest_type: "image", user_id: catherine.id)

quest_65_image_1 = File.open('app/assets/adventr_seeder_images/quest_images/quest_65/scepter.png')
catherine_quest_65.images.attach(io: quest_65_image_1, filename: 'scepter.png')

catherine_quest_65_tags = [adventure, alchemists, hero_tag, artificers, artifacts, assassins, barbarians, bards, clerics, gold_rank, druids, evil, fighters, gods, goddesses, good, magic_items, monks, paladins, plot, rangers, rogues, scholars, sorcerers, arcane_focus, warriors, warlocks, wizards, spies].shuffle

addTagsToQuest(catherine_quest_65_tags, catherine_quest_65)

quest_65_likes = [hero, terriblis]
addLikesToQuest(quest_65_likes, catherine_quest_65)

# Catherine quest 66 - Image

catherine_quest_66 = Quest.create(title: "The Court of Summer", text: "Best left alone. Beware their fire and other aspects. If you can, run at the sight of them. If you cannot, splash water directly in their eyes should you get the chance. It won't accomplish anything, but I'd thank you for the mental image.", quest_type: "image", user_id: catherine.id)

quest_66_image_1 = File.open('app/assets/adventr_seeder_images/quest_images/quest_66/summer_fey_1.jpeg')
catherine_quest_66.images.attach(io: quest_66_image_1, filename: 'summer_fey_1.jpeg')

quest_66_image_2 = File.open('app/assets/adventr_seeder_images/quest_images/quest_66/summer_fey_2.jpeg')
catherine_quest_66.images.attach(io: quest_66_image_2, filename: 'summer_fey_2.jpeg')

catherine_quest_66_tags = [ancients, elves, fey, fire, hunt, illusion, lawful, magical_creatures, plot, spellcasting, wilderness, unseelie_court].shuffle

addTagsToQuest(catherine_quest_66_tags, catherine_quest_66)

quest_66_likes = [hero, matt, jess, ingrid, kmsvr, rain, carl]
addLikesToQuest(quest_66_likes, catherine_quest_66)

# Catherine quest 67 - Image

catherine_quest_67 = Quest.create(title: "The Ancient Evil is at our doorstep. Will you cower or fight?", text: "These will be sparse notes on the Dead King.\nFirst off, the Villain himself. Whatever outlandish stories you've heard of his power, they are true. He holds dominion over vast armies of the undead. He controlls myriad demons and devils. His personal magicks are varied and powerful. If you set eyes on him, you will likely die soonafter.\nNext, two common enemies. The first are bone wurms, those undead vessels within which the Undead King transports his soldiers. Not much can be done to penetrate their defenses. Overwhelming force is the key here.\nNext we have the Revenants. Their power varies as it is tied to who they were when they were alive. The only constant is that they are far and above the standard skeleton you face. Be wary and rely on your comrades against them.", quest_type: "image", user_id: catherine.id)

quest_67_image_1 = File.open('app/assets/adventr_seeder_images/quest_images/quest_67/the_dead_king.jpg')
catherine_quest_67.images.attach(io: quest_67_image_1, filename: 'the_dead_king.jpg')

quest_67_image_2 = File.open('app/assets/adventr_seeder_images/quest_images/quest_67/bone_wurm.jpg')
catherine_quest_67.images.attach(io: quest_67_image_2, filename: 'bone_wurm.jpg')
quest_67_image_3 = File.open('app/assets/adventr_seeder_images/quest_images/quest_67/revenant.jpeg')
catherine_quest_67.images.attach(io: quest_67_image_3, filename: 'revenant.jpeg')

catherine_quest_67_tags = [ancients, army, blood_magic, dark_lord, demon_army, demons, devils, drakes, evil, evil_overlords, fallen_kingdom, grimoires, lich,magical_creatures, necromancy, power, spies, undead, warlocks, wurms].shuffle

addTagsToQuest(catherine_quest_67_tags, catherine_quest_67)

quest_67_likes = [hero, terriblis, rain, carl]
addLikesToQuest(quest_67_likes, catherine_quest_67)

# Catherine quest 68 - Quote

catherine_quest_68 = Quest.create(title: "We should never forget that for a great evil to be defeated, a lesser evil must first become great.", text: "Eleanor Fairfax, founder of the Fairfax dynasty", quest_type: "quote", user_id: catherine.id)

catherine_quest_68_tags = [books, dark_lord, evil, evil_overlords, fallen_kingdom, good, humans, kingdom, nobles, queen, the_watch, army].shuffle

addTagsToQuest(catherine_quest_68_tags, catherine_quest_68)

quest_68_likes = [hero, matt, jess, ingrid, kmsvr, goblin_slayer, rain, carl]
addLikesToQuest(quest_68_likes, catherine_quest_68)

# Catherine quest 69 - Video

catherine_quest_69 = Quest.create(title: "On demon summoning...", text: "Amusing, but Masego assures me quite emphatically that it has no roots in \"respectable\" circles dedicated to Trismegistan sorceries.", quest_type: "video", user_id: catherine.id)

quest_69_video_1 = File.open('app/assets/adventr_seeder_images/quest_videos/summoning_demons.mp4')
catherine_quest_69.images.attach(io: quest_69_video_1, filename: 'summoning_demons.mp4')

catherine_quest_69_tags = [angels, blood_magic, blood_oath, conjuration, creatures, demon_army, demons, devils, evil, magic, nobles, outer_planes, sorcerers, sorcery, squire, tomes, warlocks, wizards].shuffle

addTagsToQuest(catherine_quest_69_tags, catherine_quest_69)

quest_69_likes = [terriblis, matt, carl]
addLikesToQuest(quest_69_likes, catherine_quest_69)

# Catherine quest 70 - Audio

catherine_quest_70 = Quest.create(title: "I've heard this song fairly often recently", text: "I'm sure I'm not the only one.", quest_type: "audio", user_id: catherine.id)

quest_70_audio_1 = File.open('app/assets/adventr_seeder_images/quest_audio/the_girl_who_climbed_the_tower.mp3')
catherine_quest_70.images.attach(io: quest_70_audio_1, filename: 'the_girl_who_climbed_the_tower.mp3')

catherine_quest_70_tags = [aristocrats, army, dark_lord, divination, evil, evil_overlords, fallen_kingdom, goddesses, kingdom, magic, nobles, political_intrigue, power, queen, spies, squire].shuffle

addTagsToQuest(catherine_quest_70_tags, catherine_quest_70)

quest_70_likes = [terriblis, jess, ingrid, kmsvr]
addLikesToQuest(quest_70_likes, catherine_quest_70)

# --------------------------------Quests End-----------------------------------

# Reblogs Section

# Follows Section
def addFollowsToUser(follows, user)
  follows.each do |follow|
    user.follows << follow
  end
end

# # Hero Follows
# hero_follows = []
# addFollowsToUser(hero_follows, hero)
# # Terriblis Follows
# terriblis_follows = []
# addFollowsToUser(terriblis_follows, terriblis)
# # Matt Follows
# matt_follows = []
# addFollowsToUser(matt_follows, matt)
# # Jess Follows
# jess_follows = []
# addFollowsToUser(jess_follows, jess)
# # Ingrid Follows
# ingrid_follows = []
# addFollowsToUser(ingrid_follows, ingrid)
# # Kmsvr Follows
# kmsvr_follows = []
# addFollowsToUser(kmsvr_follows, kmsvr)
# # Goblin Slayer Follows
# goblin_slayer_follows = []
# addFollowsToUser(goblin_slayer_follows, goblin_slayer)
# # Rain Follows
# rain_follows = []
# addFollowsToUser(rain_follows, rain)
# # Carl Follows
# carl_follows = []
# addFollowsToUser(carl_follows, carl)
# # Catherine Follows
# catherine_follows = []
# addFollowsToUser(catherine_follows, catherine)






# Notes for later:

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