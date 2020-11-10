class UserMailer < ActionMailer::Base
  default from: Rails.application.credentials.stmp[:sendmail_username]
  
  def unlock_user_email
    @user = params[:user]
    mail to: @user.email, subject: 'Unlocke account'
  end

  def lock_user_email
    @user = params[:user]
    mail to: @user.email, subject: 'Lock account'
  end
end
