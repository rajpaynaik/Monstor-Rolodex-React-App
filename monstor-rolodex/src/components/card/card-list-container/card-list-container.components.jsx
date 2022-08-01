import './card-list.styles.css'
const CardList = ({ monstersList }) => (
  <div className="card-list">
    {monstersList.map((monster) => {
      const { name, id, email } = monster
      return (
        <div className="card-container" key={id}>
          <img
            alt={`monster ${name}`}
            src={`https://robohash.org/${id}?set=set2&size=150x150`}
          />
          <h2>{name}</h2>
          <h2>{email}</h2>
        </div>
      )
    })}
  </div>
)

export default CardList
