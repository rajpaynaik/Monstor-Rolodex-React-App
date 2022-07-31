import { Component } from 'react'
import './App.css'
import Card from './components/card/card-list.components'
import Search from './components/search-box/search-box.component'

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
        <h1 className="app-title">Monstor Rolodex</h1>
        <Search
          onSearchHandler={this.onSearchChange}
          classSearchName={'search-box'}
          placeHolder={'search monster'}
        />
        <Card monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App
