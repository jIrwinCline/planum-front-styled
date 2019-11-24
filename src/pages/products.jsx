import React, { Component } from "react";
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Post from '../components/Post';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getPosts } from '../redux/actions/dataActions'

export class products extends Component {
    componentDidMount(){
        this.props.getPosts();
    }

    render() {
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
        <Grid container spacing={10}>
                {recentPostsMarkup}
        </Grid>
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

export default connect(mapStateToProps, { getPosts })(products);
