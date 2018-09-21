import React from "react";

const styles = {
  footerStyle: {
    height: 70,
    backgroundColor: "#84a1a9"
  },
  pStyle: {
    paddingTop: "20px",
    fontSize: "1rem"
  }
};

const Footer = () => (
  <div>
    <footer style={styles.footerStyle} className="Footer">
      <div className="container">
        <p style={styles.pStyle} className="text-center text-white">
          T. Behrenbeck
        </p>
      </div>
    </footer>
  </div>
);

export default Footer;
