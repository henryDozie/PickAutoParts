class AutopartsController < ApplicationController
  before_action :set_order
  before_action :set_order_autopart, only: [:show, :update, :destroy]

  # GET /orders/:order_id/autoparts
  def index
    # if(set_order)
    json_response(@order.autoparts)
    # else
    #   json_response(@brand.autoparts)
    # end
  end

  # GET /orders/:order_id/autoparts/:id
  def show
    json_response(@autopart)
  end

  # POST /orders/:order_id/autoparts
  def create
    # if(set_order)
    @order.autoparts.create!(autopart_params)
    # else
    #   json_response(@brand.autoparts)
    json_response(status: "SUCCESS", message: 'autopart created successfully.', data: @autopart.name)

  end

  # PUT /orders/:order_id/autoparts/:id
  def update
    @autopart.update(autopart_params)
    json_response(status: 'SUCCESS', message: 'autopart updated successfully.', data: @autopart.name)
  end

  # DELETE /orders/:order_id/autoparts/:id
  def destroy
    @autopart.destroy
    json_response(status: 'SUCCESS', message: 'autopart deleted successfully.', data: @autopart.name)
  end

  private

  def item_params
    params.permit(:name, :done)
  end

  def set_order
    @order = Order.find(params[:order_id])
  end

  def set_order_item
    @autopart = @order.autoparts.find_by!(id: params[:id]) if @order
  end
end
