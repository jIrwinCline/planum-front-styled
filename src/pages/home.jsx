import React, { Component } from "react";
import Navbar2 from "../components/Navbar2";
import logo from "../assets/img/planumLogo.jpg";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Post from "../components/Post";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

import { connect } from "react-redux";
import { getPosts } from "../redux/actions/dataActions";
import PropTypes from "prop-types";

import { Button /*, Container, Row, Col*/ } from "reactstrap";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import SectionCarousel from "views/index-sections/SectionCarousel.js";

const styles = {
  card: {
    position: "relative",
    display: "flex",
    marginBottom: 20
  },
  container: {
    left: "50%",
    right: "50%",
    maxWidth: "75%",
    marginRight: "16%",
    marginLeft: "16%",
    marginTop: -30

    // margin: '80px 200px 80px 200px' //fix later!!!!!!!!!!!!!
  },
  image: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "270px"
  },
  content: {
    padding: 25,
    objectFit: "cover"
  },
  line: {
    marginTop: 30,
    marginBottom: 30,
    borderTop: "1px solid lightgrey"
  },
  center: {
    textAlign: "center"
  },
  postCard: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex"
  }
};

class home extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { classes } = this.props;
    const { posts, loading } = this.props.data;
    let recentPostsMarkup = !loading ? (
      posts.map(post => {
        if (post.featured) {
          console.log("props: ", this.props);
          return (
            <Grid className={classes.postCard} item md={4} sm={6} xs={12}>
              <Post key={post.postId} post={post} />
            </Grid>
          );
        }
      })
    ) : (
      <p>...Loading</p>
    );
    return (
      <>
        <IndexNavbar />
        <IndexHeader />
        <hr className={classes.line} />
        <img className={classes.image} src={logo} alt="main logo" />
        <Navbar2 />
        <SectionCarousel />
        <div className="center-stuff">
          <div className="brand-info">
            <h3>
              <strong>PLANUM MAGIC IS YOUR HUB FOR ALL THINGS SPIRITUAL</strong>
            </h3>
            <h4>
              Wall Art, Jewlery, Crystals, Cleansing, Spiritual Retreats, Tarot
              Readings, and more
            </h4>
          </div>
        </div>
        <div className={classes.center}>
          <br />
          <h1>Featured Content</h1>
          <br />
          <KeyboardArrowDownIcon fontSize="large" />
        </div>
        <div className={classes.container}>
          <Grid container spacing={0} alignItems="center" justify="center">
            {recentPostsMarkup}
          </Grid>
          <div class="section-split">
            {/* <div className={classes.center}>
          
                  <h1>About Planum Magic</h1>
                  <br />
                </div> */}
          </div>
          {/* <p>Meet the Artist!</p>
              <Button
                className="btn-outline-neutral btn-round"
                color="default"
                href="/artist"
                target="_blank"
              >
                Profile Page
              </Button> */}
        </div>
      </>
    );
  }
}
home.propTypes = {
  getPosts: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  data: state.data
});

export default connect(mapStateToProps, { getPosts })(withStyles(styles)(home));
