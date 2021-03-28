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
require 'test_helper'

class QuestsTagTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
