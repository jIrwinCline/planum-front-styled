import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import MyButton from "../util/MyButton";
import { Link } from 'react-router-dom';
import planumIcon from "../assets/img/planumIcon.jpg";
//MUI Stuff
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from '@material-ui/core/grid';
import Typography from '@material-ui/core/Typography'
//ICONS
import CloseIcon from "@material-ui/icons/Close";
import UnfoldMore from "@material-ui/icons/UnfoldMore";
// import AppIcon from "../images/planumIcon.png";
import ChangeHistoryIcon from "@material-ui/icons/ChangeHistory";
//REDUX
import { connect } from 'react-redux'
import { getPost } from '../redux/actions/dataActions';

const styles = {
  invisibleSeperator: {
    border: "none",
    margin: 4
  },
  image: {
    margin: "20px auto 20px auto",
    width: "50px"
  },
  form: {
    textAlign: "center"
  },
  image: {
    position: "relative",
    margin: "20px auto 20px auto",
    width: "100%"
  },
  pageTitle: {
    margin: "10px auto 10px auto"
  },
  textField: {
    margin: "10px auto 10px auto"
  },
  button: {
    marginTop: 20,
    postition: "relative"
  },
  customError: {
    color: "red",
    fontSixe: "0.8rem",
    marginTop: 10
  },
  progress: {
    position: "absolute"
  },
  submitButton: {
    position: "relative",
    float: "right",
    marginTop: 10
  },
  progressSpinner: {
    position: "absolute"
  },
  closeButton: {
    position: "absolute",
    left: "91%",
    top: "6%"
  },
  dialogPaper: {
    minHeight: "80vh",
    maxHeight: "80vh"
  },
  expandButton: {
    // position: 'absolute',
    left: "80%",
    bottom: "104px"
  },
  spinnerDiv: {
    textAlign: "center",
    marginTop: 50,
    marginBottom: 50
  },
  productContent: {
    margin: 40
  },
  nameStyle: {
    // textAlign: "center",
    // marginTop: 20,
    marginBottom: 20,
    // marginLeft: 100,
    // fontFamily: "'PT Sans', sans-serif",
    // fontFamily: "'PT Sans Narrow', sans-serif",
    fontFamily: "'Lato', sans-serif"
    // fontFamily: "'Roboto Condensed', sans-serif",
    // fontWeight:
  },
  priceStyle: {
    marginBottom: 50,
    fontFamily: "'Lato', sans-serif",
    color: 'grey'
  },
  infoStyle: {
    fontFamily: "'Lato', sans-serif"
  },
  buttonStyle: {
    backgroundColor: "lightblue",
    width: 120,
    textAlign: "center",
    height: "38px"
  },
  buttonTextStyle: {
    fontFamily: "'Lato', sans-serif",
    // fontWeight: 'bold'
    // marginTop: 50,
    // marginBottom: 50
    top: '20px'
  },
  boxStyle: {
    backgroundColor: 'lightgrey',
    height: 150
  }
};

class PostDialog extends Component {
  state = {
    open: false
  };
  handleOpen = () => {
    this.setState({ open: true });
    this.props.getPost(this.props.postId);
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  render(){
      const { classes, post: { postId, name, images, itemCategory, link, info, price, available, highend }, UI: { loading }} = this.props;

    const dialogMarkup = loading ? (
      <div className={classes.spinnerDiv}>
        <CircularProgress size={200} thickness={2} />
      </div>
    ) : (
      <Grid container spacing={2}>
        <Grid item sm={4}>
          <img
            src={planumIcon}
            alt="enlarged photo"
            className={classes.image}
          />
        </Grid>
        <Grid className={classes.productContent} item direction="column" sm={5}>
          <Typography className={classes.nameStyle} color="none" variant="h4">
            {name}
          </Typography>
          <Typography className={classes.priceStyle} color="none" variant="h5">
            $ {price}
          </Typography>
          <div className={classes.boxStyle}>
            <button className={classes.buttonStyle}>
              <a href={link} className={classes.buttonTextStyle}>
                <Typography
                  className={classes.buttonTextStyle}
                  color="none"
                  variant="h5"
                >
                  Buy Item
                </Typography>
              </a>
            </button>
          </div>
          <br />
          <br />
          <Typography className={classes.infoStyle} color="none" variant="h5">
            {info}
          </Typography>
        </Grid>
        <Grid item sm={2}>
          <hr className={classes.invisibleSeperator} />
        </Grid>
      </Grid>
    );
    return (
        <Fragment>
            <MyButton onClick={this.handleOpen} tip="Expand Post" tipClassName={classes.expandButton}>
                <UnfoldMore color="primary"/>
            </MyButton> 
            <Dialog open={this.state.open}
              onClose={this.handleClose}
              classes={{paper: classes.dialogPaper }}
              fullscreen={true}
              fullWidth
              maxWidth="lg"
            >
              <MyButton
                tip="close"
                onClick={this.handleClose}
                tipClassName={classes.closeButton}
              >
                <CloseIcon />
              </MyButton>
              <DialogContent className={classes.dialogContent}>
                {dialogMarkup}
              </DialogContent>
            </Dialog>
        </Fragment>
    )
  }
}

PostDialog.propTypes = {
  clearErrors: PropTypes.func.isRequired,
  getPost: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired,
  post: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    post: state.data.post,
    UI: state.UI
})

const mapActionsToProps = {
    getPost
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(PostDialog));