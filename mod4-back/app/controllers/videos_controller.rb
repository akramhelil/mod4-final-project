class VideosController < ApplicationController

    def index
        @video = Video.all
        render json: @video
    end

    def create
        video = Video.find_by(url: params[:url])
      if video
        byebug
        video.update_attributes(likes: video.likes +=1 )
        # video.save
      else
        video = Video.create(video_params)
      end
        render json: video
    end   

    def update
        @video = video.find_by(id: params[:id])
        render json: @video
    end

      private
  
      def video_params
        params.permit(:title, :likes, :url, :thumbnails)
      end
end
