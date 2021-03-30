class Api::UsersTagsController < ApplicationController
  def index
    @users_tags = UsersTag.where(user_id: current_user.id)
  end

  def show
    @users_tag = UsersTag.find_by(params[:id])
  end

  def create
    @users_tag = UsersTag.new
    @users_tag.user_id = current_user.id
    @users_tag.tag_id = params[:tagId]
    if @users_tag.save
      @user = @users_tag.user
      @tag = @users_tag.tag
      render :show
    else
      render json: @users_tag.errors.full_messages, status: 401
    end

  end


  def destroy
    @users_tag = UsersTag.find_by(user_id: current_user.id, tag_id: params[:id])
    @user = @users_tag.user
    @tag = @users_tag.tag
    @users_tag.destroy
    render :show
  end

  private
    def users_tag_params 
        params.require(:users_tag).permit(:user_id, :tag_id) 
    end
end
