class Api::V1::GenresController < ApplicationController
   def index
   @genres = Genre.all
    #includes nested movies
   render json: @genres, include: [:movies]
 end

 def show
  if @genre = Genre.find(params[:id])
   render json: @genre
 else
   render json: {errors: @genre.errors.full_messages}, status: 422
 end
 end


 def create
  if @genre = Genre.create(genre_params)
   render json: @genre
  else
   render json: {errors: @genre.errors.full_messages}, status: 422
  end
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
