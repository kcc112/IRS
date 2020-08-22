class AddIndexToEnterprises < ActiveRecord::Migration[6.0]
  def change
    add_index :enterprises, :name, unique: :true
  end
end
