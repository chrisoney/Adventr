# == Schema Information
#
# Table name: reblogs
#
#  id           :bigint           not null, primary key
#  reblogger_id :integer          not null
#  quest_id     :integer          not null
#  body         :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Reblog < ApplicationRecord
  belongs_to :user,
    class_name: "User",
    foreign_key: "reblogger_id"
  
  belongs_to :quest

  has_many :tag_joins, as: :taggable
  has_many :tags, through: :tag_joins
end
