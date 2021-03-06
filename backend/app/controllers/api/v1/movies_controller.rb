class Api::V1::MoviesController < ApplicationController

 before_action :set_genre

  def index
    @movies = Movie.all
    render json: @movies
 end

 def show
   @movie = Movie.find(params[:id])
   render json: @movie
 end

 def create
   @movie = @genre.movies.new(movie_params)

  if  @movie.save
   render json: @movie
 else
   render json: {errors: @movie.errors.full_messages}, status: 422
 end

 end

 def destroy
   @movie = Movie.find(params[:id])
  #  @genre = Genre.find(@movie.genre_id)
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

 def set_genre
  @genre = Genre.find_by_id(params[:genre_id])
end

 private
 def movie_params
   params.require(:movie).permit(:title, :genre_id)
 end
end
