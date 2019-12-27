import React, { Component } from "react";
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Post from '../components/Post';
import PropTypes from 'prop-types';

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import PostPage from "components/PostPage.js";

import { connect } from 'react-redux';
import { getPosts } from '../redux/actions/dataActions'
import Navbar2 from "../components/Navbar2";
import logo from "../assets/img/planumLogo.jpg";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  card: {
    position: "relative",
    display: "flex",
    marginBottom: 20
  },
  container: {
    left: '50%',
    right: '50%',
    maxWidth: '75%',
    marginRight: '16%',
    marginLeft: '16%',
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
  }
};

export class product extends Component {
    render() {
    const { classes } = this.props;
        return (
            <>
            <IndexNavbar />
            <div className='profile-header'>
            <ProfilePageHeader />
            </div>
            <hr className={classes.line} />
            <img className={classes.image} src={logo} alt="main logo" />
            <div>
                <PostPage/>
            </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
        data: state.data
    })

export default connect(mapStateToProps)(withStyles(styles)(product))
