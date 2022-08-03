import classes from "./Navbar.module.css";

import React, { useState, useEffect } from "react";

function Navbar() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      handleShow(window.scrollY > 100);
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={show ? classes.navbar__black : classes.navbar}>
      <img
        className={classes.navbar__logo}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
        alt="Netflix logo"
      />
      <img
        className={classes.navbar__avatar}
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117/"
        alt="Netflix logo"
      />
    </div>
  );
}

export default Navbar;
