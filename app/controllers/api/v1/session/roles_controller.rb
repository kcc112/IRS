class Api::V1::Session::RolesController < ApplicationController

  def index
    render json: { 
      roles: User.roles.map do |key, value|
        { "role" => key, "id" => value }
      end
    }.to_json
  end

end