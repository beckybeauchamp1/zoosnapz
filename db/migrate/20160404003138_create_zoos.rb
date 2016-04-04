class CreateZoos < ActiveRecord::Migration
  def change
    create_table :zoos do |t|
      t.string :name
      t.text :hours_of_op
      t.text :location
      t.text :transpo_info
      t.datetime :created_at
      t.datetime :updated_at
    end
  end
end
