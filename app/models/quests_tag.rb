# == Schema Information
#
# Table name: quests_tags
#
#  id         :bigint           not null, primary key
#  quest_id   :integer          not null
#  tag_id     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class QuestsTag < ApplicationRecord
  belongs_to :quest,
    class_name: :Quest,
    foreign_key: :quest_id,
    primary_key: :id

  belongs_to :tag,
    class_name: :Tag,
    foreign_key: :tag_id,
    primary_key: :id
end
