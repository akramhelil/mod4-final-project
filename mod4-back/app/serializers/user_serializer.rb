class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :photo

  has_many :videos, through: :favorites
end
