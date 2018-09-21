import React from "react";

const styles = {
  navStyle: {
    height: 70,
    backgroundColor: "#84a1a9"
  },
  title: {
    fontSize: 30,
    marginLeft: 15
  },
  instructions: {
    color: "#ffffff"
  },
  scores: {
    color: "#ffffff",
    fontSize: 20,
    marginRight: 15,
    float: "left"
  }
};

const Navbar = () => (
  <div>
    <nav style={styles.navStyle} className="navbar navbar-dark fixed-top">
      <div style={styles.title} className="navbar-brand" href="#">
        Clicky Game
      </div>
      <div style={styles.scores}>
        <span>Score: 0 |</span>
        <span> Top Score: 0</span>
      </div>
    </nav>
  </div>
);

export default Navbar;
