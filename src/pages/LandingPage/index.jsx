import React, { Component } from "react";
import { css } from "glamor";

const cardStyle = css({
  height: "20rem",
  width: "13rem",
  borderRadius: "1.2rem",
  margin: "0.5rem",
  justifyContent: "center",
  boxShadow: "0px 5px 5px lightgrey",
  "@media(max-width: 960px)": {
    width: "8rem",
    height: "8rem",
    borderRadius: "0.5rem",
    margin: "0.2rem"
  }
});

const cardGradientStyle = css({
  background: "linear-gradient(to bottom, transparent , rgba(0,0,0,0.3))",
  borderRadius: "1.2rem",
  height: "100%",
  padding: "1rem",
  "@media(max-width: 960px)": {
    borderRadius: "0.5rem"
  }
});

class LandingPage extends Component {
  render() {
    const categories = ["#f33", "#f50", "#34A", "#399", "#195"];
    console.log(categories);
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap"
        }}
      >
        {categories.map(category => {
          return (
            <div key={category} style={{ background: category }} {...cardStyle}>
              <div {...cardGradientStyle}>Akash</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default LandingPage;
