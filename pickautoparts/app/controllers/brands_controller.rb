class BrandsController < ApplicationController

  # before_action :set_brand, only: [:show, :update, :destroy]

  # GET /brands
  def index
    @brands = current_user.brands
    # @brands = Brand.all
    json_response(@brands)
    
  end

  # POST /brands
  def create
    @brand = current_user.brands.create!(brand_params)
    json_response(@brand, :id)
  end

  # GET /brands/:id
  def show
    json_response(@brand)
  end

  # PUT /brands/:id
  def update
    @brand.update(brand_params)
    json_response(status: 'SUCCESS', message: 'updated the brand')
  end

  # DELETE /brands/:id
  def destroy
    @brand.destroy
    json_response(status: 'SUCCESS', message: 'deleted the brand')

  end

  private

  def brand_params
    # whitelist params
    params.permit(:autopart_id)
  end

  def set_brand
    @brand = Brand.find(params[:id])
  end
end
