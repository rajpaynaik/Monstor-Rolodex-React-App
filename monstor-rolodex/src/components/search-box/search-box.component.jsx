import './search-box.styles.css'

const SearchBox = ({ classSearchName, placeHolder, onSearchHandler }) => (
  <input
    className={`search-box ${classSearchName}`}
    type="search"
    placeholder={placeHolder}
    onChange={onSearchHandler}
  />
)

export default SearchBox
