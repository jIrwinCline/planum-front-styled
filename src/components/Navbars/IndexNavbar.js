
import React from "react";
import { connect } from "react-redux";
// import MyButton from "../util/MyButton";
import PostProduct from "../PostProduct";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";
import ChangeHistoryIcon from "@material-ui/icons/ChangeHistory";
// REACT ROUTER
import { Link } from 'react-router-dom'

function IndexNavbar(props) {
  const { authenticated } = props;
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 50 ||
        document.body.scrollTop > 50
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 51 ||
        document.body.scrollTop < 51
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  const postButton = authenticated ? <PostProduct /> : null;
  let navClass = `important-nav ${classnames("fixed-top", navbarColor)}`
  return (
    <Navbar className={navClass} expand="lg">
      <Container>
        <div className="navbar-translate">
          <Link to='/'>
            <NavbarBrand
              data-placement="bottom"
              href="/"
              target="_blank"
              title="Return to home"
            >
              <h5>
                <ChangeHistoryIcon /> <strong>P/M</strong>
              </h5>
            </NavbarBrand>
          </Link>
          {postButton}
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
          {/* <div className="middle-nav-items">
            <div className='store'> */}
              <NavItem>
                <NavLink>
                  <Link to={{
                        pathname: "/products",
                        state: {
                          pageCategory: "painting"
                        }
                      }}>
                  
                    {/*<i className="nc-icon nc-book-bookmark" />*/} <h5 className="nav-items">Store</h5>
                  </Link>
                </NavLink>
              </NavItem>
              {/* </div>
              <div className='blog'> */}

              {/* -----------------BLOG BUTTON--------------------------------------------- */}
              {/* <NavItem >
                  <NavLink
                    target="_blank"
                  >
                    <Link to='/blog'>
                      <h5  className="nav-items">Blog</h5>
                    </Link>
                  </NavLink>
              </NavItem> */}
              {/* -------------------------------------------------------------- */}
              {/* </div>
            </div> */}
            <hr/>
            {/* <NavItem>
              <NavLink
                data-placement="bottom"
                href="#"
                target="_blank"
                title="Follow us on Twitter"
              >
                <i className="fa fa-twitter" />
                <p className="d-lg-none">Twitter</p>
              </NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.facebook.com/groups/521575651907265/"
                target="_blank"
                title="Like us on Facebook"
              >
                <i className="fa fa-facebook-square" />
                <p className="d-lg-none">Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/planum_magic/?hl=en"
                target="_blank"
                title="Follow us on Instagram"
              >
                <i className="fa fa-instagram" />
                <p className="d-lg-none">Instagram</p>
              </NavLink>
            </NavItem>
            
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

const mapStateToProps = state => ({
  authenticated: state.user.authenticated
});

export default connect(mapStateToProps)(IndexNavbar);
