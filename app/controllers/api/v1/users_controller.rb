class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: [:deactivate, :activate]
  before_action :authorize_user, only: [:deactivate, :activate]

  def deactivate
    authorize @user

    if !@user.deactivated
      @user.update!(deactivated: true)
      AdminMailer.with(user: @user).lock_user_email.deliver_later
    end

    render json: { success: true }
  end

  def activate
    authorize @user

    if @user.deactivated
      @user.update!(deactivated: false)
      UserMailer.with(user: @user).unlock_user_email.deliver_later
    end

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