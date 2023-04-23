import React from "react";
import { useState, useEffect } from "react";

import { fetchDataFromApi } from "../utils/api";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setData(null);
    setIsLoading(true);
    setError(null);

    fetchDataFromApi(url)
      .then((resData) => {
        setIsLoading(false);
        setData(resData);
      })
      .catch((err) => {
        setIsLoading(false);
        setError("Something went wrong!");
      });
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
