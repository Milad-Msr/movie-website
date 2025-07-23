
function Search({ searchTerm, setSearchTerm }) {
  return (
    <div className="search">
      <div>
        <img src="./search.svg" alt="search" />
        
        <input 
          type="text" 
          value={searchTerm}
          placeholder="Search Through Thousands of Movies" 
          onChange={event => setSearchTerm(event.target.value)}
        />
      </div>
    </div>

  )
}

export default Search