class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: [:deactivate, :activate, :assign_user_to_enterprise]
  before_action :authorize_user, only: [:deactivate, :activate, :assign_user_to_enterprise]

  def deactivate
    if !@user.deactivated
      @user.update!(deactivated: true)
      UserMailer.with(user: @user).lock_user_email.deliver_later
    end

    render json: { success: true }
  end

  def activate
    if @user.deactivated
      @user.update!(deactivated: false)
      UserMailer.with(user: @user).unlock_user_email.deliver_later
    end

    render json: { success: true }
  end

  def assign_user_to_enterprise
    @enterprise = Enterprise.find(params[:enterprise_id])
    @user.update!(enterprise: @enterprise)
    render json: EnterpriseSerializer.new(@enterprise)
  end

  private
    def set_user
      @user = User.find(params[:id])
    end

    def authorize_user
      authorize User
    end

end