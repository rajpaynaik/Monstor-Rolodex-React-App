import { Component } from 'react'
import './search-box.styles.css'

class SearchBox extends Component {
  render() {
    return (
      <input
        className={`search-box ${this.props.classSearchName}`}
        type="search"
        placeholder={this.props.placeHolder}
        onChange={this.props.onSearchHandler}
      />
    )
  }
}

export default SearchBox
