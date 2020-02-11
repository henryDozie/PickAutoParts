class Review < ApplicationRecord
  belongs_to :autopart
  # belongs_to :user

  validates_presence_of :review, :rating
end
