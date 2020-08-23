class Api::V1::UsersInformationsController < ApplicationController

  def index
    @users_informations = UserInformations.all
    render json: UserInformationsSerializer.new(@users_informations)
  end

  def show
    # TDO
  end

  def create
    # TDO
  end

  def update
    # TDO
  end

end