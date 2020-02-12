class User < ApplicationRecord
  # encrypt password
  has_secure_password

  # Model associationss
  has_many :orders, foreign_key: :created_by
  has_many :reviews, foreign_key: :created_by
  # has_many :brands, foreign_key: :created_by
  # Validations
  validates :name, presence: true
  validates :email, uniqueness: true, presence: true
  validates :password_digest, presence: true
  validates :address, presence: true
end
