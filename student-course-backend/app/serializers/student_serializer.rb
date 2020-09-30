class StudentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :full_name, :email, :time_preference
end
