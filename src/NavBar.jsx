import React from "react";

function NavBar() {
  return (
    <nav>
      <div class="logo">
        <img src="https://randomuser.me/api/portraits/men/76.jpg" alt="user" />
      </div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Contact Me</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
