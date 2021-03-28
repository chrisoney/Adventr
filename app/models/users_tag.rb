# == Schema Information
#
# Table name: users_tags
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  tag_id     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class UsersTag < ApplicationRecord
  belongs_to :user,
    class_name: :User,
    foreign_key: :user_id,
    primary_key: :id

  belongs_to :tag,
    class_name: :Tag,
    foreign_key: :tag_id,
    primary_key: :id
end