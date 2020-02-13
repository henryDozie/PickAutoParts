class PublicController < ApplicationController
  skip_before_action :authorize_request, only: :index

  def index
autoparts = Autopart.all
      json_response(autoparts)
  end
end
