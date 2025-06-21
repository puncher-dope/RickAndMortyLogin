import axios from "axios";
import { useEffect, useState } from "react";

export const useSearchCharacters = (query, pageNumber, BASE_URL) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setData([]);
  }, []);

  useEffect(() => {
    setLoading(true);
    setError(false);

    let cancel;

    axios({
      method: "GET",
      url: BASE_URL,
      params: { q: query, page: pageNumber },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((response) => {
        setData((prevState) => {
          console.log("####: response", response);
          return [...new Set([...prevState, ...response.data.results])];
        });

        setHasMore(response.data.results.length > 0);
        setLoading(false);
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          return;
        }
        setError(true);
        console.log("####: error", error);
      });

    return () => cancel();
  }, [query, pageNumber, BASE_URL]);

  return {loading, error, data, hasMore}
};
