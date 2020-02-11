class Order < ApplicationRecord
  has_many :autoparts
  
  validates_presence_of :shipping_Address, :created_by
end
