class AddStatusToIssue < ActiveRecord::Migration[6.0]
  def change
    add_column :issues, :status, :integer, default: 0
  end
end
