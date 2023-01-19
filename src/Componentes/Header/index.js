import React from "react";
import "./styles.css";

function Header() {
  return (
    <div class="all">
      <h1 class="titulo">Fashion Zone</h1>
      <div>
        <input class="input" type="text" placeholder="Email *"></input>
        <br></br>
        <input class="input" type="text" placeholder="Senha *"></input>
        <br></br>
        <button class="button">Fazer Login</button>
      </div>
    </div>
  );
}

export default Header;
