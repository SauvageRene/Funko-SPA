class Funko < ApplicationRecord
    belongs_to :collection
    has_many :reviews
end
