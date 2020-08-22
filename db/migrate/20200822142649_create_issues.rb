class CreateIssues < ActiveRecord::Migration[6.0]
  def change
    create_table :issues, id: :uuid do |t|
      t.text :description
      t.integer :issue_type, default: 0
      t.belongs_to :reported_by, type: :uuid, null: false
      t.belongs_to :assigned_to, type: :uuid, null: true

      t.timestamps
    end
  end
end
