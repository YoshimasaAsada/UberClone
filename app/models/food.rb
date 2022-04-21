class Food < ApplicationRecord
    belongs_to :restaurant
    belongs_to :order, optional: true
    #外部キーのnillいける
    has_one :line_food
end