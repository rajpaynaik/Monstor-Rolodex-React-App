import { Component } from 'react'
import './App.css'
import Card from './components/card-list/card-list.components'

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchString: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then(
        (users) => this.setState({ monsters: users }),
        () => {},
      )
  }

  onSearchChange = (event) => {
    const searchS = event.target.value.toLocaleLowerCase()

    this.setState({ searchString: searchS })
  }

  render() {
    const filteredMonsters = this.state.monsters.filter((str) =>
      str.name.toLocaleLowerCase().includes(this.state.searchString),
    )

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monster"
          onChange={this.onSearchChange}
        />
        <Card monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App
