import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./materialize.css";

import * as serviceWorker from "./serviceWorker";

function Monsoon() {
  return (
    <div id="monsoon" class="row view-container">
      <div class="col s12 m12 l6 right view-text-container">
        <h3>
          <b>MONSOON III</b>
        </h3>
        <div class="row">
          <p class="lorem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            tincidunt tortor id nunc condimentum interdum. Quisque facilisis,
            diam luctus maximus auctor, lacus nibh laoreet enim, ac facilisis
            dui metus eget lorem. Pellentesque malesuada egestas felis et
            fermentum. Nulla vulputate faucibus massa, maximus vehicula orci
            faucibus id. Nulla molestie lorem nec elit tristique, sit amet
            egestas enim volutpat. Phasellus sagittis imperdiet elit, sed
            interdum orci fringilla a. Sed iaculis placerat egestas.
          </p>
        </div>
      </div>
      <div class="col s12 m12 l6 left view-image-container">
        <img src="/monsoon.jpg" alt="MOONSOON III"></img>
      </div>
    </div>
  );
}

function Beams() {
  return (
    <div id="beams" class="row view-container grey darken-4">
      <div class="col s12 m12 l6 view-text-container">
        <h3 class="white-text">
          <b>BEAMS</b>
        </h3>
        <div class="row lorem-container">
          <p class="white-text lorem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            tincidunt tortor id nunc condimentum interdum. Quisque facilisis,
            diam luctus maximus auctor, lacus nibh laoreet enim, ac facilisis
            dui metus eget lorem. Pellentesque malesuada egestas felis et
            fermentum. Nulla vulputate faucibus massa, maximus vehicula orci
            faucibus id. Nulla molestie lorem nec elit tristique, sit amet
            egestas enim volutpat. Phasellus sagittis imperdiet elit, sed
            interdum orci fringilla a. Sed iaculis placerat egestas.
          </p>
        </div>
      </div>
      <div class="col s12 m12 l6 left view-image-container">
        <img src="/beams.jpg" alt="BEAMS III"></img>
      </div>
    </div>
  );
}

function Move() {
  return (
    <div id="move" class="row view-container">
      <div class="col s12 m12 l6 view-text-container right">
        <h3 class="white-text">
          <b>Move 2</b>
        </h3>
        <div class="row lorem-container">
          <p class="white-text lorem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            tincidunt tortor id nunc condimentum interdum. Quisque facilisis,
            diam luctus maximus auctor, lacus nibh laoreet enim, ac facilisis
            dui metus eget lorem. Pellentesque malesuada egestas felis et
            fermentum. Nulla vulputate faucibus massa, maximus vehicula orci
            faucibus id. Nulla molestie lorem nec elit tristique, sit amet
            egestas enim volutpat. Phasellus sagittis imperdiet elit, sed
            interdum orci fringilla a. Sed iaculis placerat egestas.
          </p>
        </div>
      </div>
      <div class="col s12 m12 l6 left view-image-container">
        <img src="/move.jpg" alt="Move 2"></img>
      </div>
    </div>
  );
}

ReactDOM.render(
  <div>
    <Monsoon />
    <Beams />
    <Move />
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
