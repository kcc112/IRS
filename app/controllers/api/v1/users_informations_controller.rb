class Api::V1::UsersInformationsController < ApplicationController
  def index
    @users_informations = UserInformations.all
    render json: UserInformationsSerializer.new(@users_informations)
  end
end