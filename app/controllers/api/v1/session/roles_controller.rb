class Api::V1::Session::RolesController < ApplicationController
  before_action :setup_user, only: [:update]

  def index
    authorize :role, :index? 
    render json: { 
      roles: User.roles.map do |key, value|
        { "role" => key, "id" => value }
      end
    }.to_json
  end

  def update
    authorize :role, :update? 
    @user.update!(role: role_update_params[:value])
    render json: UserSerializer.new(@user)
  end

  private
    def role_update_params
      params.require(:role).permit(:value)
    end

    def setup_user
      @user = User.find(params[:id])
    end

end