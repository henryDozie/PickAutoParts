class AddPriceToAutopart < ActiveRecord::Migration[6.0]
  def change
    add_column :autoparts, :price, :float
  end
end
