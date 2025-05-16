
const SearchFilter = () => {
  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Pesquisar produtos..."
      />
      <span className="input-group-text bg-white">
        <i className="bi bi-search"></i>
      </span>
    </div>
  );
};

export default SearchFilter;
