import React from "react";
import "./Navbar.css";

// const styles = {
//   navStyle: {
//     height: 70,
//     backgroundColor: "#84a1a9"
//   },
//   title: {
//     fontSize: 30,
//     marginLeft: 15
//   },
//   instructions: {
//     color: "#ffffff"
//   },
//   scores: {
//     color: "#ffffff",
//     fontSize: 20,
//     marginRight: 15,
//     float: "left"
//   }
// };

const Navbar = () => (
  <div>
    <nav className="navbar navbar-dark fixed-top">
      <div className="navbar-brand" href="#">
        Clicky Game
      </div>
      <div className="scores">
        <span>Score: 0 |</span>
        <span> Top Score: 0</span>
      </div>
    </nav>
  </div>
);

export default Navbar;
