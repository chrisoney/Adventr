class Api::QuestsTagsController < ApplicationController
  def index
    @quests_tags = QuestsTag.order(id: :DESC)
  end

  def new
    @quests_tags = QuestsTag.new
  end

  def show
    @quests_tags = Tag.find(params[:id]) 
  end

  def create
    @quests_tags = Tag.new(quests_tag_params)
    if @quests_tags.save
      render :show
    else 
      render json: @quests_tags.errors.full_messages, status: 422
    end
  end

  def destroy
    @quests_tags = Tag.find(params[:id])
    @quests_tags.destroy
    render :show
  end

  private

  def quests_tag_params
    params.require(:quests_tag).permit(:quest_id, :tag_id) 
  end
end
