class VideosController < ApplicationController

    def index
        @video = Video.all
        render json: @video
    end

    def create
        @video = Video.create(video_params)
        render json: @video
      end   

    def update
        @video = video.find_by(id: params[:id])
        render json: @video
    end

      private
  
      def video_params
        params.permit(:title, :likes, :url)
      end
end
