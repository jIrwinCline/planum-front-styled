import React, { Component } from "react";

// import {
//   useParams
// } from "react-router";
//MUI STUFF
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Grid from "@material-ui/core/grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import { withStyles } from "@material-ui/core/styles";
//ICONS
import EditIcon from "@material-ui/icons/Edit";
import KeyboardArrowRightOutlinedIcon from "@material-ui/icons/KeyboardArrowRightOutlined";
import KeyboardArrowLeftOutlinedIcon from "@material-ui/icons/KeyboardArrowLeftOutlined";
//REDUX
import { connect } from "react-redux";
import { getPosts } from "../redux/actions/dataActions";
import { getPost, uploadImage } from "../redux/actions/dataActions";
//COMPONENTS
// import DeletePost from '../components/DeletePost';
import Navbar2 from "../components/Navbar2";
import PostFromParams from "../components/PostFromParams";
import logo from "../assets/img/planumLogo.jpg";

const styles = {
  editButton: {
    position: "absolute",
    left: "80%",
    top: "20%",
    zIndex: 10
  }
};

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

export class PostPage extends Component {
  state = {
    imageIndex: 0
  };

  componentDidMount() {
    // this.props.getPost();
    const { id } = this.props.match.params;
    this.props.getPost(id);
    // console.log('params: ', id)
    // fetch(`https://us-central1-planum-magic.cloudfunctions.net/api/posts/${id}
    // `)
    // .then((post) => {
    //     this.setState(() => ({ post }))
    // })
  }
  handleImageUpload = event => {
    const images = event.target.files;
    const formDatas = [];
    console.log("images variable type: ", images);
    // images.forEach(image => {
    //   }
    // )
    for (let i = 0; i < images.length; i++) {
      const formData = new FormData();
      formData.append("image", images[i], images[i].name);
      formDatas.push(formData);
    }
    this.props.uploadImage(formDatas, this.props.match.params.id);
    // this.setState({ open: false });
  };

  handleIncrementImageIndex = images => () => {
    // let tempState = this.state.imageIndex.slice();
    console.log(this.state.imageIndex, images);
    if (this.state.imageIndex != images.length - 1) {
      this.setState({ imageIndex: (this.state.imageIndex += 1) });
      // tempState += 1
    }
    console.log(this.state);
    // this.setState({ imageIndex: tempState });
  };

  handleDecrementImageIndex = images => () => {
    // let tempState = this.state.imageIndex.slice();
    if (this.state.imageIndex != 0) {
      this.setState({ imageIndex: (this.state.imageIndex -= 1) });
      // tempState += 1
    }
    console.log(this.state);
    // this.setState({ imageIndex: tempState });
  };

  handleEditPicture = () => {
    const fileInput = document.getElementById("imageInput");
    fileInput.click();
  };
  render() {
    console.log("props in store: ", this.props);
    const {
      classes,
      post: {
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
    // console.log(this.props)
    const editPhoto = authenticated ? (
      <Tooltip title="Upload Picture" placement="top">
        <IconButton
          onClick={this.handleEditPicture}
          className="edit-button"
          style={{ position: "relative" }}
        >
          <EditIcon color="primary" />
        </IconButton>
      </Tooltip>
    ) : null;
    // const deleteButton = authenticated ? (
    //   <DeletePost className="delete-button" postId={this.props.match.params} />
    // ) : null;
    return (
      <Container maxWidth="lg">
        <br />
        <br />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={7}>
            {images ? (
              <Grid
                container
                // spacing={6}
                direction="column"
                justify="center"
                alignItems="center"
              >
                <Grid item>
                  <img
                    src={images[this.state.imageIndex]}
                    alt="enlarged photo"
                    className="imageDiv"
                  />
                </Grid>
                <br />
                <Grid item className="imageGrid">
                  <div className="dec">
                    <Tooltip title="Image Left" placement="top">
                      <KeyboardArrowLeftOutlinedIcon
                        style={{ fontSize: 50 }}
                        onClick={this.handleDecrementImageIndex(images)}
                      />
                    </Tooltip>
                  </div>
                  <div className="inc">
                    <Tooltip title="Image Right" placement="top">
                      <KeyboardArrowRightOutlinedIcon
                        style={{ fontSize: 50 }}
                        onClick={this.handleIncrementImageIndex(images)}
                      />
                    </Tooltip>
                  </div>
                </Grid>
              </Grid>
            ) : null}
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="info-grid">
              <h2>{name}</h2>
              {/* {deleteButton} */}
              <h4>
                <strong>${price}</strong>
              </h4>
              <p>
                Free shipping to the <u>United States</u>
              </p>
              <div className={classes.boxStyle}>
                <button className="button button--wayra button--border-thick button--text-upper button--size-s">
                  <a href={link} className="button-text" target="_blank">
                    <Typography color="inherit" variant="h5">
                      Buy Item
                    </Typography>
                  </a>
                </button>
                {editPhoto}
                <input
                  type="file"
                  id="imageInput"
                  onChange={this.handleImageUpload}
                  hidden="hidden"
                  multiple
                />
                <br />
                <br />
                <br />
              </div>
              <hr />
              <h6>Item details</h6>
              <p>{info}</p>
              <p>
                <strong>Materials</strong>
              </p>
              <p>Metallic leafing, Micron Pen</p>
              <br />
              <p>
                Each piece is created intuitively, with the intention of
                providing grounding and centering in the space for which it
                lives.
              </p>
              <hr />
              <h6>Shipping Details</h6>
              <p>Ships from Olympia, Washington</p>
              <p>Free shipping costs within United States</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={1}></Grid>
        </Grid>
      </Container>
    );
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
