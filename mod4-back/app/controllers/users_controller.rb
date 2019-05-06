class UsersController < ApplicationController

    def index
        @users = User.all
        render json: @users
    end

    def create
        @user = User.find_or_create_by(user_params)
        # we need something that can give to the front end that reack the current user state
        render json: @user
      end   

      private
  
      def user_params
        params.permit(:name, :photo)
      end

end
