# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180306203959) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bills", force: :cascade do |t|
    t.float "total_bill_amount", null: false
    t.float "amount_originally_owed", null: false
    t.integer "owed_by_user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["owed_by_user_id"], name: "index_bills_on_owed_by_user_id"
  end

  create_table "friendships", force: :cascade do |t|
    t.integer "user1_id", null: false
    t.integer "user2_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user1_id", "user2_id"], name: "index_friendships_on_user1_id_and_user2_id", unique: true
    t.index ["user1_id"], name: "index_friendships_on_user1_id"
    t.index ["user2_id"], name: "index_friendships_on_user2_id"
  end

  create_table "group_memberships", force: :cascade do |t|
    t.integer "group_id", null: false
    t.integer "group_member_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["group_id", "group_member_id"], name: "index_group_memberships_on_group_id_and_group_member_id", unique: true
    t.index ["group_id"], name: "index_group_memberships_on_group_id"
    t.index ["group_member_id"], name: "index_group_memberships_on_group_member_id"
  end

  create_table "groups", force: :cascade do |t|
    t.integer "group_owner_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "payments", force: :cascade do |t|
    t.integer "bill_id"
    t.integer "paying_user_id"
    t.integer "submitting_user_id"
    t.float "payment_amount"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["paying_user_id"], name: "index_payments_on_paying_user_id"
    t.index ["submitting_user_id"], name: "index_payments_on_submitting_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.float "current_user_balance", default: 0.0, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end