class CreateUserInformations < ActiveRecord::Migration[6.0]
  def change
    create_table :user_informations, id: :uuid do |t|
      t.string :name
      t.string :surname
      t.string :phone_number
      t.belongs_to :user, type: :uuid, null: false, foreign_key: true

      t.timestamps
    end
  end
end
