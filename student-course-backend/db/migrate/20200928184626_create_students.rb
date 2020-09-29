class CreateStudents < ActiveRecord::Migration[6.0]
  def change
    create_table :students do |t|
      t.string :full_name
      t.string :email
      t.string :time_preference
      t.references :course, null: false, foreign_key: true

      t.timestamps
    end
  end
end
