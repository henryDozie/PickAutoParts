class ReviewsController < ApplicationController
  before_action :set_autoparts
  before_action :set_autopart_review, only: [:show, :update, :destroy]

  # GET /autoparts/:autopart_id/reviews
  def index
    json_response(@autopart.reviews)
  end

  # GET /autoparts/:autopart_id/reviews/:id
  def show
    json_response(@review)
  end

  # POST /autoparts/:autopart_id/reviews
  def create
    @autopart.reviews.create!(review_params)
    # json_response(@autopart, :created)
    json_response(status: "SUCCESS", message: 'review created successfully.')

  end

  # PUT /autoparts/:autopart_id/reviews/:id
  def update
    @review.update(review_params)
    json_response(status: 'SUCCESS', message: 'review updated successfully.')
  end

  # DELETE /autoparts/:autopart_id/reviews/:id
  def destroy
    @review.destroy
    json_response(status: 'SUCCESS', message: 'review deleted successfully.')
  end

  private

  def review_params
    params.permit(:name, :done)
  end

  def set_autopart
    @autopart = autopart.find(params[:autopart_id])
  end

  def set_autopart_review
    @review = @autopart.reviews.find_by!(id: params[:id]) if @autopart
  end
end
