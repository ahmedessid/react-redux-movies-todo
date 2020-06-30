import React, { useState, useEffect } from "react";
import Header from "./Header";
import MoviesList from "./MoviesList";
import AddMovie from "./AddMovie";
import Footer from "./Footer";
import MyLoader from "../contentLoader/AppLoader";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="_parent">
      {loading === true ? (
        <MyLoader />
      ) : (
        <>
          <Header />
          <AddMovie
            nameValue=""
            priceValue=""
            idValue=""
            ButtonType="btn btn-dark"
            Submit="Submit"
          />
          <MoviesList />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
