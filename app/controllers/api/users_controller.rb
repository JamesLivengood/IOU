class Api::UsersController < ApplicationController
  def create
    # debugger
    @user = User.new({name: params[:name], email: params[:email], password: params[:password]})
    if @user.save
      log_in(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
