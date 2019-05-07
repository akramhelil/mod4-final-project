class FavoritesController < ApplicationController

    def index
      favorites = Favorite.all
      render json: favorites
    end

    def create
        @favorite = Favorite.create(favorite_params)
        render json: @favorite
      end

      def destroy
        @favorite = Favorite.find_by(id: params[:id])
        @favorite.destroy
        render json: @favorite
      end

      def favorite_params
        params.require(:favorite).permit(:user_id, :video_id)
      end


end
