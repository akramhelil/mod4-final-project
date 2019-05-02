class Video < ApplicationRecord
    has_many :users, through: :favorites

end
