import {useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = (url, headers, params, depend) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(url, {
        params: params,
        headers: headers,
      });
      setData(response.data);
      setLoading(false);
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [depend]);
  return {data, error, loading};
};

export default useFetch;
