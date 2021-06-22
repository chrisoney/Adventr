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
spies = Tag.create(tag_name: 'spies')
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

catherine_tags = [undead, angels, army, orcs, goblins, kingdom, magic, gods, evil, fallen_kingdom, squire, staffs, queen, unseelie_court]
for tag in catherine_tags
  catherine.tags << tag
end


# Code for putting in quest tags with order
# temp_array = [good, sorcerers]
# temp_array.each_with_index do |tag, idx|
#   TagJoin.create(taggable: catherine, tag: tag, order: idx + 1)
# end

# New quests for hero
# Hero quest 1 - Text
hero_quest_1 = Quest.create(title: "So I've got this [Hero] class...", text: "I'm not sure what I'm supposed to be doing. I level really quickly but since my Guild apparently doesn't make exceptions, I'm stuck killing rats in sewers like the other Porcelains. Does anybody know of any loopholes to rise through the ranks quickly? I'm worried that I'll be fetching mushrooms from Kantai forest when the Demon Lord razes the capital.", quest_type: 'text', user_id: hero.id)

hero_quest_1_tags = [hero_tag, dark_lord, demon_army, outsider, monster_extermination, monster_nest, plot]

hero_quest_1_tags.each_with_index do |tag, idx|
  TagJoin.create(taggable: hero_quest_1, tag: tag, order: idx + 1)
end

# Hero quest 2 - Image
hero_quest_2 = Quest.create(title: "Has anyone seen a macguffin lying around?", text: "I think I'm supposed to be tracking down a low-level general in the demon army, but I'm struggling to figure out what I need to do to trigger the quest. I'm pretty sure I'm supposed to find a letter, but it's not in any of the lore/readable items I make my wizard cart around. Attached are pictures of other suspicious letters I've found that are probably somewhat similar.", quest_type: 'image', user_id: hero.id)

quest_2_image_1 = File.open('app/assets/adventr_seeder_images/quest_images/quest_2/mysterious_letter_1.png')
hero_quest_2.images.attach(io: quest_2_image_1, filename: 'mysterious_letter_1.png')
quest_2_image_2 = File.open('app/assets/adventr_seeder_images/quest_images/quest_2/mysterious_letter_2.png')
hero_quest_2.images.attach(io: quest_2_image_2, filename: 'mysterious_letter_2.png')

hero_quest_2_tags = [hero_tag, demon_army, plot, wizards, artifacts, books, contracts, mystery]

hero_quest_2_tags.each_with_index do |tag, idx|
  TagJoin.create(taggable: hero_quest_2, tag: tag, order: idx + 1)
end

# Hero quest 3 - Image
hero_quest_3 = Quest.create(title: "Found this grimoire. Anyone know how to destroy it?", text: "Apparently it's known as The Necronomicon. At first I planned on keeping or selling it, but I'm 95% sure it's bound in human skin. Also, it whispers things to me at night. Horrible things.\nSide note: If you're known as 'Old Man Henderson', there are some unimaginable horrors out to get you.", quest_type: 'image', user_id: hero.id)

quest_3_image_1 = File.open('app/assets/adventr_seeder_images/quest_images/quest_3/necronomicon.jpeg')
hero_quest_3.images.attach(io: quest_3_image_1, filename: 'necronomicon.jpeg')

hero_quest_3_tags = [books, acid, alchemists, alchemy, artifacts, blood_magic, chaotic, cultists, demons, devils, evil, fire, grimoires, magic_items, necromancy, tomes]

hero_quest_3_tags.each_with_index do |tag, idx|
  TagJoin.create(taggable: hero_quest_3, tag: tag, order: idx + 1)
end

# Hero quest 4 - Image
hero_quest_4 = Quest.create(title: "Looking for a smith to make me better pauldrons.", text: "I learned in my old world that bigger pauldrons make for a stronger, more intimidating warrior. For some reason, the only ones I've found so far in this land have been reasonably sized. Willing to spend about 10 gold on each, 15 if they can have different but complementary designs.", quest_type: "image", user_id: hero.id)

quest_4_image_1 = File.open('app/assets/adventr_seeder_images/quest_images/quest_4/pauldron_1.jpg')
hero_quest_4.images.attach(io: quest_4_image_1, filename: 'pauldron_1.jpg')

quest_4_image_2 = File.open('app/assets/adventr_seeder_images/quest_images/quest_4/pauldron_2.jpg')
hero_quest_4.images.attach(io: quest_4_image_2, filename: 'pauldron_2.jpg')

hero_quest_4_tags = [adamantine, artificers, blacksmithing, dwarves, gold, magic_items, merchants, mythic, mythril, platinum, power, protection]

hero_quest_4_tags.each_with_index do |tag, idx|
  TagJoin.create(taggable: hero_quest_4, tag: tag, order: idx + 1)
end

# Hero quest 5 - Quote
hero_quest_5 = Quest.create(title: "It's really exciting to get to be the main character of something.", text: "Noah Schnapp", quest_type: "quote", user_id: hero.id)

hero_quest_5_tags = [hero_tag, adventure, chaotic, good, guilds, legendary, paladins, plot]

hero_quest_5_tags.each_with_index do |tag, idx|
  TagJoin.create(taggable: hero_quest_5, tag: tag, order: idx + 1)
end

# Hero quest 6 - Video
hero_quest_6 = Quest.create(title: "Sometimes it really feels like this.", text: "", quest_type: "video", user_id: hero.id)

quest_6_video_1 = File.open('app/assets/adventr_seeder_images/quest_videos/everything_goes_wrong.mp4')
hero_quest_6.images.attach(io: quest_6_video_1, filename: 'everything_goes_wrong.mp4')

hero_quest_6_tags = [hero_tag, bandits, beasts, cave, commoners, contracts, divination, escort_quest, exploration, fetch, forests, humans, hunt, chaotic, magical_creatures, murder, mystery, neutral, outsider, plot, rescue_mission, the_watch, trolls, warriors, wilderness]

hero_quest_6_tags.each_with_index do |tag, idx|
  TagJoin.create(taggable: hero_quest_6, tag: tag, order: idx + 1)
end

# Hero quest 7 - Audio
hero_quest_7 = Quest.create(title: "Does anyone else hear this?", text: "Whenever I start fighting, I hear a song start playing. My teammates swear they don't hear it, and I'm not sure if I believe them. I had a bard recreate it as best as he could. Please let me know if you recognize it.", quest_type: 'audio', user_id: hero.id)

quest_7_audio = File.open('app/assets/adventr_seeder_images/quest_audio/final_fantasy_battle.mp3')
hero_quest_7.images.attach(io: quest_7_audio, filename: 'final_fantasy_battle.mp3')

hero_quest_7_tags = [bards, magic, monster_extermination, enchantment, fey]

hero_quest_7_tags.each_with_index do |tag, idx|
  TagJoin.create(taggable: hero_quest_7, tag: tag, order: idx + 1)
end

# Terriblis quests
# Terriblis quest 1 - Text

# Terriblis quest 2 - Image
# Terriblis quest 3 - Image
# Terriblis quest 4 - Image
# Terriblis quest 5 - Quote
terriblis_quest_5 = Quest.create(title: "Oh, I get it. The real treasure was the people I had executed along the way!", text: "Dread Emperor Irritant I, the Oddly Successful", quest_type: "quote", user_id: terriblis.id)

terriblis_quest_5_tags = [aristocrats, chaotic, dark_lord, evil, evil_overlords, lawful, murder, nobles, political_intrigue, power, spies]

terriblis_quest_5_tags.each_with_index do |tag, idx|
  TagJoin.create(taggable: terriblis_quest_5, tag: tag, order: idx + 1)
end
# Terriblis quest 6 - Video
# Terriblis quest 7 - Audio
# Matt quests
# Matt quest 1 - Text
# Matt quest 2 - Image
# Matt quest 3 - Image
# Matt quest 4 - Image
# Matt quest 5 - Quote
# Matt quest 6 - Video
# Matt quest 7 - Audio
# Jess quests
# Jess quest 1 - Text
# Jess quest 2 - Image
# Jess quest 3 - Image
# Jess quest 4 - Image
# Jess quest 5 - Quote
# Jess quest 6 - Video
# Jess quest 7 - Audio
# Ingrid quests
# Ingrid quest 1 - Text
# Ingrid quest 2 - Image
# Ingrid quest 3 - Image
# Ingrid quest 4 - Image
# Ingrid quest 5 - Quote
# Ingrid quest 6 - Video
# Ingrid quest 7 - Audio
# Kmsvr quests
# Kmsvr quest 1 - Text
# Kmsvr quest 2 - Image
# Kmsvr quest 3 - Image
# Kmsvr quest 4 - Image
# Kmsvr quest 5 - Quote
# Kmsvr quest 6 - Video
# Kmsvr quest 7 - Audio
# Goblin Slayer quests
# Goblin Slayer quest 1 - Text
# Goblin Slayer quest 2 - Image
# Goblin Slayer quest 3 - Image
# Goblin Slayer quest 4 - Image
# Goblin Slayer quest 5 - Quote
# Goblin Slayer quest 6 - Video
# Goblin Slayer quest 7 - Audio
# Rain quests
# Rain quest 1 - Text
# Rain quest 2 - Image
# Rain quest 3 - Image
# Rain quest 4 - Image
# Rain quest 5 - Quote
# Rain quest 6 - Video
# Rain quest 7 - Audio
# Carl quests
# Carl quest 1 - Text
# Carl quest 2 - Image
# Carl quest 3 - Image
# Carl quest 4 - Image
# Carl quest 5 - Quote
# Carl quest 6 - Video
# Carl quest 7 - Audio
# Catherine quests
# Catherine quest 1 - Text
# Catherine quest 2 - Image
# Catherine quest 3 - Image
# Catherine quest 4 - Image
# Catherine quest 5 - Quote
# Catherine quest 6 - Video
# Catherine quest 7 - Audio



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