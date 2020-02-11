class Autopart < ApplicationRecord
  has_many :brands
  has_many :reviews

  validates_presence_of :name, :img_url
end
