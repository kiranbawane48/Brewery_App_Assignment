import {Hero} from "../components/Hero";

function Home() {
  return (
    <div className="container">
    <Hero />
      
    </div>
  );
}

export default Home;

// src/pages/Home.js
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function Home() {
//   const [isNewUser, setIsNewUser] = useState(true);

//   return (
//     <div className="container">
//       <h1>Welcome to Your App</h1>
//       <p>{isNewUser ? 'New user? Register' : 'Already have an account? Login'}</p>
//       <Link to={isNewUser ? '/register' : '/login'}>
//         <button>{isNewUser ? 'Register' : 'Login'}</button>
//       </Link>
//       <button onClick={() => setIsNewUser(!isNewUser)}>
//         {isNewUser ? 'Already have an account? Login' : 'New user? Register'}
//       </button>
//     </div>
//   );
// }

// export default Home;


// / // src/pages/Home.js
// // Home.js
// import React, { useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import { useFetch } from "../hooks/usefetch"; // Import your useFetch custom hook
// import Card from "../components/Card"; // Import your Card component

// export const Home = ({ apiPath }) => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [query, setQuery] = useState(searchParams.get("q") || "");
//   const queryTerm = query.trim();

//   const handleSearch = () => {
//     setSearchParams({ q: queryTerm });
//   };

//   const { data: breweries } = useFetch(apiPath, queryTerm);

//   return (
//     <main>
//       <section className="py-7">
//         <p className="text-3xl text-gray-700 dark:text-white">
//           {breweries.length === 0
//             ? `No breweries found for '${queryTerm}'`
//             : `Breweries for '${queryTerm}'`}
//         </p>
//         <input
//           type="text"
//           placeholder="Search by city, name, or type"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//         />
//         <button onClick={handleSearch}>Search</button>
//       </section>
//       <section className="max-w-7xl mx-auto py-7">
//         <div className="flex justify-start flex-wrap">
//           {breweries.map((brewery) => (
//             <Card key={brewery.id} brewery={brewery} />
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Home;
