class CreatedByOrderTable < ActiveRecord::Migration[6.0]
  def change
    add_column :orders, :created_by, :string
  end
end
