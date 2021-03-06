class User < ApplicationRecord
    has_many :favorites
    has_many :videos, through: :favorites

    has_secure_password
  validates :name, uniqueness: true

end
