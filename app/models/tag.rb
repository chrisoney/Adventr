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
  
  has_many :tag_joins

  # has_many :taggable, 
  #   through: :tag_joins


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


end
