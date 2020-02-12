class UserMailer < ApplicationMailer
  default from: "bdflynny@gmail.com"

  def welcome_email(user)
    @user = user
    puts user
    mail(to: @user.email, subject: "Welcome #{@user.name}")
  end
end