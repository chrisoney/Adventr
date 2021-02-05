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
class User < ApplicationRecord

  attr_reader :password

  validates :username, presence: true
  validates :session_token, presence: true
  validates :email, presence: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true


  has_many :quests
  has_many :likes
  
  has_many :liked_quests,
    through: :likes,
    source: :quest

  has_many :follows,
    class_name: :Follow,
    primary_key: :id,
    foreign_key: :follower

  has_many :following,
    through: :follows,
    source: :user

  has_many :fans,
    class_name: :Follow,
    primary_key: :id,
    foreign_key: :user
    

  has_many :followers,
    through: :fans,
    source: :follower

  
  
  after_initialize :ensure_session_token

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

end
