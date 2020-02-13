class AutopartsController < ApplicationController
  before_action :set_order
  # before_action :set_brand
  before_action :set_order_autopart, only: [:show, :update, :destroy]

  # GET /orders/:order_id/autoparts
  def index
    if(set_order)
    json_response(@order.autoparts)
    else
      autoparts = Autopart.all
      json_response(autoparts)
    end
  end

  # GET /orders/:order_id/autoparts/:id
  def show
    json_response(@autopart)
  end

  # POST /orders/:order_id/autoparts
  def create
    @order.autoparts.create!(autopart_params)
    json_response(status: "SUCCESS", message: 'autopart created successfully.')
  end

  # PUT /orders/:order_id/autoparts/:id
  def update
    @autopart.update(autopart_params)
    json_response(status: 'SUCCESS', message: 'autopart updated successfully.')
  end

  # DELETE /orders/:order_id/autoparts/:id
  def destroy
    @autopart.destroy
    json_response(status: 'SUCCESS', message: 'autopart deleted successfully.')
  end

  private

  def autopart_params
    params.permit(:name, :img_url, :description)
  end

  def set_order
    @order = Order.find(params[:order_id])
  end

  def set_order_autopart
    @autopart = @order.autoparts.find_by!(id: params[:id]) if @order
  end
end
