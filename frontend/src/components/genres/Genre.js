import React, { Component, PropTypes } from 'react';





  const Genre = (props) => {

    console.log(props)
    // let account = props.accounts[props.match.params.id - 1]
    let genre = props.genres.filter(genre => genre.id == props.match.params.id)[0]

    console.log(genre)
    return (

      <div>
        <h2>
          {genre.name}
        </h2>

        <h4>Edit Genre</h4>
      
      </div>
    )


  }

export default Genre;
