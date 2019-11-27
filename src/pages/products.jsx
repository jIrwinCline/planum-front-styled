import React, { Component } from "react";
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Post from '../components/Post';
import PropTypes from 'prop-types';

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
    width: "12%"
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

export class products extends Component {
    componentDidMount(){
        this.props.getPosts();
    }

    render() {
        const { classes } = this.props;
        const { posts, loading } = this.props.data;
        let recentPostsMarkup = !loading ? (
          posts.map(post => (
            <Grid item sm={4} xs={12}>
              <Post key={post.postId} post={post} />
            </Grid>
          ))
        ) : (
          <p>...Loading</p>
        );
        return (
          <>
            <hr className={classes.line}/>
            <img className={classes.image} src={logo} alt="main logo" />
            <Navbar2 />
            <div className={classes.container}>
              <Grid container spacing={12}>
                      {recentPostsMarkup}
              </Grid>
            </div>
          </>
        );
    }
    }

    products.propTypes = {
        getPosts: PropTypes.func.isRequired,
        data: PropTypes.object.isRequired
    }

    const mapStateToProps = state => ({
        data: state.data
    })

export default connect(mapStateToProps, { getPosts })(withStyles(styles)(products));
