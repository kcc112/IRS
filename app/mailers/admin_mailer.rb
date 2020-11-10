class AdminMailer < ActionMailer::Base
  default from: Rails.application.credentials.stmp[:sendmail_username]
  
  def unlock_user_email
    @user = params[:user]
    mail to: Rails.application.credentials.stmp[:sendmail_username], subject: 'Unlock user account'
  end

end
