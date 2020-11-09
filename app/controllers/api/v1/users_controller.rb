class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: [:deactivate, :activate]
  before_action :authorize_user, only: [:deactivate, :activate]

  def deactivate
    authorize @user
    @user.update!(deactivated: true) unless @user.deactivated
    render json: { success: true }
  end

  def activate
    authorize @user
    @user.update!(deactivated: false) unless !@user.deactivated
    render json: { success: true }
  end

  private
    def set_user
      @user = User.find(params[:id])
    end

    def authorize_user
      authorize User
    end 

end