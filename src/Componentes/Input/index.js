import React from "react";
import "./styles.css";
import Foto1 from "./Foto.webp";
import Foto2 from "./Foto2.jpg";
import Foto3 from "./Foto3.jpg";
import Foto4 from "./Foto4.jpg";
import Foto5 from "./Foto5.webp";
import Foto6 from "./Foto6.webp";

function InputFashionZone() {
  return (
    <div class="wrapper">
      <div id="search-container">
        <input
          type="search"
          id="search-input"
          placeholder="Pesquisar produtos..."
        />
        <button id="search">Pesquisar</button>
      </div>
      <div id="buttons">
        <button class="button-value" onclick="filtrarProduto('Tudo')">
          Tudo
        </button>
        <button class="button-value" onclick="filtrarProduto('Vestidos')">
          Vestidos
        </button>
        <button class="button-value" onclick="filtrarProduto('Shorts')">
          Shorts
        </button>
        <button class="button-value" onclick="filtrarProduto('Tenis')">
          Tenis
        </button>
        <button class="button-value" onclick="filtrarProduto('Casaco')">
          Casaco
        </button>
        <section class="skill-bg">
          <div class="skills">
            <figure>
              <img src={Foto1} />
              <figcaption>
                Saia colorida<br></br>Categoria: Saias<br></br>Preço: R$xx
                <br></br>Tecido: Poliéster<br></br>Tamanho: PP
              </figcaption>
            </figure>
            <figure>
              <img src={Foto2} />
              <figcaption>
                Casaco Listrado Vermelho e Branco<br></br>Categoria: Casacos
                <br></br>Preço: R$xx <br></br>
                Tecido: Algodão <br></br> Tamanho: P
              </figcaption>
            </figure>
            <figure>
              <img src={Foto3} />
              <figcaption>
                Tênis de corrida<br></br>Categoria: Tenis<br></br>Preço: R$xx
                <br></br>Material: Tecido mesh<br></br>Tamanho: 34
              </figcaption>
            </figure>
            <figure>
              <img src={Foto4} />
              <figcaption>
                Vestido infantil colorido<br></br>Categoria: Vestidos<br></br>
                Preço: R$xx<br></br>Material: Algodão<br></br>Tamanho: 8
              </figcaption>
            </figure>
            <figure>
              <img src={Foto5} />
              <figcaption>
                Camisa estampada<br></br>Categoria: Camisas<br></br>Preço: R$xx
                <br></br>Material: Algodão<br></br>Tamanho: M
              </figcaption>
            </figure>
            <figure>
              <img src={Foto6} />
              <figcaption>
                {" "}
                Camisa Florida <br></br> Categoria: Camisas <br></br> Preço:
                R$xx <br></br> Material: Poliéster <br></br> Tamanho: M
              </figcaption>
            </figure>
          </div>
        </section>
      </div>
      <div id="products"></div>
    </div>
  );
}

export default InputFashionZone;
