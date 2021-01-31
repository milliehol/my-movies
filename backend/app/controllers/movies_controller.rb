class MoviesController < ApplicationController
  def index
   @movies = Movie.all
   render json: @movies
 end

 def create
   @movie = Movie.create(movie_params)
   render json: @movie
 end

 def destroy
   @movie = Movie.find_by_id(params[:id])
   if @movie.destroy
     render json: @movie
   else
     render json: {errors: @movie.errors.full_messages}, status: 422
   end
 end

 def update
   @movie = Movie.find_by_id(params[:id])

   @movie.update(movie_params)
   if @movie.save
     render json: @movie
   else
     render json: {errors: @movie.errors.full_messages}, status: 422
   end
 end

 private
 def movie_params
   params.permit(:title, :genre_id, genre_attributes: [:name])
 end
end
