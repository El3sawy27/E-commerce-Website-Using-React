import PropTypes from "prop-types";

const Search = ({ searchQuery, onSearchChange }) => {
  return (
    <form className="search">
      <input
        type="search"
        className="p-2 w-full border-2 border-primary-200 rounded-md"
        placeholder="Search for..."
        value={searchQuery}
        onChange={onSearchChange}
      />
    </form>
  );
};

Search.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default Search;
