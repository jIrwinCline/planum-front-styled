
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";
//MUI
import VpnKeyIcon from "@material-ui/icons/VpnKey";


function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                {/* <a
                  href="#"
                  target="_blank"
                >
                  Contact
                </a> */}
                <h5>
                  <strong>Contact Us!</strong>
                </h5>
                <div style={{ textAlign: "left" }}>
                  <p>Inqueries by phone: (253) 441-9910</p>
                  <p>Inqueries by email: Planum.Magic@gmail.com</p>
                </div>
              </li>
              <li>
                  <a
                    data-placement="bottom"
                    href="/login"
                    target="_blank"
                    title="Admin"
                  >
                    <VpnKeyIcon  />
                    <p className="d-lg-none"> Admin</p>
                  </a>
                {/* <a href="#" target="_blank">
                  Licenses
                </a> */}
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made by Otigin Studios
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
