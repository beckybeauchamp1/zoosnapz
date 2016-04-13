# encoding: UTF-8
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


# Beause you have so many similar characterists/columns for both reptiles and mammals, I might another table called attributes
# Then a Mammal has many :attributes, a Reptile has_many :attributes, and then Attribute belongs_to :mammal, belongs_to :

ActiveRecord::Schema.define(version: 20160404153842) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "mammals", force: :cascade do |t|
    t.string   "common_name"
    t.string   "scientific_name"
    t.string   "zoo_location"
    t.text     "phys_descrip"
    t.text     "size"
    t.text     "geo_distribution"
    t.text     "status"
    t.text     "natural_diet"
    t.text     "zoo_diet"
    t.text     "reproduction"
    t.text     "life_span"
    t.text     "behavior"
    t.text     "fun_facts"
    t.string   "image_one"
    t.string   "image_two"
    t.string   "video"
    t.integer  "zoo_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "mammals", ["zoo_id"], name: "index_mammals_on_zoo_id", using: :btree

  create_table "reptiles", force: :cascade do |t|
    t.string   "common_name"
    t.string   "scientific_name"
    t.string   "zoo_location"
    t.text     "phys_descrip"
    t.text     "size"
    t.text     "geo_distribution"
    t.text     "status"
    t.text     "natural_diet"
    t.text     "zoo_diet"
    t.text     "reproduction"
    t.text     "life_span"
    t.text     "behavior"
    t.text     "fun_facts"
    t.string   "image_one"
    t.string   "image_two"
    t.string   "video"
    t.integer  "zoo_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "reptiles", ["zoo_id"], name: "index_reptiles_on_zoo_id", using: :btree

  create_table "zoos", force: :cascade do |t|
    t.string   "name"
    t.text     "hours_of_op"
    t.text     "location"
    t.text     "transpo_info"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_foreign_key "mammals", "zoos"
  add_foreign_key "reptiles", "zoos"
end
