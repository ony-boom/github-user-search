import "./App.css";
import Banner from "./components/Banner";
import Search from "./components/Search";
import Result from "./components/Result";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [userToSearch, setUserToSearch] = useState("");
  const [userData, setUserData] = useState({});
  const [Clicked, setClick] = useState(true);

  const fetchUserData = async (username) => {
    if (username) {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}`
        );
        setUserData(response.data);
      } catch (err) {
        setUserData(err);
      } finally {
        wasClicked();
      }
    }
  };

  const getUsernameToSearch = (username) => {
    if (username) {
      setUserToSearch(username);
    }
  };

  useEffect(() => {
    fetchUserData(userToSearch);
    setClick(true);
  }, [userToSearch]);

  const wasClicked = () => {
    setClick(false);
  };

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <div className="App">
      <Banner />
      <Search setUsername={getUsernameToSearch} />
      {Object.keys(userData).length === 0 ? (
        <Result />
      ) : userData.message ? (
        <Result message={userData.message} />
      ) : Clicked ? (
        <Result clicked={Clicked} userToFind={userToSearch} />
      ) : (
        <Result {...userData} />
      )}
    </div>
  );
}

export default App;
