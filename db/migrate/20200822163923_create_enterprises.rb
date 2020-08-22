class CreateEnterprises < ActiveRecord::Migration[6.0]
  def change
    create_table :enterprises, id: :uuid do |t|
      t.string :name, unique: true
      t.text :description

      t.timestamps
    end
  end
end
