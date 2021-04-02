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
end
