import { Component } from 'react'

class Card extends Component {
  render() {
    const { monsters } = this.props

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { name, id, email } = monster
          return (
            <div className="card-container" key={id}>
              <img
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set2`}
              />
              <h2>{name}</h2>
              <h2>{email}</h2>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Card
