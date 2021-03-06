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

ActiveRecord::Schema.define(version: 20170524215946) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "pledges", force: :cascade do |t|
    t.integer  "reward_id",  null: false
    t.integer  "backer_id",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["reward_id", "backer_id"], name: "index_pledges_on_reward_id_and_backer_id", unique: true, using: :btree
  end

  create_table "projects", force: :cascade do |t|
    t.string   "title",          null: false
    t.string   "url",            null: false
    t.text     "description",    null: false
    t.string   "main_image_url"
    t.string   "end_date",       null: false
    t.integer  "funding_goal",   null: false
    t.text     "details"
    t.integer  "creator_id",     null: false
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.string   "category"
    t.index ["creator_id"], name: "index_projects_on_creator_id", using: :btree
    t.index ["title", "creator_id"], name: "index_projects_on_title_and_creator_id", unique: true, using: :btree
    t.index ["url"], name: "index_projects_on_url", unique: true, using: :btree
  end

  create_table "rewards", force: :cascade do |t|
    t.integer  "project_id",   null: false
    t.string   "title",        null: false
    t.integer  "amount",       null: false
    t.integer  "limit",        null: false
    t.text     "description",  null: false
    t.string   "deliver_date"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.index ["project_id"], name: "index_rewards_on_project_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
