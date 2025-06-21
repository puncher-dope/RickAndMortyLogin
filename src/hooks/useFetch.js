import { useCallback, useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchUrl = useCallback(async () => {
    setData(null);
    setError(null);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Error fetching data");
      }
      const serverData = await response.json();
      if (!serverData) {
        throw new Error("No data received");
      }
      setData(serverData);
    } catch (error) {
      console.log("error fetching data", error);
      setError(error);
    }
  }, [url]);

  useEffect(() => {
    fetchUrl();
  }, [fetchUrl, url]);

  return {
    data,
    error,
  };
};
