import {useState, useEffect} from 'react';

const useFetch = <T>(url: string): {data: T | null; isLoading: boolean} => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => {
        setData(json);
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
        console.error(error);
      });
  }, [url]);

  return {data, isLoading};
};

export default useFetch;
