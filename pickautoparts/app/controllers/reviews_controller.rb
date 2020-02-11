class AutopartsController < ApplicationController
  before_action :set_autopart
  # before_action :set_brand
  before_action :set_autopart_review, only: [:show, :update, :destroy]

  # GET /orders/:order_id/autoparts
  def index
    # if(set_order)
    json_response(@autopart.review)
    # else
    #   json_response(@brand.autoparts)
    # end
  end

  # GET /orders/:order_id/autoparts/:id
  def show
    json_response(@review)
  end

  # POST /orders/:order_id/autoparts
  def create
    @autopart.reviews.create!(review_params)
    json_response(status: "SUCCESS", message: 'autopart created successfully.')
  end

  # PUT /orders/:order_id/autoparts/:id
  def update
    @review.update(review_params)
    json_response(status: 'SUCCESS', message: 'autopart updated successfully.')
  end

  # DELETE /orders/:order_id/autoparts/:id
  def destroy
    @review.destroy
    json_response(status: 'SUCCESS', message: 'autopart deleted successfully.')
  end

  private

  def autopart_params
    params.permit(:review, :rating)
  end

  def set_autopart
    @autopart = Autopart.find(params[:autopart_id])
  end

  def set_autopart_review
    @review = @autopart.reviews.find_by!(id: params[:id]) if @order
  end
end
