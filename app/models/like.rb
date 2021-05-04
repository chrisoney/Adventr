# == Schema Information
#
# Table name: likes
#
#  id            :bigint           not null, primary key
#  user_id       :integer          not null
#  likeable_id   :integer          not null
#  likeable_type :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Like < ApplicationRecord
  belongs_to :user,
    class_name: :User,
    primary_key: :id,
    foreign_key: :user_id

  belongs_to :likeable, 
    polymorphic: true

end
