class Api::V1::IssuesController < ApplicationController
  before_action :set_issue, only: [:show, :update, :destroy, :assign_receiver, :resolve_issue]
  before_action :authorize_user, only: [:show, :create]

  def show
    render json: IssueSerializer.new(@issue)
  end

  def create
    @issue = Issue.new(issue_create_params)
    @issue.save!
    render json: IssueSerializer.new(@issue)
  end

  def update
    authorize @issue
    @issue.update!(issue_update_params)
    render json: IssueSerializer.new(@issue)
  end

  def destroy
    authorize @issue
    @issue.destroy
  end

  def assign_receiver
    authorize @issue
    @issue.status = :assigned
    @issue.update!(assign_receiver_params)
    render json: IssueSerializer.new(@issue)
  end

  def resolve_issue
    authorize @issue
    @issue.update!(status: :resolved)
    render json: IssueSerializer.new(@issue)
  end

  private
    def set_issue
      @issue = Issue.find(params[:id])
    end

    def authorize_user
      authorize Issue
    end 

    def issue_create_params
      params.require(:issue).permit(:description, :issue_type, :reported_by_id)
    end

    def issue_update_params
      params.require(:issue).permit(:description, :issue_type)
    end

    def assign_receiver_params
      params.require(:issue).permit(:assigned_to_id)
    end

end