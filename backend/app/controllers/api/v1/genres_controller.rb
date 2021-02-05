class Api::V1::GenresController < ApplicationController
   def index
   @genres = Genre.all
   render json: @genres
 end

 def create
   @genre = Genre.create(genre_params)
   render json: @genre
 end

 def update
   @genre = Genre.find(params[:id])

   if @genre.update(genre_params)
     @genre.save
     render json: @genre
   else
     render json: {errors: @genre.errors.full_messages}, status: 422
   end
 end


 private

 def genre_params
   params.require(:genre).permit(:name)
 end
end
