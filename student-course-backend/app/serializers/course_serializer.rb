class CourseSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :students
end
