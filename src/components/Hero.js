import { Link } from "react-router-dom";
import "./Hero.css";
export const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <div className="text">
          <h1 className="text-5xl font-bold">All Cities</h1>
          <p className="text-2xl my-7 px-1 dark:text-slate-300">
            Brewery App  is the world's most popular and authoritative source to find the loction. </p>
          <Link to="/cities" type="button" className="cta-button">
            Explore eCities
          </Link>
        </div>
      </div>
      <div className="hero-image">
        <img
          className="rounded-lg"
          src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60" /* Reduced image width */
          alt="CodeBook Hero Section"
        />
      </div>
    </section>
  );
};
