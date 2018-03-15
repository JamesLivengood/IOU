require 'test_helper'

class Api::PaymentsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_payments_create_url
    assert_response :success
  end

end
