class Api::UsersController < ApplicationController

  def index
    
  end

  def create
    @user = User.new(user_params)
    @user.avatar = "https://adventr-dev.s3-us-west-1.amazonaws.com/magic.jpg"
    if @user.save
      login!(@user)
      render 'api/users/dashboard'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    if @user
      render :show
    else
      render json: ["User does not exist"], status: 404
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end
