class Api::V1::CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :update, :destory]
  before_action :authorize_user, only: [:show, :create]

  def show
    render json: CommentSerializer.new(@comment)
  end

  def create
    @comment = Comment.create!(issue_create_params)
    render json: CommentSerializer.new(@comment)
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

    def issue_create_params
      params.require(:comment).permit(:comment, :user_id, :issue_id)
    end

end