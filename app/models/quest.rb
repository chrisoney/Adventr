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
  
  has_many :likes

  has_many_attached :images
end
