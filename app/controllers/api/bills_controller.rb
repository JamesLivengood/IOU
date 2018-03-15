class Api::BillsController < ApplicationController
    def create
      # debugger
      @user = current_user
      @bill = Bill.new({
        total_bill_amount: params[:total_bill_amount],
        amount_originally_owed: params[:amount_originally_owed],
        owing_at_creation_user_id: params[:owing_at_creation_user_id],
        owed_to_at_creation_user_id: params[:owed_to_at_creation_user_id],
        description: params[:description]
        })
      if @bill.save
        render "api/users/show"
      else
        render json: @bill.errors.full_messages, status: 422
      end
    end

  def show

    @bill = Bill.find(params[:id])

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
