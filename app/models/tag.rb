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
  
  has_many :quests_tags,
    class_name: :Quests_Tag,
    foreign_key: :tag_id,
    primary_key: :id

  has_many :quests,
    through: :quests_tags,
    source: :quest

  has_many :users_tags,
    class_name: :Users_Tag,
    foreign_key: :tag_id,
    primary_key: :id

  has_many :users,
    through: :users_tags,
    source: :user

end
