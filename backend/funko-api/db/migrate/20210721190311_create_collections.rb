class CreateCollections < ActiveRecord::Migration[6.1]
  def change
    create_table :collections do |t|
      t.string :name
      t.references :funkos_id

      t.timestamps
    end
  end
end
