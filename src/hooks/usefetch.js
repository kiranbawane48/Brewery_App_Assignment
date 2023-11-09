// useFetch.js
import { useEffect, useState } from "react";

const API_BASE_URL = "https://api.openbrewerydb.org/breweries";

export const useFetch = (city, name, type) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

     
      let apiUrl = API_BASE_URL;
      const queryParams = [];

      if (city) {
        queryParams.push(`by_city=${city}`);
      }

      if (name) {
        queryParams.push(`by_name=${name}`);
      }

      if (type) {
        queryParams.push(`by_type=${type}`);
      }

      if (queryParams.length > 0) {
        apiUrl += `?${queryParams.join("&")}`;
      }

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const breweries = await response.json();
        setData(breweries);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [city, name, type]);

  return { data, loading };
};
