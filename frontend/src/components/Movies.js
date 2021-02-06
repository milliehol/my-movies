import React from 'react'
import {connect} from 'react-redux'
import {fetchMovies} from '../actions/fetchMovies'
import Movie from './Movie';

class Movies extends React.Component {



//  componentDidMount() {
//this.props.fetchMovies(genreId)
//}

  render() {



     const { movies, genreId, deleteMovie } = this.props;
     this.props.fetchMovies({genreId: this.props.genreId })
     console.log(genreId)
     console.log(movies)
     const associatedMovies = movies.filter(movie => movie.genre_Id === genreId);

     const movieList = associatedMovies.map((movie, index) => {
       return <Movie key={index} movie={movie} deleteMovie={deleteMovie} />
     })

     return (
       <div>
         <ul>
           {movieList}
         </ul>
       </div>
     );
   }

 };

 const mapStateToProps = state => {
   return {
     movies: state.movies
   }
 }


export default connect(mapStateToProps, {fetchMovies})(Movies)
