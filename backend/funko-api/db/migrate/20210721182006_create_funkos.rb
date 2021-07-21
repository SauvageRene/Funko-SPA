class CreateFunkos < ActiveRecord::Migration[6.1]
  def change
    create_table :funkos do |t|
      t.string :name
      t.string :image
      t.string :series

      t.timestamps
    end
  end
end
