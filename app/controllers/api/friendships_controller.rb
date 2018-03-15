class Api::FriendshipsController < ApplicationController
  def create
    @user = current_user
    @friendship = Friendship.new(user1_id: params[:user1_id], user2_id: params[:user2_id])
    if @friendship.save
      render "api/users/show"
    else
      render json: [@friendship.errors.full_messages], status: 422
    end
  end

  def destroy
  end

  def show
    @friendship = Friendship.find_by(user1_id: current_user.id, user2_id: params[:id]) || Friendship.find_by(user1_id: params[:id], user2_id: current_user.id)

  end
end

# where(user1_id: params[:user1_id], user2_id: params[:user2_id]) + Friendship.where(user2_id: params[:user1_id], user1_id: params[:user2_id]))[0]
