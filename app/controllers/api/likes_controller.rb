class Api::LikesController < ApplicationController
  
  def index
    @likes = Like.where(user_id: current_user.id)
  end

  def show
    @like = Like.find(params[:id])
  end

  def create
    @like = Like.new(like_params)
    if @like.save 
      # @quest = @like.quest
      render :show
    else
      render json: @like.errors.full_messages, status: 401
    end
  end


  def destroy
    @like = Like.find_by(like_params)
    @like.destroy
    # @quest = @like.quest
    # @user = @like.user
    render :show
  end

  private
  def like_params
    params.require(:like).permit(:user_id, :likeable_id, :likeable_type)
  end
end