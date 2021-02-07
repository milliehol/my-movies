class Genre < ApplicationRecord
   has_many :movies
   accepts_nested_attributes_for :movies
end
