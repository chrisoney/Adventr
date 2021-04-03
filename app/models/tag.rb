# == Schema Information
#
# Table name: tags
#
#  id         :bigint           not null, primary key
#  tag_name   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tag < ApplicationRecord

  validates :tag_name, presence: true, uniqueness: true

  # attr_accessible :tag_name
  belongs_to :taggable, 
    polymorphic: true

  has_many :tag_joins

  has_many :quests, 
    through: :tag_joins, 
    source: :taggable, 
    source_type: :Quest

  has_many :users, 
    through: :tag_joins, 
    source: :taggable, 
    source_type: :User

  has_many :reblogs, 
    through: :tag_joins, 
    source: :taggable, 
    source_type: :Reblog
  
  # has_many :quests_tags,
  #   class_name: :QuestsTag,
  #   foreign_key: :tag_id,
  #   primary_key: :id

  # has_many :quests,
  #   through: :quests_tags,
  #   source: :quest

  # has_many :users_tags,
  #   class_name: :UsersTag,
  #   foreign_key: :tag_id,
  #   primary_key: :id

  # has_many :users,
  #   through: :users_tags,
  #   source: :user

end
