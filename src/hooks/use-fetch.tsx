import { useState, useEffect, useCallback } from "react";
import axios from "axios";

export default function useFetch(url: string) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);

    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [url]); // eslint-disable-line react-hooks/exhaustive-deps

  return { data, loading, error, fetchData };
}
