class Api::TagJoinsController < ApplicationController

  def index
    @tag_joins = TagJoin.where(taggable_id: params[:id], taggable_type: params[:type])
  end

  def show
    @tag_join = TagJoin.find(params[:id])
  end

  def create
    debugger
    @tag_join = TagJoin.new(tag_joins_params)
    if @tag_join.save 
      @taggable = @tag_join.taggable
      @tag = @tag_join.tag
      render :show
    else
      render json: @tag_join.errors.full_messages, status: 401
    end

  end


  def destroy
    @tag_join = TagJoin.find(params[:id])
    @tag_join.destroy
    render :show
  end

  private
  def tag_joins_params 
      params.require(:tag_join).permit(:taggable_id, :tag_id, :taggable_type, :order) 
  end
end
