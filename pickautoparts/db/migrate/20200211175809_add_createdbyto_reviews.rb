class AddCreatedbytoReviews < ActiveRecord::Migration[6.0]
  def change
    add_column :reviews, :created_by, :string
  end
end
