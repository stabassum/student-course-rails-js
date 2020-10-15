class Student < ApplicationRecord
  belongs_to :course

  validates :full_name, presence: true
  validates :email, presence: true
  validates :time_preference, presence: true

end
