# == Schema Information
#
# Table name: quests
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  title      :string
#  text       :text
#  quest_type :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Quest < ApplicationRecord

  belongs_to :user
  
  has_many :reblogs
  has_many :likes, 
    as: :likeable,
    dependent: :destroy

  has_many :tag_joins,
    as: :taggable,
    dependent: :destroy
  has_many :tags, through: :tag_joins

  has_many_attached :images
end
