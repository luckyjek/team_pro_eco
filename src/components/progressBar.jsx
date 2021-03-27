import React, { Component } from "react";

class ProgressBar extends Component {
  render() {
    return (
      <>
        <head>
          <title>Level</title>
          <link rel="stylesheet" href="style.css" />
        </head>
        <body>
          <h1>Progress Bars</h1>
          {/*<div class="bar-holder">
            <div class="bar-1">20%</div>
          </div>
          <div class="bar-holder">
            <div class="bar-2">40%</div>
          </div>
          <div class="bar-holder">
            <div class="bar-3">60%</div>
          </div>
          <div class="bar-holder">
            <div class="bar-4">80%</div>
          </div> */}
          <div class="bar-holder">
            <div class="bar-5">100%</div>
          </div>
        </body>
      </>
    );
  }
}

export default ProgressBar;
