class Api::PaymentsController < ApplicationController
  def create
    # debugger
    @user = current_user
    @payment = Payment.new(payment_params)
    if @payment.save
      render "api/users/show"
    else
      render json: @payment.errors.full_messages, status: 422
    end
  end

  def payment_params
    params.permit(:bill_id, :paying_user_id, :submitting_user_id, :payment_amount)
  end
end
