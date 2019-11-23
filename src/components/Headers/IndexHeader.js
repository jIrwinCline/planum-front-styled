
/*eslint-disable*/
import React from "react";
//MUI Stuff
import GitHubIcon from "@material-ui/icons/GitHub";
// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/buddha-background.jpg") + ")"
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">Planum Magic</h1>
              <div className="fog-low">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
              <div className="fog-low right">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
            </div>
            <h2 className="presentation-subtitle text-center">
              Artistry, Inspiration, Spirituality
            </h2>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")"
          }}
        />
        {/* <h6 className="category category-absolute">
          Source code and creator at{" "}
          <a href="https://github.com/jIrwinCline" target="_blank">
            <GitHubIcon color='secondary'/>
          </a>
        </h6> */}
      </div>
    </>
  );
}

export default IndexHeader;
