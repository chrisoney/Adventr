class Api::ReblogsController < ApplicationController
  def index
    @reblogs = Reblog.where(reblogger_id: current_user.id)
  end

  def show
    @reblog = Reblog.find_by(params[:id])
  end

  def create
    @reblog = Reblog.new(reblog_params)
    if @reblog.save 
      @quest = @reblog.quest
      @reblogger = @reblog.user
      render :show
    else
      render json: @reblog.errors.full_messages, status: 401
    end
  end


  def destroy
    @reblog = Reblog.find_by(user_id: current_user.id, quest_id: params[:id])
    @reblog.destroy
    @quest = @reblog.quest
    @user = @reblog.user
    render :show
  end

  private

  def reblog_params
    params.require(:reblog).permit(:reblogger_id, :quest_id, :body)
  end
end
