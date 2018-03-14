class Api::FriendshipsController < ApplicationController
  def create
    @user = current_user
    @friendship = Friendship.new(user1_id: params[:user1_id], user2_id: params[:user2_id])
    if @friendship.save
      render "api/users/show"
    else
      render json: [@frinedship.errors.full_messages], status: 422
    end
  end

  def destroy
  end

  def show
  end
end
