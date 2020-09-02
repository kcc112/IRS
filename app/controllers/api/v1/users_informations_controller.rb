class Api::V1::UsersInformationsController < ApplicationController
  before_action :authorize_user, only: [:index]
  before_action :set_user_informations, only: [:show, :update]

  def index
    @users_informations = UserInformations.all
    render json: UserInformationsSerializer.new(@users_informations)
  end

  def show
    authorize @user_informations
    render json: UserInformationsSerializer.new(@user_informations)
  end

  def update
    # TDO
  end

  private
    def authorize_user
      authorize UserInformations
    end

    def set_user_informations
      @user_informations = UserInformations.find(params[:id])
    end

    def user_informations_params
      params.require(:user_informations).permit(:name, :surname, :phone_number)  
    end

end