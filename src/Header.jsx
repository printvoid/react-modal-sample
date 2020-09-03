import React from "react";

function Header(props) {
  return (
    <header>
      <button
        id="toggle"
        className="toggle"
        onClick={(e) => props.showSideBarShow()}
      >
        <i className="fa fa-bars fa-2x"></i>
      </button>

      <h1>My Landing Page</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, amet!
      </p>

      <button
        className="cta-btn"
        id="open"
        onClick={(e) => props.toggleModalVisibllity(e)}
      >
        Sign Up1
      </button>
    </header>
  );
}

export default Header;
