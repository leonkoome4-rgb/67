function SearchBar({ search, setSearch }) {
  return (
    <div className="card">
      <input
        className="input"
        placeholder="Search projects..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  )
}

export default SearchBar