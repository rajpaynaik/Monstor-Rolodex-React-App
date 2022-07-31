import { Component } from 'react'

import CardList from './card-list-container/card-list-container.components'

class Card extends Component {
  render() {
    const { monsters } = this.props

    return <CardList monstersList={monsters} />
  }
}

export default Card
