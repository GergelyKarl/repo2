import React, {
  useEffect,
  useState,
} from "react";

const useFetch = (
  url: string = "",
  options : any = null
) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] =
    useState<Boolean>(false);

  useEffect(() => {
    let isMounted: boolean = true;

    setLoading(true);
    fetch(url, options!)
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setData(data);
          setError(null);
        }
      })
      .catch((error) => {
        if (isMounted) {
          setError(error);
          setData(null);
        }
      })
      .finally(
        () => isMounted && setLoading(false)
      );
  }, [url, options]);

  return { loading, error, data };
};

export default useFetch;
