class Api::V1::CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :update, :destory]
  before_action :authorize_user, only: [:show]

  def show
    render json: CommentSerializer.new(@comment)
  end

  def create
    # TDO
  end

  def update
    # TDO
  end

  def destroy
    # TDO
  end

  private
    def set_comment
      @comment = Comment.find(params[:id])
    end

    def authorize_user
      authorize Comment
    end

end