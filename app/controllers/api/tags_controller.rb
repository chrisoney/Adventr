class Api::TagsController < ApplicationController
  def index
    @tags = Tag.order(id: :DESC)
  end

  def new
    @tag = Tag.new
  end

  def show
    @tag = Tag.find(params[:id]) 
  end

  def create
    @tag = Tag.new(tag_params)
    if @tag.save
      render :show
    else 
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def destroy
    @tag = Tag.find(params[:id])
    @tag.destroy
    render :show
  end

  private

  def tag_params
    params.require(:tag).permit(:tag_name) 
  end
end
