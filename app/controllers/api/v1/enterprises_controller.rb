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
    authorize Enterprise
    @enterprise = Enterprise.new(enterprise_params)
    @enterprise.save!
    render json: EnterpriseSerializer.new(@enterprise), status: :created
  end

  def update
    # TDO
  end

  def destroy
    # TDO
  end

  private
    def enterprise_params
      params.require(:enterprise).permit(:name, :description)
    end

end