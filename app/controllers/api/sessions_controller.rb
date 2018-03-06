class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(user_params)
    if @user
      @user.login
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

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
