import React, {PureComponent} from 'react'
import CocktailImages from './CocktailImages'
import request from 'superagent'

export default class DogBreedImagesContainer extends PureComponent {
  state = { cocktails: null }

  componentDidMount() {

    request
      .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink`)
      .then(response => this.updateCocktails(response.body.message))
      .catch(console.error)
  }

  updateImages(cocktails) {
    this.setState({
      cocktails: cocktails
    })
  }

  render() {
    return <CocktailImages cocktails={ this.state.cocktails } />
  }
}
