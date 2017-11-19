import React from "react";
import { Component } from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import { css } from "glamor";

import "./index.scss";

const overlayMenuStyle = css({
  position: "fixed",
  height: "100vh",
  width: "100vw",
  top: "0",
  background: "rgba(255,255,255,0.9)",
  zIndex: "100",
  transition: "all 0.3s ease-in",
  transform: "translateX(100vw)"
});

const inplaceMenu = css({
  transform: "translateX(0)"
});

const Header = ({ ...props }) => (
  <div
    style={{
      borderBottom: "1px solid rgba(0,0,0,0.1)",
      marginBottom: "1.45rem"
    }}
  >
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: "black",
            textDecoration: "none"
          }}
        >
          {props.title}
        </Link>
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "24px",
          alignItems: "flex-end",
          cursor: "pointer",
          zIndex: "200"
        }}
        onClick={props.onMenuClick}
      >
        <div
          style={{
            width: "32px",
            height: "3px",
            background: "black"
          }}
        />
        <div
          style={{
            width: "24px",
            height: "3px",
            background: "black"
          }}
        />
        <div
          style={{
            width: "16px",
            height: "3px",
            background: "black"
          }}
        />
      </div>
    </div>
  </div>
);

class TemplateWrapper extends Component {
  constructor() {
    super();
    this.state = {
      overlay: false
    };
  }
  menuClick = () => {
    this.setState({
      overlay: !this.state.overlay
    });
    console.log("menu state : " + (this.state.overlay ? "open" : "closed"));
  };

  componentDidMount() {
    this.setState({
      overlay: false
    });
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        <Helmet
          title="Gatsby Default Starter"
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" }
          ]}
        />
        <Header title={"Codepaper.io"} onMenuClick={this.menuClick} />
        <div
          className={`${overlayMenuStyle} ${
            this.state.overlay ? inplaceMenu : null
          }`}
        />
        <div
          style={{
            margin: "0 auto",
            maxWidth: 960,
            padding: "0px 1.0875rem 1.45rem",
            paddingTop: 0
          }}
        >
          {children()}
        </div>
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
