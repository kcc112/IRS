class Api::V1::EnterprisesController < ApplicationController

  def index
    authorize Enterprise
    @enterprises = Enterprise.all
    render json: EnterpriseSerializer.new(@enterprises)
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

  def destroy
    # TDO
  end

end