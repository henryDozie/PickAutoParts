class UsersController < ApplicationController
  skip_before_action :authorize_request, only: :create
  # POST /signup
  # return authenticated token upon signup

  def create
    user = User.create!(user_params)
    auth_token = AuthenticateUser.new(user.email, user.password).call
    response = {message: Message.account_created, auth_token: auth_token, user: user}
    json_response(response, :created)
    UserMailer.welcome_email(user).deliver
  end

  private

  def user_params
    params.permit(
        :name,
        :email,
        :password,
        :address,
        :password_confirmation
    )
  end

end