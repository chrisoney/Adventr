# == Schema Information
#
# Table name: quests
#
#  id                :bigint           not null, primary key
#  original_quest_id :integer
#  user_id           :integer          not null
#  title             :string
#  text              :text
#  content_url       :string
#  tags              :string
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  quest_type        :string           not null
#
class Quest < ApplicationRecord

  belongs_to :user
  
  has_many :reblogs
  has_many :likes

  has_many :quests_tags,
    class_name: :QuestsTag,
    foreign_key: :quest_id,
    primary_key: :id

  has_many :tags,
    through: :quests_tags,
    source: :tag

  has_many :tag_joins, as: :taggable
  has_many :tags, through: :tag_joins

  has_many_attached :images
end
