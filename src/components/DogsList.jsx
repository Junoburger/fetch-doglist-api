import React, { PureComponent } from 'react'
import './DogsList.css'
import { Link } from 'react-router-dom'


export default class DogsList extends PureComponent {
  renderDogBreed(breed) {
    return <li key={breed}>
  <Link className="Link" to={ `/dog-breeds/${breed}` }>{breed}</Link>
</li>
  }

  render() {
    const { dogBreeds } = this.props
    return (
      <div className="dogs-list">
        <h1>Dogs List</h1>

        { !dogBreeds && 'Loading...' }

        {
          dogBreeds &&
          <ul className="DogsList">{ dogBreeds.map(this.renderDogBreed) }</ul>
        }
      </div>
    )
  }
}
