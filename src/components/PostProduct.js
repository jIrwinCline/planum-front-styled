import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import MyButton from "../util/MyButton";

//MUI Stuff
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import CircularProgress from '@material-ui/core/CircularProgress';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from "@material-ui/icons/Close";
//REDUX
import { connect } from "react-redux";
import { postProduct, clearErrors } from "../redux/actions/dataActions";

const styles = {
  form: {
    textAlign: "center"
  },
  image: {
    margin: "20px auto 20px auto",
    width: "50px"
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
      float: 'right',
      marginTop: 10
  },
  progressSpinner: {
      position: 'absolute'
  },
  closeButton: {
      position: 'absolute',
      left: '91%',
      top: '6%'
  }
};

class PostProduct extends Component {
    state = {
        open: false,
        name: '',
        errors: {}
    };
    UNSAFE_componentWillReceiveProps(nextProps){
        if (nextProps.UI.errors) {
            this.setState({
                errors: nextProps.UI.errors
            })
        }
        if(!nextProps.UI.errors && !nextProps.UI.loading){
            this.setState({ name: "", open: false, errors: {} });
        }
    }
    handleOpen = () => {
        this.setState({ open: true })
    }
    handleClose = () => {
        this.setState({ open: false, errors: {} })
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.postProduct({
          name: this.state.name,
          images: this.state.images,
          link: this.state.link,
          info: this.state.info,
          price: this.state.price,
          itemCategory: this.state.itemCategory,
          available: this.state.available,
          highEnd: this.state.highEnd
        });
    }
    render(){
        const { errors } = this.state;
        const { classes, UI: {loading }} = this.props;
        return (
          <Fragment>
            <MyButton onClick={this.handleOpen} tip="Post a Product">
              <AddIcon />
            </MyButton>
            <Dialog
              open={this.state.open}
              onClose={this.handleClose}
              fullWidth
              maxWidth="sm"
            >
              <MyButton
                tip="close"
                onClick={this.handleClose}
                tipClassName={classes.closeButton}
              >
                <CloseIcon />
              </MyButton>
              <DialogTitle>Post the new Product</DialogTitle>
              <DialogContent>
                <form onSubmit={this.handleSubmit}>
                  <TextField
                    name="name"
                    type="text"
                    lable="Post Product"
                    multiline
                    rows="3"
                    placeholder="name"
                    error={errors.body ? true : false}
                    helperText={errors.body}
                    className={classes.textFields}
                    onChange={this.handleChange}
                    fullWidth
                  />
                  <TextField
                    name="images"
                    type="text"
                    lable="image"
                    multiline
                    rows="3"
                    placeholder="image"
                    error={errors.body ? true : false}
                    helperText={errors.body}
                    className={classes.textFields}
                    onChange={this.handleChange}
                    fullWidth
                  />
                  <TextField
                    name="itemCategory"
                    type="text"
                    lable="Painting"
                    multiline
                    rows="3"
                    placeholder="Painting"
                    error={errors.body ? true : false}
                    helperText={errors.body}
                    className={classes.textFields}
                    onChange={this.handleChange}
                    fullWidth
                  />
                  <TextField
                    name="link"
                    type="text"
                    lable="link"
                    multiline
                    rows="3"
                    placeholder="https://etsy.com"
                    error={errors.body ? true : false}
                    helperText={errors.body}
                    className={classes.textFields}
                    onChange={this.handleChange}
                    fullWidth
                  />
                  <TextField
                    name="info"
                    type="text"
                    lable="blah blah blah"
                    multiline
                    rows="3"
                    placeholder="info"
                    error={errors.body ? true : false}
                    helperText={errors.body}
                    className={classes.textFields}
                    onChange={this.handleChange}
                    fullWidth
                  />
                  <TextField
                    name="price"
                    type="text"
                    lable="Price"
                    multiline
                    rows="3"
                    placeholder="75.99"
                    error={errors.body ? true : false}
                    helperText={errors.body}
                    className={classes.textFields}
                    onChange={this.handleChange}
                    fullWidth
                  />
                  <TextField
                    name="available"
                    type="text"
                    lable="available?"
                    multiline
                    rows="3"
                    placeholder="true"
                    error={errors.body ? true : false}
                    helperText={errors.body}
                    className={classes.textFields}
                    onChange={this.handleChange}
                    fullWidth
                  />
                  <TextField
                    name="highEnd"
                    type="text"
                    lable="High-end or not?"
                    multiline
                    rows="3"
                    placeholder="false"
                    error={errors.body ? true : false}
                    helperText={errors.body}
                    className={classes.textFields}
                    onChange={this.handleChange}
                    fullWidth
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.submitButton}
                    disabled={loading}
                  >
                    Submit
                    {loading && (
                      <CircularProgress
                        size={30}
                        className={classes.progressSpinner}
                      />
                    )}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </Fragment>
        );
    }


} // END CLASS

PostProduct.propTypes = {
  postProduct: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired,
  clearErrors: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    UI: state.UI
})

export default connect(mapStateToProps, { postProduct, clearErrors })(withStyles(styles)(PostProduct))