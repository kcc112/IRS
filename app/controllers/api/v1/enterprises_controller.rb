class Api::V1::EnterprisesController < ApplicationController
  before_action :authorize_user, only: [:index, :show, :create, :update, :destroy]
  before_action :set_enterprise, only: [:show, :update, :destroy]

  def index
    @enterprises = Enterprise.all
    render json: EnterpriseSerializer.new(@enterprises)
  end

  def show
    render json: EnterpriseSerializer.new(@enterprise)
  end

  def create
    @enterprise = Enterprise.new(enterprise_params)
    @enterprise.save!
    render json: EnterpriseSerializer.new(@enterprise), status: :created
  end

  def update
    @enterprise.update!(enterprise_params)
    render json: EnterpriseSerializer.new(@enterprise)
  end

  def destroy
    @enterprise.destroy
  end

  private
    def set_enterprise
      @enterprise = Enterprise.find(params[:id])
    end

    def authorize_user
      authorize Enterprise
    end

    def enterprise_params
      params.require(:enterprise).permit(:name, :description)
    end

end