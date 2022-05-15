import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import "./App.css";
import { Card } from "./components/Card";
import Navbar from "./components/Navbar";

const App = () => {
  const [countries, setCountries] = useState([]);

  const { isLoading, error } = useQuery("countries", () =>
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      console.log(res.data);
      setCountries(res.data);
    })
  );

  if (isLoading)
    return (
      <div className="text-center p-5 m-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );

  if (error)
    return (
      <div
        className="toast align-items-center text-white bg-danger border-0"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="d-flex">
          <div className="toast-body">{error.message}</div>
          <button
            type="button"
            className="btn-close btn-close-white me-2 m-auto"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
      </div>
    );

  return (
    <div className="App container">
      <Navbar />
      <div>
        <h1 className="p-5">Countries Of the World</h1>
      </div>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {countries.map((elem, index) => {
          return <Card key={index} elem={elem} />;
        })}
      </div>
    </div>
  );
};

export default App;
