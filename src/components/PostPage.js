import React, { Component } from 'react'

import { connect } from 'react-redux';
import { getPosts } from '../redux/actions/dataActions'
import Navbar2 from "../components/Navbar2";
import logo from "../assets/img/planumLogo.jpg";
import { withStyles } from "@material-ui/core/styles";

import { getPost, uploadImage } from '../redux/actions/dataActions';

const styles = {
    
}

export class PostPage extends Component {
    state = {
        imageIndex: 0
    };
    render() {
        const {
            classes,
            post: {
                postId,
                name,
                images,
                itemCategory,
                link,
                info,
                price,
                available,
                highend
            },
            UI: { loading },
            user: { authenticated }
        } = this.props;
        return (
            <div>
                <h1>Post Details Here</h1>
            </div>
        )
    }
}

const mapStateToProps = state => ({
  post: state.data.post,
  UI: state.UI,
  user: state.user
});

const mapActionsToProps = {
    getPost,
    uploadImage
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(PostPage));
