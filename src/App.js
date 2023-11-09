import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AllRoutes from './routes/AllRoutes';
import Footer from './components/Footer';
import Header from "./components/Header";
function App() {
  return (
    <Router>
      <div>
        <Header />
        <AllRoutes />
       <Footer />
      </div>
    </Router>
  );
}

export default App;