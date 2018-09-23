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

const Navbar = props => (
  <div>
    <nav className="navbar navbar-dark fixed-top">
      <div className="navbar-brand" href="#">
        Clicky Game
      </div>
      <div>
        <h4>{props.message}</h4>
      </div>
      <div className="scores">
        <span>Score: {props.score} |</span>
        <span> Top Score: {props.topScore}</span>
      </div>
    </nav>
  </div>
);

export default Navbar;
