class CreateProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.string :name, null: false
      t.string :url
      t.string :video
      t.string :photo
      t.text :description, null: false
      t.date :date
      t.boolean :developing, null: false, default: false

      t.timestamps null: false
    end
  end
end
