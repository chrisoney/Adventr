class Like < ApplicationRecord
  belongs_to :user,
    class_name: :User,
    primary_key: :id,
    foreign_key: :user_id

  belongs_to :quest,
    class_name: :Quest,
    primary_key: :id,
    foreign_key: :quest_id

end