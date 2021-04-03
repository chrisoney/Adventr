# == Schema Information
#
# Table name: tag_joins
#
#  id            :bigint           not null, primary key
#  tag_id        :integer          not null
#  taggable_id   :integer          not null
#  taggable_type :string           not null
#  order         :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class TagJoin < ApplicationRecord
  belongs_to :taggable, polymorphic: true
end
