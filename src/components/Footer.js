import React from "react";
import "./Footer.css";
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="my-footer">
      <p>Copyright by K2B ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
