import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/card/card-list.components'
import Search from './components/search-box/search-box.component'

const App = () => {
  console.log('render')
  const [searchField, setSearchField] = useState('')
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users))
  }, [])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
  }

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((str) =>
      str.name.toLocaleLowerCase().includes(searchField),
    )
    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchField])

  return (
    <div className="App">
      <h1 className="app-title">Monstor Rolodex</h1>
      <Search
        onSearchHandler={onSearchChange}
        classSearchName={'search-box'}
        placeHolder={'search monster'}
      />
      <Card monsters={filteredMonsters} />
    </div>
  )
}

export default App
