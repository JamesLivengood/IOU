# == Schema Information
#
# Table name: users
#
#  id                   :integer          not null, primary key
#  email                :string           not null
#  password_digest      :string           not null
#  session_token        :string           not null
#  current_user_balance :float            default(0.0), not null
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#  name                 :string           not null
#


class User < ApplicationRecord

  has_many :bill_joins,
    class_name: 'BillJoin',
    foreign_key: :user_id

  has_many :bills,
    through: :bill_joins,
    source: :bill

  def check_bill_balance(bill)

  end



  validates :name, :email, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  after_initialize :ensure_session_token

  attr_reader :password
  validates :password, length: { minimum: 6 }, allow_nil: true

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(@password)
  end

  def is_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def self.find_by_credentials(email, password)
    @user = User.find_by(email: email)
    @user && @user.is_password?(password) ? @user : nil
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end
