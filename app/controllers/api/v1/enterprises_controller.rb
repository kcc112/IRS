class Api::V1::EnterprisesController < ApplicationController
  before_action :authorize_user, only: [:index, :show, :create, :update, :destroy]

  def index
    @enterprises = Enterprise.all
    render json: EnterpriseSerializer.new(@enterprises)
  end

  def show
    @enterprise = Enterprise.find(params[:id])
    render json: EnterpriseSerializer.new(@enterprise)
  end

  def create
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
    def authorize_user
      authorize Enterprise
    end

    def enterprise_params
      params.require(:enterprise).permit(:name, :description)
    end

end