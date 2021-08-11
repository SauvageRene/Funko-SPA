class Funko < ApplicationRecord
    belongs_to :collection
    has_many :comments
end
