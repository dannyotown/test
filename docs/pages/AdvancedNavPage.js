import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBJumbotron, MDBIcon } from "mdbreact";
import MenuLink from "./../components/menuLink";

const AdvancedNavPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="8" className="mt-3 mx-auto">
          <MDBJumbotron>
            <h1 className="text-center">
              <MDBIcon icon="code" style={{ color: "#283593" }} /> Advanced
            </h1>
            <ul className="list-unstyled example-components-list">
              <h6 className="mt-3 grey-text">FREE </h6>
              <MenuLink to="/advanced/alerts" title="Alerts" />
              <MenuLink to="/advanced/carousel" title="Carousel" />
              <MenuLink to="/advanced/charts" title="Charts" />
              <MenuLink to="/advanced/collapse" title="Collapse" />
              <MenuLink to="/advanced/popover" title="Popover" />
              <MenuLink to="/advanced/scrollbar" title="ScrollBar" />
              <MenuLink to="/advanced/tooltips" title="Tooltips" />
              <MenuLink to="/advanced/videocarousel" title="Video Carousel" />
              {/* PRO-START */}
              <h6 className="mt-3 grey-text">PRO </h6>
              <MenuLink to="/advanced/pro/collapse" title="Accordion" />
              <MenuLink to="/advanced/pro/charts" title="Charts" />
              <MenuLink to="/advanced/pro/lightbox" title="Lightbox" />
              <MenuLink to="/advanced/pro/multicarousel" title="Multi-item Carousel" />
              <MenuLink to="/advanced/pro/scrollbar" title="ScrollBar" />
              <MenuLink to="/advanced/pro/smoothscroll" title="SmoothScroll" />
              <MenuLink to="/advanced/pro/sticky" title="Sticky Content" />
              <MenuLink to="/advanced/pro/thumbnailscarousel" title="Thumbnails Carousel" />
              {/* PRO-END */}
            </ul>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default AdvancedNavPage;
