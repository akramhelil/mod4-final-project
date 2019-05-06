class User < ApplicationRecord
    has_many :favorites
    has_many :videos, through: :favorites

    has_secure_password
  validates :username, presence: true
  validates :username, uniqueness: true

end
