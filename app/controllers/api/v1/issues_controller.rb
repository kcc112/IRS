class Api::V1::IssuesController < ApplicationController
  before_action :set_issue, only: [:show, :update, :destroy, :change_status, :assign_reciver]
  before_action :authorize_user, only: [:show, :create, :assign_receiver]

  def show
    render json: IssueSerializer.new(@issue)
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

  def change_status
    # TDO
  end

  def assign_receiver
    # TDO
  end

  private
    def set_issue
      @issue = Issue.find(params[:id])
    end

    def authorize_user
      authorize Issue
    end 

end