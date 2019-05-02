class VideoSerializer < ActiveModel::Serializer
  attributes :id, :title, :likes, :url
end
