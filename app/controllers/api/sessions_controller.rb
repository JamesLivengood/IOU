class Api::SessionsController < ApplicationController

  def create
    # debugger
    @user = User.find_by_credentials(params[:email], params[:password])
    if @user
      log_in(@user)
      render "api/users/show"
    else
      render json: ["Invalid username/password combination"], status: 401
    end
  end

  def destroy
    logout
    if !current_user
      render json: {}
    else
      render json: ["No user currently signed in"], status: 404
    end
  end


end
