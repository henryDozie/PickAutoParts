class Autopart < ApplicationRecord
  # has_many :brands
  has_many :reviews
  # belongs_to :orders

  validates_presence_of :name, :img_url, :price
end
