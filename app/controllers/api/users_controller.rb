class Api::UsersController < ApplicationController

  skip_before_action :verify_authenticity_token

  def index
    @users = User.all
    
    render 'api/users/index'
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

  def update
    @user = User.find(params[:id])
    if (@user && @user.update(user_params))
      render :show
    else
      render :show
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
    params.require(:user).permit(:username, :password, :email, :avatar)
  end
end
