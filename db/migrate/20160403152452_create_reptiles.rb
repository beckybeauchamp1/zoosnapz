class CreateReptiles < ActiveRecord::Migration
  def change
    create_table :reptiles do |t|
      t.string :common_name
      t.string :scientific_name
      t.text :phys_descrip
      t.text :size
      t.text :geo_distribution
      t.text :status
      t.text :natural_diet
      t.text :zoo_diet
      t.text :reproduction
      t.text :life_span
      t.text :behavior
      t.text :fun_facts
      t.string :image_one
      t.string :image_two
      t.string :video
      t.belongs_to :zoo, index: true, foreign_key: true
      t.datetime :created_at
      t.datetime :updated_at
    end
  end
end
