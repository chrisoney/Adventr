# == Schema Information
#
# Table name: reblogs
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  quest_id   :integer          not null
#  text       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Reblog < ApplicationRecord
  belongs_to :user,
    class_name: "User",
    foreign_key: "user_id"
  
  belongs_to :quest

  has_many :likes, 
    as: :likeable,
    dependent: :destroy

  has_many :tag_joins, 
    as: :taggable,
    dependent: :destroy
  
  has_many :tags,
    through: :tag_joins
end
