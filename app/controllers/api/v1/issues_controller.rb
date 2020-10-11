class Api::V1::IssuesController < ApplicationController
  before_action :set_issue, only: [:show, :update, :destroy, :resolve_issue]
  before_action :authorize_user, only: [:index, :show, :create, :issue_types]

  def index
    if current_user.admin?
      @issues = Issue.all
    elsif !current_user.enterprise_id.nil? && !current_user.admin?
      @issues = Issue.associated_with_enterprise current_user.enterprise_id
    else
      @issues = []
    end
    render json: IssueSerializer.new(@issues, index_serializer_options)
  end

  def show
    render json: IssueSerializer.new(@issue, show_serializer_options)
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
    Issue.transaction(isolation: :serializable) do
      @issue = Issue.find(params[:id])
      authorize @issue
      if @issue.assigned_to_id.nil?
        @issue.status = :assigned
        @issue.update!(assign_receiver_params)
        render json: IssueSerializer.new(@issue)
      else
        render json: { 
          error: I18n.t('errors.someone_is_already_assigned_to_issue'), type: "issue_already_assigned"
        }.to_json, status: :bad_request
      end
    end
  end

  def resolve_issue
    authorize @issue
    @issue.update!(status: :resolved)
    render json: IssueSerializer.new(@issue)
  end

  def issue_types
    render json: { 
      types: Issue.issue_types.map do |key, value|
        { "type" => key, "id" => value }
      end
    }.to_json
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

    def index_serializer_options
      {
        include: %i[assigned_to.user_informations reported_by.user_informations]
      }
    end

    def show_serializer_options
      {
        include: %i[assigned_to.user_informations reported_by.user_informations]
      }
    end

end