import "./styles/searchBox.scss";

const Search = ({ setUsername }) => {
  return (
    <div className="search-box">
      <div className="row">
        <div className="input-box">
          <label htmlFor="search-input">
            <i className="las la-search icon-blue search-icon"></i>
          </label>
          <input
            type="text"
            placeholder="Search Github Username..."
            id="search-input"
            autoComplete="off"
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                const usernameToSearch =
                  document.getElementById("search-input").value;
                setUsername(usernameToSearch);
              }
            }}
          />

          <button
            className="button-primary"
            onClick={() => {
              const usernameToSearch =
                document.getElementById("search-input").value;
              setUsername(usernameToSearch);
            }}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
