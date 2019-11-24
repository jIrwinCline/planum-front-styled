import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Link, Redirect } from "react-router-dom";
import PropTypes from 'prop-types'; 
import DeletePost from './DeletePost';
import PostDialog from './PostDialog';

//MUI Stuff
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux';

const styles = {
    card: {
        position: 'relative',
        display: 'flex',
        marginBottom: 20,
    },
    image: {
      minWidth: 200,
    },
    content: {
      padding: 25,
      objectFit: 'cover'
    }
}

export class Post extends Component {
    render() {
        const {
          classes,
          post: {
            name,
            createdAt,
            images,
            itemCategory,
            postId,
            link,
            info,
            price,
            available,
            highEnd
          },
          user: {
            authenticated
          }
        } = this.props;
        const deleteButton = authenticated ? (
          <DeletePost postId={postId} />
        ) : null;
        return (
          <Card className={classes.card}>
            <CardMedia
              image={images}
              title="Product Image"
              className={classes.image}
            />
            <CardContent className={classes.content}>
              <a href={link}>
                <Typography variant="h5" color="primary">
                  {name}
                </Typography>
              </a>
              {deleteButton}
              <Typography variant="body2" color="textSecondary">
                ${price}
              </Typography>
              <Typography variant="body1">{info}</Typography>
              <PostDialog postId={postId} />
            </CardContent>
          </Card>
        );
    }
}

Post.propTypes = {
  user: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  user: state.user
})

// const mapActionsToProps = {

// }

export default connect(mapStateToProps)(withStyles(styles)(Post));
