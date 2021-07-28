class CreateFunkos < ActiveRecord::Migration[6.1]
  def change
    create_table :funkos do |t|
      t.string :name
      t.string :image
      t.string :series
      t.boolean :wishlist, default: false
      t.references :collection
      t.timestamps
    end
  end
end
