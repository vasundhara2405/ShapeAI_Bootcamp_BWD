import React from "react";
function Footer() {
  const CurrentDate = new Date();
  const Year = CurrentDate.getFullYear();
  return (
    <div class="footer">
      <p class="footer-p">copyright@{Year}</p>
    </div>
  );
}
export default Footer;
