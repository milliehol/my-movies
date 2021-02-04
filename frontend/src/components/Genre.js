import React, { Component, PropTypes } from 'react';
import {Redirect} from 'react-router-dom'
import GenreEdit from './GenreEdit'




  const Genre = (props) => {

    console.log(props)
    // let account = props.accounts[props.match.params.id - 1]
    let genre = props.genres.filter(genre => genre.id == props.match.params.id)[0]

    console.log(genre)
    return (

      <div>
        <h2>
          {genre ? genre.name : null}
        </h2>

        <h4>Edit Genre</h4>
        console.log(genre)
         <GenreEdit genre={genre}/>
      </div>
    )


  }

export default Genre;
