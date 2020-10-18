class Api::V1::CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :update, :destroy]
  before_action :authorize_user, only: [:show, :create, :issues_list]

  def show
    render json: CommentSerializer.new(@comment)
  end

  def create
    @comment = Comment.create!(issue_create_params)
    render json: CommentSerializer.new(@comment)
  end

  def update
    authorize @comment
    @comment.update!(issue_update_params)
    render json: CommentSerializer.new(@comment)
  end

  def destroy
    authorize @comment
    @comment.destroy
  end

  def issues_list
    @comments = Comment.where(issue_id: params[:issue_id]).order(created_at: :desc)
    render json: CommentSerializer.new(@comments, issues_list_serializer_options)
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

    def issue_update_params
      params.require(:comment).permit(:comment)
    end

    def issues_list_serializer_options
      {
        include: %i[user.user_informations]
      }
    end

end