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

# Method for adding an array of tags to a quest
def addTagsToQuest(tags, quest)
  tags.each_with_index do |tag, idx|
    TagJoin.create(taggable: quest, tag: tag, order: idx + 1)
  end
end

# New quests for hero
# Hero quest 1 - Text
hero_quest_1 = Quest.create(title: "So I've got this [Hero] class...", text: "I'm not sure what I'm supposed to be doing. I level really quickly but since my Guild apparently doesn't make exceptions, I'm stuck killing rats in sewers like the other Porcelains. Does anybody know of any loopholes to rise through the ranks quickly? I'm worried that I'll be fetching mushrooms from Kantai forest when the Demon Lord razes the capital.", quest_type: 'text', user_id: hero.id)

hero_quest_1_tags = [hero_tag, dark_lord, demon_army, outsider, monster_extermination, monster_nest, plot]

addTagsToQuest(hero_quest_1_tags, hero_quest_1)

# Hero quest 2 - Image
hero_quest_2 = Quest.create(title: "Has anyone seen a macguffin lying around?", text: "I think I'm supposed to be tracking down a low-level general in the demon army, but I'm struggling to figure out what I need to do to trigger the quest. I'm pretty sure I'm supposed to find a letter, but it's not in any of the lore/readable items I make my wizard cart around. Attached are pictures of other suspicious letters I've found that are probably somewhat similar.", quest_type: 'image', user_id: hero.id)

quest_2_image_1 = File.open('app/assets/adventr_seeder_images/quest_images/quest_2/mysterious_letter_1.png')
hero_quest_2.images.attach(io: quest_2_image_1, filename: 'mysterious_letter_1.png')
quest_2_image_2 = File.open('app/assets/adventr_seeder_images/quest_images/quest_2/mysterious_letter_2.png')
hero_quest_2.images.attach(io: quest_2_image_2, filename: 'mysterious_letter_2.png')

hero_quest_2_tags = [hero_tag, demon_army, plot, wizards, artifacts, books, contracts, mystery]

addTagsToQuest(hero_quest_2_tags, hero_quest_2)

# Hero quest 3 - Image
hero_quest_3 = Quest.create(title: "Found this grimoire. Anyone know how to destroy it?", text: "Apparently it's known as The Necronomicon. At first I planned on keeping or selling it, but I'm 95% sure it's bound in human skin. Also, it whispers things to me at night. Horrible things.\nSide note: If you're known as 'Old Man Henderson', there are some unimaginable horrors out to get you.", quest_type: 'image', user_id: hero.id)

quest_3_image_1 = File.open('app/assets/adventr_seeder_images/quest_images/quest_3/necronomicon.jpeg')
hero_quest_3.images.attach(io: quest_3_image_1, filename: 'necronomicon.jpeg')

hero_quest_3_tags = [books, acid, alchemists, alchemy, artifacts, blood_magic, chaotic, cultists, demons, devils, evil, fire, grimoires, magic_items, necromancy, tomes]

addTagsToQuest(hero_quest_3_tags, hero_quest_3)

# Hero quest 4 - Image
hero_quest_4 = Quest.create(title: "Looking for a smith to make me better pauldrons.", text: "I learned in my old world that bigger pauldrons make for a stronger, more intimidating warrior. For some reason, the only ones I've found so far in this land have been reasonably sized. Willing to spend about 10 gold on each, 15 if they can have different but complementary designs.", quest_type: "image", user_id: hero.id)

quest_4_image_1 = File.open('app/assets/adventr_seeder_images/quest_images/quest_4/pauldron_1.jpg')
hero_quest_4.images.attach(io: quest_4_image_1, filename: 'pauldron_1.jpg')

quest_4_image_2 = File.open('app/assets/adventr_seeder_images/quest_images/quest_4/pauldron_2.jpg')
hero_quest_4.images.attach(io: quest_4_image_2, filename: 'pauldron_2.jpg')

hero_quest_4_tags = [adamantine, artificers, blacksmithing, dwarves, gold, magic_items, merchants, mythic, mythril, platinum, power, protection]

addTagsToQuest(hero_quest_4_tags, hero_quest_4)

# Hero quest 5 - Quote
hero_quest_5 = Quest.create(title: "It's really exciting to get to be the main character of something.", text: "Noah Schnapp", quest_type: "quote", user_id: hero.id)

hero_quest_5_tags = [hero_tag, adventure, chaotic, good, guilds, legendary, paladins, plot]

addTagsToQuest(hero_quest_5_tags, hero_quest_5)

# Hero quest 6 - Video
hero_quest_6 = Quest.create(title: "Sometimes it really feels like this.", text: "", quest_type: "video", user_id: hero.id)

quest_6_video_1 = File.open('app/assets/adventr_seeder_images/quest_videos/everything_goes_wrong.mp4')
hero_quest_6.images.attach(io: quest_6_video_1, filename: 'everything_goes_wrong.mp4')

hero_quest_6_tags = [hero_tag, bandits, beasts, cave, commoners, contracts, divination, escort_quest, exploration, fetch, forests, humans, hunt, chaotic, magical_creatures, murder, mystery, neutral, outsider, plot, rescue_mission, the_watch, trolls, warriors, wilderness]

addTagsToQuest(hero_quest_6_tags, hero_quest_6)

# Hero quest 7 - Audio
hero_quest_7 = Quest.create(title: "Does anyone else hear this?", text: "Whenever I start fighting, I hear a song start playing. My teammates swear they don't hear it, and I'm not sure if I believe them. I had a bard recreate it as best as he could. Please let me know if you recognize it.", quest_type: 'audio', user_id: hero.id)

quest_7_audio = File.open('app/assets/adventr_seeder_images/quest_audio/final_fantasy_battle.mp3')
hero_quest_7.images.attach(io: quest_7_audio, filename: 'final_fantasy_battle.mp3')

hero_quest_7_tags = [bards, magic, monster_extermination, enchantment, fey]

addTagsToQuest(hero_quest_7_tags, hero_quest_7)

# Terriblis quests
# Terriblis quest 1 - Text
terriblis_quest_8 = Quest.create(title: "Please stop killing my skeletons.", text: "I know they're easy experience. I know the sound of their bones jumbling around is annoying. But please stop killing them. \n You would not believe how long it takes to raise 10 skeletons. Don't even get me started on the material cost, since I go through legal channels. \n \n And to the person that seems to target my [Awakened Skeleton Knight] exclusively, there will be no mercy for you. You have sunk entire fortunes with your murder hobo antics. I know for a fact it never initiated a fight, because I only taught it to love. Your days are numbered.", quest_type: "text", user_id: terriblis.id)

terriblis_quest_8_tags = [barbarians, blood_magic, blood_oath, clerics, evil_overlords, fallen_kingdom, lawful, lich, murder, necromancy, paladins, scholars, spell_components, spellcasting, undead, warlocks]

addTagsToQuest(terriblis_quest_8_tags, terriblis_quest_8)

# Terriblis quest 2 - Image
terriblis_quest_9 = Quest.create(title: "Looking for spellcasters to test my new offal dragon golem", text: "I have finally achieved my dream of creating a dragon golem from offal. It is glory incarnate. I am looking for a variety of mages to test their spells against my creation. It should be a rewarding experience for everyone involved, though you will also be compensated with gold and enough crystal wash to eliminate the smell of being in the same room as an offal dragon for several hours.", quest_type: "image", user_id: terriblis.id)

quest_9_image_1 = File.open('app/assets/adventr_seeder_images/quest_images/quest_9/meat_dragon.png')
terriblis_quest_9.images.attach(io: quest_9_image_1, filename: 'meat_dragon.png')

terriblis_quest_9_tags = [abjuration, acid, alchemy, bards, blood_magic, conjuration, dragons, familiars, fire, ice, lightning, magical_creatures, necromancy, sorcerers, sorcery, transmutation, undead, warlocks, wizards, wurms]

addTagsToQuest(terriblis_quest_9_tags, terriblis_quest_9)


# Terriblis quest 10 - Image
terriblis_quest_10 = Quest.create(title: "Shoggoth infestation", text: "I spilled something perfectly legal to possess and now my castle is full of Shoggoths. They don't do much besides eat valuable artifacts and whisper secrets from a place I've never heard of in the voice of my second nemesis. I want them gone immediately.", quest_type: "image", user_id: terriblis.id)

quest_10_image_1 = File.open('app/assets/adventr_seeder_images/quest_images/quest_10/shoggoth_1.jpeg')
terriblis_quest_10.images.attach(io: quest_10_image_1, filename: 'shoggoth_1.jpeg')
quest_10_image_2 = File.open('app/assets/adventr_seeder_images/quest_images/quest_10/shoggoth_2.jpg')
terriblis_quest_10.images.attach(io: quest_10_image_2, filename: 'shoggoth_2.jpg')
quest_10_image_3 = File.open('app/assets/adventr_seeder_images/quest_images/quest_10/shoggoth_3.png')
terriblis_quest_10.images.attach(io: quest_10_image_3, filename: 'shoggoth_3.png')

terriblis_quest_10_tags = [ancients, beasts, chaotic, creatures, evil, magical_creatures, monster_extermination, monster_nest, outer_planes]

addTagsToQuest(terriblis_quest_10_tags, terriblis_quest_10)

# Terriblis quest 11 - Image

terriblis_quest_11 = Quest.create(title: "Looking to hire an assassin. Must be Platinum Rank or higher", text: "As a disclaimer, your target is still low level. This is a real request. Payment and dossier on the victim will be provided upon acceptance of the quest. I cannot say their name here, but their title rhymes with [Zero].", quest_type: "image", user_id: terriblis.id)

quest_11_image_1 = File.open('app/assets/adventr_seeder_images/quest_images/quest_11/assassination_target.jpg')
terriblis_quest_11.images.attach(io: quest_11_image_1, filename: 'assassination_target.jpg')

terriblis_quest_11_tags = [assassins, bandits, blood_oath, contracts, hero_tag, murder, political_intrigue, rogues, spies]

addTagsToQuest(terriblis_quest_11_tags, terriblis_quest_11)

# Terriblis quest 12 - Quote
terriblis_quest_12 = Quest.create(title: "Oh, I get it. The real treasure was the people I had executed along the way!", text: "Dread Emperor Irritant I, the Oddly Successful", quest_type: "quote", user_id: terriblis.id)

terriblis_quest_12_tags = [aristocrats, chaotic, dark_lord, evil, evil_overlords, lawful, murder, nobles, political_intrigue, power, spies]

addTagsToQuest(terriblis_quest_12_tags, terriblis_quest_12)

# Terriblis quest 13 - Video
terriblis_quest_13 = Quest.create(title: "There may be similarities...", text: "", quest_type: "video", user_id: terriblis.id)

quest_13_video = File.open('app/assets/adventr_seeder_images/quest_videos/prozd_villain.mp4')
terriblis_quest_11.images.attach(io: quest_13_video, filename: 'prozd_villain.mp4')

terriblis_quest_13_tags = [aristocrats, bards, dark_lord, evil, evil_overlords, hero_tag, mystery, nobles, plot]

addTagsToQuest(terriblis_quest_13_tags, terriblis_quest_13)

# Terriblis quest 14 - Audio
terriblis_quest_14 = Quest.create(title: "An excellent song by a rather odd bard.", text: "I have not had the pleasure of meeting this bard in person, mind you. I was sold this song crystal and thought it a scam due to the price. Only after slaughtering the merchant caravan in its entirety did I test the product and find its music most agreeable. I hope to \"recruit\" the bard himself one day.", quest_type: "audio", user_id: terriblis.id)

quest_14_audio = File.open('app/assets/adventr_seeder_images/quest_audio/witch_drums.mp3')
terriblis_quest_14.images.attach(io: quest_14_audio, filename: 'witch_drums.mp3')

terriblis_quest_14_tags = [bards, caravans, magic_items, merchants, sorcery, wizards]

addTagsToQuest(terriblis_quest_14_tags, terriblis_quest_14)

# Matt quests
# Matt quest 15 - Text

matt_quest_15 = Quest.create(title: "Hello from Spellcaster Apprentices!", text: "Guilds are sprouting up every single day to help adventurers live happier, wealthier lives. Out with the old, in with the new. Innovation is all around us, and new teams are formed to help us maximize treasure haul and increase leveling speed.\n\nBut in a world where one wrong step can result in a lightningbolt to the face and literal dragons are breathing fire down our necks, there's too little accountability. Guilds incentivize adventurers to make false promises, pay town cries and bards to tell fake stories about them, all while not backing up their teams with support they can rely on. It's bulette shite.\n\nSpellcaster Apprentices was born to bring transparency to the our heroes' journeys - or the heroes themselves - specifically around spell matrices that help you maximize your power and potential rewards. We'll also help you weed through the BS quests, and highlight the ones worth the attention.", quest_type: "text", user_id: matt.id)

matt_quest_15_tags = [abjuration, academy, adventure, artificers, bards, books, bronze_rank, clerics, commoners, contracts, conjuration, diamond_rank, divination, druids, dynamos, elves, enchantment, evocation, exploration, gold_rank, guilds, illusion, magic, magic_items, necromany, neutral, obsidian_rank, paladins, platinum_rank, porcelain_rank, power, protection, scholars, silver_rank, sorcerers, steel_rank, tomes, transmutation, warlocks, wizards]

addTagsToQuest(matt_quest_15_tags, matt_quest_15)

# Matt quest 16 - Image
matt_quest_16 = Quest.create(title: "Having trouble with a \"Loot Dispute\"?", text: "Divying up the spoils of a successful quest can be tough, especially when your party members have... conflicting personalities. There's no reason to take on all of that stress yourself, though! Our mediators have experience in coming to agreements that are beneficial for everyone, or making the tough decisions for the sake of party integrity. Schedule an appointment at one of our branch offices and have your Loot Dispute settled amicably - or at least bloodlessly - today!", quest_type: "image", user_id: matt.id)

quest_16_image_1 = File.open('app/assets/adventr_seeder_images/quest_images/quest_16/magic_item_tug_of_war.png')
matt_quest_16.images.attach(io: quest_16_image_1, filename: 'magic_item_tug_of_war.png')

matt_quest_16_tags = [adamantine, arcane_focus, artifacts, axes, books, bows, daggers, dungeons, enchantment, grimoires, hammers, legendary, magic_items, merchants, mythic, mythril, platinum, polearms, silver, gold, spell_components, spellbooks, staffs, swords, tomes]

addTagsToQuest(matt_quest_16_tags, matt_quest_16)

# Matt quest 17 - Image

matt_quest_17 = Quest.create(title: "Are you having issues preparing for battle?", text: "As time goes on and true battle is seen, many warriors begin to find donning their armor and dashing into the fray more difficult. Whether it be mental, emotional, or physical, it is no fault of their own. The lifestyle of  an adventurer can wear on you. Luckily, our guild has discovered a solution. A team of Alchemists from Soleil have developed a potion from the liver of certain species of non-sentient fey that can be used to give you back that warrior's spirit! Our own members of different ranks have thoroughly tested the effects and found them safe - though not for our foes! Inquire with any of our adventurers or staff for a 1-part-in-10 discount!", quest_type: "image", user_id: matt.id)

quest_17_image_1 = File.open('app/assets/adventr_seeder_images/quest_images/quest_17/potion.png')
matt_quest_17.images.attach(io: quest_17_image_1, filename: 'potion.png')

quest_17_image_2 = File.open('app/assets/adventr_seeder_images/quest_images/quest_17/berserker.png')
matt_quest_17.images.attach(io: quest_17_image_2, filename: 'berserker.png')

matt_quest_17_tags = [alchemists, alchemy, army, barbarians, blood_magic, chaotic, explosives, fighters, lawful, magic, merchants, power, transmutation, warriors]

addTagsToQuest(matt_quest_17_tags, matt_quest_17)

# Matt quest 18 - Image

matt_quest_18 = Quest.create(title: "Staffs or wands? Which do you want to wield in the heat of battle?", text: "After extensive research into the strengths and weaknesses of both, we give the edge to staffs. They're heavier and often less wieldy, but you can't argue with the resilience or power that they offer. Luckily, we have enchanters in our employ that can convert any wand lower than the Very Rare grade to a staff of even greater quality! Inquire at any of our offices for a price quote and estimated end result.", quest_type: "image", user_id: matt.id)

quest_18_image_1 = File.open('app/assets/adventr_seeder_images/quest_images/quest_18/staffs.png')
matt_quest_18.images.attach(io: quest_18_image_1, filename: 'staffs.png')

quest_18_image_2 = File.open('app/assets/adventr_seeder_images/quest_images/quest_18/wands.png')
matt_quest_18.images.attach(io: quest_18_image_2, filename: 'wands.png')

matt_quest_18_tags = [academy, arcane_focus, artifacts, artificers, bards, clerics, common, enchantment, magic_items, merchants, necromancy, power, rare, sorcerers, spellcasting, staffs, warlock, wizards, druids]

addTagsToQuest(matt_quest_18_tags, matt_quest_18)

# Matt quest 19 - Quote

matt_quest_19 = Quest.create(title: "You have power over your mind - not outside events. Unless someone has mind magic; then you have power over nothing.", text: "Marcus the Aeromancer", quest_type: "quote", user_id: matt.id)

matt_quest_19_tags = [academy, books, divination, magic, magic_items, magical_creatures, merchants, nobles, power, protection, sorcery, spellcasting, unseelie_court, fey, vampires]

addTagsToQuest(matt_quest_19_tags, matt_quest_19)


# Matt quest 20 - Video

matt_quest_20 = Quest.create(title: "Some of our members show off their magic.", text: "", quest_type: "video", user_id: matt.id)

quest_20_video_1 = File.open('app/assets/adventr_seeder_images/quest_videos/lightning_bolt.mp4')
matt_quest_20.images.attach(io: quest_20_video_1, filename: 'lightning_bolt.mp4')

quest_20_video_2 = File.open('app/assets/adventr_seeder_images/quest_videos/bean_wizard.mp4')
matt_quest_20.images.attach(io: quest_20_video_2, filename: 'bean_wizard.mp4')

matt_quest_20_tags = [academy, anarchy, bronze_rank, chaotic, beasts, creatures, forests, lightning, magic, spellcasting, staffs, wizards]

addTagsToQuest(matt_quest_20_tags, matt_quest_20)

# Matt quest 21 - Audio

matt_quest_21 = Quest.create(title: "A breakout hit by a band of bards", text: "Spellcaster Apprentices is a firm supporter of the arts, especially those related to spellcasting!", quest_type: "audio", user_id: matt.id)

quest_21_audio = File.open('app/assets/adventr_seeder_images/quest_audio/do_you_believe_in_magic.mp3')
matt_quest_21.images.attach(io: quest_21_audio, filename: 'do_you_believe_in_magic.mp3')

matt_quest_21_tags = [abjuration, artificers, bards, blood_magic, clerics, conjuration, divination, druids, dynamos, enchantment, evocation, familiars, illusion, magic, necromancy, paladins, sorcerers, spellcasting, transmutation, wizards]

addTagsToQuest(matt_quest_21_tags, matt_quest_21)

# Jess quests
# Jess quest 22 - Text

jess_quest_22 = Quest.create(title: "Looking for a new member for our party.", text: "We're a group of mostly rogues, rangers, and druids, though we're open to most other classes. Our general choice in quest leans towards hunting for supplies for alchemists/smaller settlements, tracking down and potentially eliminating bandits, or maintenance of the natural balance of wild areas. You must have the following characterstics to apply:\nA love and respect of nature,\nA standard bronze ranking in the generalistic system\nExperience working with a team of any size above and including 3 three members\nA willingness to learn and share your own knowledge\n100+ years of senior developer experience\n\nWe look foward to hearing from all applicants!", quest_type: "text", user_id: jess.id)

jess_quest_22_tags = [adventure, alchemy, bandits, beasts, creatures, bows, caravans, cave, commoners, dire_wolves, druids, dungeons, elves, earth, escort_quest, exploration, goblins, goblin_champions, good, hunt, lawful, magical_creatures, monster_extermination, monster_nest, neutral, mountains, pseudodragons, rangers, rescue_mission, rogues, spell_components, the_watch, undead, wilderness, wind]

addTagsToQuest(jess_quest_22_tags, jess_quest_22)

# Jess quest 23 - Image

jess_quest_23 = Quest.create(title: "Goblin King sighting. Requesting collaboration.", text: "We have confirmed a sighting of the [Goblin King] near Restmos. Our group is not capable of besting it on our own, but can provide support to a group with frontliners. Inquire around Restmos or at the Adventurer's Guild branch in Atsu. Only accepting parties of Gold Rank or above", quest_type: "image", user_id: jess.id)

quest_23_image_1 = File.open('app/assets/adventr_seeder_images/quest_images/quest_23/goblin_king.jpg')
jess_quest_23.images.attach(io: quest_23_image_1, filename: 'goblin_king.jpg')

quest_23_image_2 = File.open('app/assets/adventr_seeder_images/quest_images/quest_23/goblin_king_2.jpg')
jess_quest_23.images.attach(io: quest_23_image_2, filename: 'goblin_king_2.jpg')

jess_quest_23_tags = [creatures, diamond_rank, evil, goblins, goblin_champions, goblin_lords, goblin_kings, gold_rank, guilds, hunt, monster_extermination, obsidian_rank, platinum_rank, warriors, barbarians, monks, paladins, fighters]

addTagsToQuest(jess_quest_23_tags, jess_quest_23)

# Jess quest 24 - Image

jess_quest_24 = Quest.create(title: "Looking for an appraisal on a seemingly magical bow", text: "No known effects yet. Presumed to be free of curses as our idiot of a rogue seems fine after picking it up with his bare hands. Willing to negotiate prior to appraisal for costs of evaluation.", quest_type: "image", user_id: jess.id)

quest_24_image_1 = File.open('app/assets/adventr_seeder_images/quest_images/quest_24/unknown_bow.jpg')
jess_quest_24.images.attach(io: quest_24_image_1, filename: 'unknown_bow.jpg')

jess_quest_24_tags = [artifacts, artificers, blacksmithing, bows, contracts, divination, enchantment, magic_items, rare, transmutation, wizards]

addTagsToQuest(jess_quest_24_tags, jess_quest_24)

# Jess quest 25 - Image

jess_quest_25 = Quest.create(title: "Mutated kuo-toa parts for sale", text: "Before anyone starts, it's not the sapient variety. Even if it was, these monsters were so mutated by some sick, unidentified strain of mana that they were damn near unrecognizable at first. The parts seem to be poison- and water-aligned to some extent like normal, but also carry a disturbing amount of acidic mana. That's the best layman guess, a good alchemist will tell you more. Also, I guess if anyone wants their daggers we'll sell them cheaply. Same alignments on the enchantments, low quality. Picture related: like that, but somewhat more inside-out.", quest_type: "image", user_id: jess.id)

quest_25_image_1 = File.open('app/assets/adventr_seeder_images/quest_images/quest_25/koa_toa.png')
jess_quest_25.images.attach(io: quest_25_image_1, filename: 'koa_toa.png')

jess_quest_25_tags = [academy, acid, alchemists, alchemy, beasts, cave, creatures, daggers, dungeons, enchanment, ice, magic_items, magical_creatures, merchants, monster_extermination, monster_nest, spell_components]

addTagsToQuest(jess_quest_25_tags, jess_quest_25)

# Jess quest 26 - Quote

# Jess quest 27 - Video

# Jess quest 28 - Audio

# Ingrid quests
# Ingrid quest 29 - Text
# Ingrid quest 30 - Image
# Ingrid quest 31 - Image
# Ingrid quest 32 - Image
# Ingrid quest 33 - Quote
# Ingrid quest 34 - Video
# Ingrid quest 35 - Audio
# Kmsvr quests
# Kmsvr quest 36 - Text
# Kmsvr quest 37 - Image
# Kmsvr quest 38 - Image
# Kmsvr quest 39 - Image
# Kmsvr quest 40 - Quote
# Kmsvr quest 41 - Video
# Kmsvr quest 42 - Audio
# Goblin Slayer quests
# Goblin Slayer quest 43 - Text
# Goblin Slayer quest 44 - Image
# Goblin Slayer quest 45 - Image
# Goblin Slayer quest 46 - Image
# Goblin Slayer quest 47 - Quote
# Goblin Slayer quest 48 - Video
# Goblin Slayer quest 49 - Audio
# Rain quests
# Rain quest 50 - Text
# Rain quest 51 - Image
# Rain quest 52 - Image
# Rain quest 53 - Image
# Rain quest 54 - Quote
# Rain quest 55 - Video
# Rain quest 56 - Audio
# Carl quests
# Carl quest 57 - Text
# Carl quest 58 - Image
# Carl quest 59 - Image
# Carl quest 60 - Image
# Carl quest 61 - Quote
# Carl quest 62 - Video
# Carl quest 63 - Audio
# Catherine quests
# Catherine quest 64 - Text
# Catherine quest 65 - Image
# Catherine quest 66 - Image
# Catherine quest 67 - Image
# Catherine quest 68 - Quote
# Catherine quest 69 - Video
# Catherine quest 70 - Audio



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