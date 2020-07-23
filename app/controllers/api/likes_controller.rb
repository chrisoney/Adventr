class Api::LikesController < ApplicationController
  
  def index
    @likes = Like.where(user_id: current_user.id)
  end

  def show
    @like = Like.find_by(params[:id])
  end

  def create
    @like = Like.new
    @like.user_id = current_user.id
    @like.quest_id = params[:id]
    if @like.save 
      @quest = @like.quest
      render :show
    else
      render json: @like.errors.full_messages, status: 401
    end
  end


  def destroy
    @like = Like.find_by(user_id: current_user.id, quest_id: params[:id])
    @like.destroy
    @quest = @like.quest
    @user = @like.user
    render :show
  end
end