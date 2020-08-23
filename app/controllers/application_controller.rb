class ApplicationController < ActionController::Base
  include Pundit
  before_action :authenticate_user!

  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  rescue_from Pundit::NotAuthorizedError, with: :unauthorized

  private

    def record_not_found(exception)
      render json: { error: exception.message }.to_json, status: 404
    end

    def unauthorized(exception)
      render json: { error: exception.message }.to_json, status: 403
    end
end
