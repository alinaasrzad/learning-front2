import React from 'react'
import { useState } from 'react';
const Movie = () => {
    const [event, setevent] = useState([
        {title: "morning show ",id :1}
        {title: "friends ",id :2}
        {title: "hustle ",id :3}
        {title: "im am good ",id :4}
        {title: "series ",id :5}
    ]) 
  return (
    <div>Movie</div>
  )
}

export default Movie;