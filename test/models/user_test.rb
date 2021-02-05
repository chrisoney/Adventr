# == Schema Information
#
# Table name: users
#
#  id                :bigint           not null, primary key
#  username          :string           not null
#  email             :string           not null
#  password_digest   :string           not null
#  session_token     :string           not null
#  avatar            :string
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  guild_name        :string
#  guild_description :string
#
require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
