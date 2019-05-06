class AuthController < ApplicationController

    def login
      @user = User.find(params[:id])
    end
end