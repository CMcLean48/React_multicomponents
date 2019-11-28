import React from "react";

function Footer() {
  var currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>&copy; Crystal McLean {currentYear}</p>
    </footer>
  );
}
export default Footer;
