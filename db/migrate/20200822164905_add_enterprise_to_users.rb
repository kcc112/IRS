class AddEnterpriseToUsers < ActiveRecord::Migration[6.0]
  def change
    add_reference :users, :enterprise, type: :uuid, null: true, foreign_key: true
  end
end
