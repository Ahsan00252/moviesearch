import React, { useState, useContext, useEffect } from "react";
import Usefetch from "../useFetch";

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("spider man");
  const { isLoading, error, data: movies } = Usefetch(`&s=${query}`);

  return (
    <AppContext.Provider value={{ isLoading, movies, error, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
