class Api::V1::EnterprisesController < ApplicationController
  def index
    @enterprises = Enterprise.all
    render json: EnterpriseSerializer.new(@enterprises)
  end
end