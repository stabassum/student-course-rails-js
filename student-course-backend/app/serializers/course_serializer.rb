class CourseSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :description, :students
end
