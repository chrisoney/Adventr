class Api::QuestsTagsController < ApplicationController

  def index
    @quests_tags = QuestsTag.where(quest_id: params[:id])
  end

  def show
    @quests_tag = QuestsTag.find_by(params[:id])
  end

  def create
    @quests_tag = QuestsTag.new(quests_tags_params)

    if @quests_tag.save 
      @quest = @quests_tag.quest
      @tag = @quests_tag.tag
      render :show
    else
      render json: @quests_tag.errors.full_messages, status: 401
    end

  end


  def destroy
    @quests_tag = QuestsTag.find_by(params[:id])
    @quest = @quests_tag.quest
    @tag = @quests_tag.tag
    @quests_tag.destroy
    render :show
  end

  private
  def quests_tags_params 
      params.require(:quests_tag).permit(:quest_id, :tag_id) 
  end
end
