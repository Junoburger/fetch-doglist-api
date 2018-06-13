import React from 'react'
import { Link } from 'react-router-dom'
import './DogBreedImages.css'

export default function DogBreedImages (props) {
  // const { images } = this.props
  return (
    <div className="dog-breed-images">
      <h1>Dogs Breed Images</h1>


      <Link to="/">Go back to the index</Link>
      <div>
  { props.images && props.images.map(url => <img className="Dogs" src={ url } alt="Dog" />) }
  { !props.images && 'Loading...' }
</div>
    </div>
  )
}
