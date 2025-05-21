import React from "react";
import { getFullYear, getFooterCopy } from "../../utils";
import "./Footer.css";

// This code defines a functional React component called Footer.
// It imports React and a CSS file (Footer.css).
function Footer() {
  return (
    <footer className="App-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
    </footer>
  );
}
export default Footer;
