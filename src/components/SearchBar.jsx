function SearchBar({ search, setSearch }) {
  return (
    <div className="search-card">
      
      <h3 className="search-title">
        Search Projects
      </h3>

      <input
        className="search-input"
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

    </div>
  )
}

export default SearchBar