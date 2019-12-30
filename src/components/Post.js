import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Link, Redirect } from "react-router-dom";
import PropTypes from 'prop-types'; 
import DeletePost from './DeletePost';
import PostDialog from './PostDialog';

import planumIcon from '../assets/img/planumIcon.jpg'

//MUI Stuff
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from '@material-ui/core/Typography';
import Divider from "@material-ui/core/Divider";

import { connect } from 'react-redux';

const styles = {
  // card: {
  //   position: "relative",
  //   display: "flex",
  //   marginBottom: 20,
  //   padding: 13,
  //   margin: 20,
  //   height: 300
  // },
  image: {
    width: "30%",
    height: "auto"
  },
  content: {
    padding: 25,
    objectFit: "cover"
  },
  card: {
    maxWidth: 310,
    minWidth: 170,
    // maxHeight: 313,
    // minHeight: 323,
    margin: "auto",
    transition: "0.3s",
    margin: "20px",
    marginTop: 80
    // boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    // "&:hover": {
    //   boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    // }
  },
  media: {
    paddingTop: "100%",
  },
  content: {
    textAlign: "left"
    // padding: muiBaseTheme.spacing.unit * 3
  },
  divider: {
    // margin: `${muiBaseTheme.spacing.unit * 3}px 0`
  },
  heading: {
    fontWeight: "bold"
  },
  subheading: {
    lineHeight: 1.8
  },
  priceBox: {
    paddingTop: 10
  }
};

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
          <DeletePost className="delete-button" postId={postId} />
        ) : null;
        return (
          <Card className={classes.card}>
          <Link to={`/products/${postId}`}>
            <CardMedia
              className={classes.media}
              image={images[0]
                // "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
              }
            />
            </Link>
            <CardContent className={classes.content}>
              <Typography
                className={"MuiTypography--heading"}
                variant={"h6"}
                gutterBottom
              >
                {name}
              </Typography>
              <br/>
              {/* <Typography
                className={"MuiTypography--subheading"}
                variant={"caption"}
              >{info}</Typography> */}
              {deleteButton}
              <Divider className={classes.divider} light />
              <div className={classes.priceBox}>
              <Typography>{price}$</Typography>
              </div>
              {/* <PostDialog postId={postId} /> */}
            </CardContent>
          </Card>
          
          // <Card className={classes.card}>
          //   <CardMedia
          //     image={planumIcon}
          //     title="Product Image"
          //     className={classes.image}
          //   />
          //   <CardContent className={classes.content}>
          //     <a href={link}>
          //       <Typography variant="h5" color="primary">
          //         {name}
          //       </Typography>
          //     </a>
          //     {deleteButton}
          //     <Typography variant="body2" color="textSecondary">
          //       ${price}
          //     </Typography>
          //     <Typography variant="body1">{info}</Typography>
          //     <PostDialog postId={postId} />
          //   </CardContent>
          // </Card>
        );
    }
}

// function Child() {
//   // We can use the `useParams` hook here to access
//   // the dynamic pieces of the URL.
//   let { id } = useParams();

//   return (
//     <div>
//       <h3>ID: {id}</h3>
//     </div>
//   );
// }

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
