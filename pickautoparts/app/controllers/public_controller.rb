class PublicController < ApplicationController
  skip_before_action :authorize_request, only: :index
  skip_before_action :authorize_request, only: :show
  def index
  autoparts = Autopart.all
      json_response(autoparts)
  end

  def show
    autopart = Autopart.find_by!(id: params[:id])
    json_response(autopart)
  end
end
