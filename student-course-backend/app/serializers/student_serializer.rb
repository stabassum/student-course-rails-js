class StudentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :full_name, :email, :time_preference, :course
end

# serializers will dry out the code