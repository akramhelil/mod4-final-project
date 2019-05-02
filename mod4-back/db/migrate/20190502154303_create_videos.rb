class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :title
      t.integer :likes
      t.string :url

      t.timestamps
    end
  end
end
