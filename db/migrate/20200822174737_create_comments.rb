class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments, id: :uuid do |t|
      t.text :comment
      t.belongs_to :user, type: :uuid, null: false, foreign_key: true
      t.belongs_to :issue, type: :uuid, null: false, foreign_key: true
    end
  end
end
