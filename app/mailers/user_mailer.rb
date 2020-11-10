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

  def resolve_issue_email
    @issue = params[:issue]
    mail to: @issue.reported_by.email, subject: 'Resolved issue'
  end
end
