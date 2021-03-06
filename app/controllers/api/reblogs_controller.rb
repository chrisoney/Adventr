class Api::ReblogsController < ApplicationController
  def index
    @reblogs = Reblog.order(id: :DESC).includes(:user)
  end

  def new
    @reblog = Reblog.new
  end

  def show
    @reblog = Reblog.find(params[:id])
  end

  def create
    @reblog = Reblog.new(reblog_params)
    @reblog.user_id = current_user.id
    if @reblog.save
      @quest = @reblog.quest
      @user = @reblog.user
      render :show
    else
      render json: @reblog.errors.full_messages, status: 401
    end
  end

  def update
    @reblog = Reblog.find(params[:id])
    if (@reblog && @reblog.update(reblog_params))
      render :show
    else
      render :show
    end
  end

  def destroy
    @reblog = Reblog.find(params[:id])
    @reblog.destroy
    # @quest = @reblog.quest
    # @user = @reblog.user
    render :show
  end

  private

  def reblog_params
    params.require(:reblog).permit(:user_id, :quest_id, :text)
  end
end
