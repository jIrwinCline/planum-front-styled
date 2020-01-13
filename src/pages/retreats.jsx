import React, { Component } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Post from "../components/Post";
import PropTypes from "prop-types";

import Container from '@material-ui/core/Container';
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";


import { connect } from "react-redux";
import { getRetreats } from "../redux/actions/dataActions";
import Navbar2 from "../components/Navbar2";
import logo from "../assets/img/planumLogo.jpg";
import pic1 from "../assets/img/paints.jpg";
import pic2 from "../assets/img/paint-shop.jpg";
import pic3 from "../assets/img/light-painting.jpg";
import { withStyles } from "@material-ui/core/styles";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import RetreatPost from "../components/RetreatPost"

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
    marginTop: 40
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
  retreatsInfoDiv: {
    textAlign: 'center', 
    padding: '20px', 
    maxWidth: '400px'
  }
};

export class products extends Component {
  componentDidMount() {
    this.props.getRetreats();
  }

  render() {
    const { classes } = this.props;
    const { retreats, loading } = this.props.data;
    

    let retreatsMarkup = !loading ? (
          retreats.map(retreat => {
              return (
                  <RetreatPost key={retreat.retreatId} retreat={retreat}/>
              );
          })
        ) : (
          <p>...Loading</p>
        );

    return (
      <>
        <IndexNavbar />
        <div className='profile-header'>
          <ProfilePageHeader />
        </div>
        <hr className={classes.line} />
        <img className={classes.image} src={logo} alt="main logo" />
        <Navbar2 />
        <Container maxWidth='xl'>
          <div className='retreats-info'>
            <br/>
            <h3>Artistry Retreats / Services</h3>
            <br/>
            <h5>Planum Magic offers a variety of services and art retreat events to promote creativity and a healthy mental state. Along with spiritual coaching for personal acheivement manifestations, and a life at it's highest postential.</h5>
            <br/>
            <div>
            <Grid className='img-grid' container>
              <Grid item sm={12} md={4}>
                <img src={pic1} alt="paints"/>
              </Grid>
              <Grid item sm={12} md={4}>
                <img src={pic2} alt="paints"/>
              </Grid>
              <Grid item sm={12} md={4}>
                <img src={pic3} alt="paints"/>
              </Grid>
            </Grid>
            <br/><br/>
            <h3>Click to Schedule or Attend Events</h3>
            <br/>
            <div className='center'>
              <KeyboardArrowDownIcon fontSize="large" />
            </div>
            <br/><br/>
            {retreatsMarkup}
            </div>
          </div>
        </Container>
        {/* <div className={classes.container}>
          <Grid container spacing={12}>
            {recentPostsMarkup}
          </Grid>
        </div> */}
      </>
    );
  }
}

products.propTypes = {
  getRetreat: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  data: state.data
});

export default connect(mapStateToProps, { getRetreats })(
  withStyles(styles)(products)
);
