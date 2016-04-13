class Mammal < ActiveRecord::Base
  # I might put a validation here in case same animal gets saved twice. Probably wouldn't happen but I like to be thorough:
  belongs_to :zoo
  validates :common_name, presence: true
  validates :scientific_name, presence: true
end
