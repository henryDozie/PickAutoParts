class OrdersController < ApplicationController
  before_action :set_order, only: [:show, :update, :destroy]

  # GET /orders
  def index
    # @orders = current_user.todos
    @orders = Order.all
    json_response(@orders)
    
  end

  # POST /orders
  def create
    @order = current_user.orders.create!(order_params)
    json_response(@order, :id)
  end

  # GET /orders/:id
  def show
    json_response(@order)
  end

  # PUT /orders/:id
  def update
    @order.update(order_params)
    json_response(status: 'SUCCESS', message: 'updated the order')
  end

  # DELETE /orders/:id
  def destroy
    @order.destroy
    json_response(status: 'SUCCESS', message: 'deleted the order')

  end

  private

  def order_params
    # whitelist params
    params.permit(:user_id, :id)
  end

  def set_order
    @order = Order.find(params[:id])
  end
end
