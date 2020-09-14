class Api::V1::Session::CurrentUserController < ApplicationController

  def index
    render json: { 
      id: current_user.id,
      role: current_user.role,
      email: current_user.email,
      name: current_user.user_informations ? current_user.user_informations.name : '',
      surname: current_user.user_informations ? current_user.user_informations.surname : '',
      enterprise: current_user.enterprise ? current_user.enterprise.name : '',
      user_informations_id: current_user.user_informations ? current_user.user_informations.id : '',
    }.to_json
  end

end