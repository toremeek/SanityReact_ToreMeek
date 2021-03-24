import { useEffect, useState } from "react";
import { request } from "../utils/SearchRequests";
import Search from "./Search";
import Movies from "./SearchMovies";

const Main = () => {
  const [search, setSearch] = useState("Star Wars");
  const [data, setData] = useState([""]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  /*kaller api-et første gang */

  const getResult = async () => {
    /*setter loading og nullstiller error */
    setLoading(true);
    setError(null);
    const responseData = await request(
      /*Fikk ikke .env-løsningen til å fungere så har bare lagt url-en her*/
      `https://www.omdbapi.com/?apikey=a994c928&s=${search}`
    );
    /*Sjekker for error*/
    if (responseData.Error) {
      setError(responseData.Error);
    }
    /*setter loading til false når dataene har kommet fra api-et */
    setLoading(false);
    /*kutter til antall ønskede resultater */
    const newData = responseData?.Search?.slice(0, 10);
    setData(newData);
  };

  const sort = () => {
    alert("funk");
  };

  const sendRequest = (event) => {
    event.preventDefault();
    getResult();
  };

  useEffect(() => {
    getResult();
  }, []);

  return (
    <div>
      <Search search={search} sendRequest={sendRequest} setSearch={setSearch} />
      <Movies
        search={search}
        sort={sort}
        loading={loading}
        data={data}
        error={error}
      />
    </div>
  );
};

export default Main;
