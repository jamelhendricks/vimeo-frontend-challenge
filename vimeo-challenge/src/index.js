import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./materialize.css";

import * as serviceWorker from "./serviceWorker";

function Monsoon() {
  return (
    <div id="monsoon-container" class="row">
      <div id="monsoon-text-container" class="col s12 m12 l6 right">
        <h3>
          <b>MONSOON III</b>
        </h3>
        <div class="row">
          <p class="">
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
      <div id="monsoon-image-container" class="col s12 m12 l6 left">
        <img src="/monsoon.jpg" alt="MOONSOON III"></img>
      </div>
    </div>
  );
}

ReactDOM.render(<Monsoon />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
