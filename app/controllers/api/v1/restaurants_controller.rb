module Api
    module V1
        class RestaurantsController < ApplicationController
            def index
                restaurants = Restaurant.all
                
                render json: {
                    restaurants: restaurants
                }, status: :ok
                #json形式で情報を返してリクエストが成功したとき200ok
            end
        end
    end
end
