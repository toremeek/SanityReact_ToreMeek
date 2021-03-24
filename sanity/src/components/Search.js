import { FaSearch } from 'react-icons/fa';


const Search = ({ setSearch, sendRequest }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  return (
    <section onSubmit={sendRequest} className="moviesearch">
      <p>Søk i filmdatabasen OMDB etter dine favoritt-titler</p>
      <form>
        <input
          type="text"
          placeholder="Finn din film"
          onChange={handleSubmit}
          id="search"
        ></input>
        <label htmlFor="search">
          <button type="submit" id="button">
            <FaSearch aria-label="search" />
          </button>
        </label>
      </form>
    </section>
  );
};

export default Search;
