# == Schema Information
#
# Table name: users
#
#  id                   :integer          not null, primary key
#  email                :string           not null
#  password_digest      :string           not null
#  session_token        :string           not null
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

  def total_balance
    # debugger
    self.you_are_owed - self.you_owe
  end

  def you_owe
    total = 0
    #note that < and > are flipped in logic compared to method User#you_are_owed
    # debugger
    self.bills.each do |bill|
      if self.id == bill.owing_at_creation_user_id && bill.balance > 0
        total += bill.balance
      elsif self.id != bill.owing_at_creation_user_id && bill.balance < 0
        total += bill.balance
      end
    end
    total
  end

  def you_are_owed
    total = 0
    #note that < and > are flipped in logic compared to method User#you_owe
    self.bills.each do |bill|
      if self.id == bill.owing_at_creation_user_id && bill.balance < 0
        total += bill.balance
      elsif self.id != bill.owing_at_creation_user_id && bill.balance > 0
        total += bill.balance
      end
    end
    total
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
