import React, { Component } from 'react'
import Navbar2 from '../components/Navbar2'
import logo from '../assets/img/planumLogo.jpg'
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Post from "../components/Post";

import { connect } from 'react-redux';
import { getPosts } from '../redux/actions/dataActions'
import PropTypes from 'prop-types';

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
  center: {
    textAlign: 'center'
  }
};


class home extends Component {
    componentDidMount(){
        this.props.getPosts();
    }

    render() {
        const { classes } = this.props;
        const { posts, loading } = this.props.data;
        let recentPostsMarkup = !loading ? (
          posts.map(post => {
            if (true) {
              console.log("props: ", this.props);
              return (
                <Grid item md={4} sm={6} xs={12} >
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
            <hr className={classes.line} />
            <img className={classes.image} src={logo} alt="main logo" />
            <Navbar2 />
            <div className={classes.center}>
              <h1>Featured Content</h1>
            </div>
            <div className={classes.container}>
              <Grid container spacing={12}>
                {recentPostsMarkup}
              </Grid>
              <div /*class="collapse navbar-collapse"*/ id="product-navbar">
                <br />
                <br />
                <br />
                <ul className="product-nav-ul">
                  <li>About Planum Magic</li>
                </ul>
              </div>
              <p>Meet the Artist!</p>
              <Button
                className="btn-outline-neutral btn-round"
                color="default"
                href="/profile-page"
                target="_blank"
              >
                Profile Page
              </Button>
            </div>
          </>
        );
    }
}
        home.propTypes = {
        getPosts: PropTypes.func.isRequired,
        data: PropTypes.object.isRequired
    }

    const mapStateToProps = state => ({
        data: state.data
    })

export default connect(mapStateToProps, { getPosts })(withStyles(styles)(home));