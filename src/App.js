import axios from "axios";
import { useEffect } from "react";
import "./App.css";

var config = {
  method: "get",
  url: "https://api.countrystatecity.in/v1/countries",
  headers: {
    "X-CSCAPI-KEY": "API_KEY",
  },
};

const App = () => {
  useEffect(() => {
    axios(config)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Hello wordl!</h1>
    </div>
  );
};

export default App;
