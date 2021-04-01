class AddForeignKeyToNotes < ActiveRecord::Migration[6.0]
  def change
		add_column :notes, :user_id, :integer
		add_foreign_key :notes, :users
  end
end
