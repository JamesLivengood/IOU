class Api::BillsController < ApplicationController
    def create
      # debugger
      @user = current_user
      @bill = Bill.new({
        total_bill_amount: params[:total_bill_amount],
        amount_originally_owed: params[:amount_originally_owed],
        owing_at_creation_user_id: params[:owing_at_creation_user_id]
        })
      if @bill.save
        if @bill.owing_at_creation_user_id == @user.id
          owing_user_id = @user.id
          owed_user =
        BillJoin.create(user_id: @bill.owing_at_creation_user_id, bill_id: bill.id, owing: true)
        BillJoin.create(user_id: , bill_id: bill.id, owing: false)
        render "api/users/show"
      else
        render json: @bill.errors.full_messages, status: 422
      end
  end

  def show
  end

  def destroy
  end

  def index
  end

  def update
  end

  def edit
  end
end
