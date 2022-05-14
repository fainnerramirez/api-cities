import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { Card } from "./components/Card";

var config = {
  method: "get",
  url: "https://restcountries.com/v3.1/all",
};

const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getAllCountries = async () => {
      const data = await axios(config)
        .then((res) => {
          console.log(res.data);
          setCountries(res.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    };

    getAllCountries();
  }, []);

  return (
    <div className="App container">
      <div>
        <h1 className="p-5">Consumo de Api Paises</h1>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {countries.map((elem, index) => {
          return <Card key={index} elem={elem} />;
        })}
      </div>
    </div>
  );
};

export default App;
