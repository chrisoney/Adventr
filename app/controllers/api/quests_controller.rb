class Api::QuestsController < ApplicationController
  def index
    @quests = Quest.order(id: :DESC).includes(:user)
  end

  def new
    @quest = Quest.new
  end

  def show
    @quest = Quest.find(params[:id]) 
  end

  def create
    @quest = Quest.new(quest_params)
    @quest.user_id = current_user.id
    if @quest.save
      render :show
    else 
      render json: @quest.errors.full_messages, status: 422
    end
  end

  def update
    @quest = Quest.find(params[:id])
    if (@quest && @quest.update(quest_params))
      render :show
    else
      render :show
    end
  end

  def destroy
    @quest = Quest.find(params[:id])
    if @quest.images.attached?
      @quest.images.purge
    end
    @quest.destroy
    render :show
  end

  private

  def quest_params
    params.require(:quest).permit(:title, :text, :tags, :quest_type, images: []) 
  end
end
