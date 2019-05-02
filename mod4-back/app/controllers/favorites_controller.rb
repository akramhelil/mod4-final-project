class FavoritesController < ApplicationController

    def create
        @favorite = Favorite.create(favorite_params)
        render json: @favorite
      end  

      def destroy
        @favorite = Favorite.find_by(id: params[:id])
        @favorite.destroy
        render json: @favorite
      end

      def user_params
        params.permit(:user_id, :video_id)
      end


end
