class Follow < ApplicationRecord
  belongs_to :user,
    class_name: :User,
    foreign_key: :user_id,
    primary_key: :id


  belongs_to :follower,
    class_name: :User,
    foreign_key: :follower_id,
    primary_key: :id
end