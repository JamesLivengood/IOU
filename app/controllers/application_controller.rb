class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :ensure_logged_in, :log_in, :logout, :current_user, :logged_in?

  private

  def log_in(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def current_user
    return nil unless session[:session_token]
    User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def ensure_logged_in
    # redirect_to new_session_url unless logged_in?
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
  end

end
