import React from "react";
import "./styles.css";

function InputFashionZone() {
  return (
    <div>
      <div class="search-wrapper">
        <label for="search">Buscar produtos</label>
        <br></br>
        <input type="search" id="search"></input>
      </div>
      <div class="product-cards">
        <div class="card">
          <div class="product"> Produto</div>
          <div class="body"> Categoria do produto</div>
        </div>
        <div class="card">
          <div class="product"> Produto</div>
          <div class="body"> Categoria do produto</div>
        </div>
        <div class="card">
          <div class="product"> Produto</div>
          <div class="body"> Categoria do produto</div>
        </div>
        <div class="card">
          <div class="product"> Produto</div>
          <div class="body"> Categoria do produto</div>
        </div>
        <div class="card">
          <div class="product"> Produto</div>
          <div class="body"> Categoria do produto</div>
        </div>
        <div class="card">
          <div class="product"> Produto</div>
          <div class="body"> Categoria do produto</div>
        </div>
      </div>
    </div>
  );
}

export default InputFashionZone;
