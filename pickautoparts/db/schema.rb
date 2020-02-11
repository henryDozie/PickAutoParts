# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_02_10_215953) do

  create_table "autoparts", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "img_url"
    t.integer "order_id", null: false
    t.integer "brand_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["brand_id"], name: "index_autoparts_on_brand_id"
    t.index ["order_id"], name: "index_autoparts_on_order_id"
  end

  create_table "brands", force: :cascade do |t|
    t.string "name"
    t.string "img_url"
    t.integer "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_brands_on_user_id"
  end

  create_table "orders", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "shipping_Address"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_orders_on_user_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.string "review"
    t.integer "rating"
    t.integer "user_id", null: false
    t.integer "autopart_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["autopart_id"], name: "index_reviews_on_autopart_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "address"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "autoparts", "brands"
  add_foreign_key "autoparts", "orders"
  add_foreign_key "brands", "users"
  add_foreign_key "orders", "users"
  add_foreign_key "reviews", "autoparts"
  add_foreign_key "reviews", "users"
end
