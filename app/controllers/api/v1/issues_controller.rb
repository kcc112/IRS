class Api::V1::IssuesController < ApplicationController
  def index
    @issues = Issue.all
    render json: IssueSerializer.new(@issues, index_issue_serialization_options)
  end


  def index_issue_serialization_options
    { include: %i[reported_by.user_informations assigned_to.user_informations] }
  end
end