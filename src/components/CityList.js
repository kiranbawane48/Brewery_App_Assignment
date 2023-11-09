import { useEffect, useState } from "react";
export const CityList = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    async function fetchCities() {
      const response = await fetch("https://api.openbrewerydb.org/breweries");
      const data = await response.json();
      const uniqueCities = [...new Set(data.map((brewery) => brewery.city))];
      setCities(uniqueCities);
    }
    fetchCities();
  }, []);

  return (
    <main>
      <section className="my-5">
        <div className="my-5 flex justify-between">
          <span className="text-2xl font-semibold dark:text-slate-100 mb-5">
            All Cities ({cities.length})
          </span>
        </div>

        <div className="flex flex-wrap justify-center sm:flex-row flex-col">
      {cities.map((city, index) => (
        <div key={index} className="city-card" style={{ marginBottom: "20px" }}>
          City: {city }
        </div>
      ))}
    </div>

      </section>
    </main>
  );
};
