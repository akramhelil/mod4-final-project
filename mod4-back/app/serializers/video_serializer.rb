class VideoSerializer < ActiveModel::Serializer
  attributes :id, :title, :likes, :url, :thumbnails
end
