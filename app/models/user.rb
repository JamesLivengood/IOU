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

  # has_many :bill_joins,
  #   class_name: 'BillJoin',
  #   foreign_key: :user_id
  #
  has_many :originally_owing_bills,
    class_name: 'Bill',
    foreign_key: :owing_at_creation_user_id

  has_many :originally_owed_to_bills,
    class_name: 'Bill',
    foreign_key: :owed_to_at_creation_user_id

  def friends
    friendships1 = Friendship.where(user1_id: self.id)
    friendships2 = Friendship.where(user2_id: self.id)
    final = []
    friendships1.map do |friendship|
      final << User.find(friendship.user2_id)
    end
    friendships2.map do |friendship|
      final << User.find(friendship.user1_id)
    end
    final
  end

  def balance_with(friend)
    bills = Bill.where(owing_at_creation_user_id: self.id, owed_to_at_creation_user_id: friend.id) + Bill.where(owing_at_creation_user_id: friend.id, owed_to_at_creation_user_id: self.id)
    balance = 0
    bills.each do |bill|
      if bill.owing_at_creation_user_id == self.id
        balance -= bill.balance
      elsif bill.owed_to_at_creation_user_id == self.id
        balance += bill.balance
      end
    end
    return balance
  end

  def highest_friend_balance
    #  
    balance = 1
    friends.each do |friend|
      self.balance_with(friend).abs > balance ? balance = self.balance_with(friend).abs : balance
    end
    balance
  end

  def friend_and_balance_array
    final = []
    self.friends.map do |friend|
      final << {id: friend.id, name: friend.name, balance: self.balance_with(friend)}
    end
    final
  end

  def bills
    return self.originally_owing_bills + self.originally_owed_to_bills
  end

  def owed_bills_info
    self.owed_bills.map do |bill|
      {balance: bill.balance, name: bill.owed_to_user.name, id: bill.owed_to_user.id}
    end
  end

  def you_are_owed_bills_info
  #  
    self.you_are_owed_bills.map do |bill|
      {balance: bill.balance, name: bill.owing_user.name, id: bill.owing_user.id}
    end
  end

  def total_balance
    #  
    self.you_are_owed - self.you_owe
  end

  def owed_bills
    final = []
    self.bills.each do |bill|
      if self.id == bill.owing_at_creation_user_id && bill.balance > 0
        final << bill
      elsif self.id != bill.owing_at_creation_user_id && bill.balance < 0
        final << bill
      end
    end
    final
  end

  def you_are_owed_bills
    final = []
    #note that < and > are flipped in logic compared to method User#you_owe
    self.bills.each do |bill|
      if self.id == bill.owing_at_creation_user_id && bill.balance < 0
        final << bill
      elsif self.id != bill.owing_at_creation_user_id && bill.balance > 0
        final << bill
      end
    end
    final
  end

  def you_owe
    total = 0
    #note that < and > are flipped in logic compared to method User#you_are_owed
    #  
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
    #  
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
