class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.boolean :validated, null: false
      t.string :username, null: false
      t.string :passwordsalt, null: false
      t.string :passwordhash, null: false

      t.timestamps
    end
  end
end
