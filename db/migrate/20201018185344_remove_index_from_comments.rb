class RemoveIndexFromComments < ActiveRecord::Migration[6.0]
  def change
    remove_index :comments, name: "index_comments_on_user_id_and_issue_id"
  end
end
