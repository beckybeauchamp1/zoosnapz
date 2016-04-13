class Zoo < ActiveRecord::Base
  has_many :mammals, dependent: :destroy
  has_many :reptiles, dependent: :destroy
  # nice job using validations and dependent, destroy
  validates :name, presence: true
end
