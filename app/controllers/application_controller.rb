class ApplicationController < ActionController::Base
  include Pundit
  before_action :authenticate_user!
  # protect_from_forgery with: :null_session

  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
  rescue_from Pundit::NotAuthorizedError, with: :unauthorized
  rescue_from ArgumentError, with: :record_invalid

  private

    def record_not_found(exception)
      render json: { error: exception.message, type: "#{$!.class}" }.to_json, status: :not_found
    end

    def record_invalid(exception)
      render json: { error: exception.message, type: "#{$!.class}" }.to_json, status: :bad_request
    end

    def unauthorized(exception)
      render json: { error: exception.message, type: "#{$!.class}" }.to_json, status: :forbidden
    end
end
