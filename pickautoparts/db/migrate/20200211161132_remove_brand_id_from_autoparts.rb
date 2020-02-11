class RemoveBrandIdFromAutoparts < ActiveRecord::Migration[6.0]
  def change
    remove_column :autoparts, :brand_id
  end
end
