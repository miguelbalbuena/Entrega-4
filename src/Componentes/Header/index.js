import React from "react";
import "./styles.css";

function Header() {
  return (
    <div>
      <h1>Fashion Zone</h1>
      <div class="input">
        <input type="text" placeholder="Email *"></input>
        <br></br>
        <input type="text" placeholder="Senha *"></input>
      </div>
    </div>
  );
}

export default Header;
