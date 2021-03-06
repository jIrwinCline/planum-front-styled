import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import MyButton from "../util/MyButton";

// import clsx from 'clsx';

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

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
//REDUX
import { connect } from "react-redux";
import { postRetreat, clearErrors } from "../redux/actions/dataActions";
//Reactstrap
import {
//   Button,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

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
  },
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: '#137cbd',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  },
};

function StyledRadio(props) {
  const classes = props;

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      // checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      checkedIcon={<span className={`${classes.icon} ${classes.checkedIcon}`} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

// const [selectedValue, setSelectedValue] = React.useState('a');

class PostRetreat extends Component {
  constructor(props){
    super(props)
    this.state = {
        open: false,
        name: '',
        errors: {}
    };
    // this.radioChange = this.radioChange.bind(this);
  }
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
        this.props.postRetreat({
          name: this.state.name,
        //   images: this.state.images,
          link: this.state.link,
          info: this.state.info,
          price: this.state.price,
        //   itemCategory: this.state.itemCategory,
          date: this.state.date,
          location: this.state.location,
          time: this.state.time
        });
    }
    render(){
        const { errors } = this.state;
        const { classes, UI: {loading }} = this.props;
        return (
          <Fragment>
            <MyButton onClick={this.handleOpen} tip="Post a Retreat/Service">
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
              <DialogTitle>Post the new Service, Class, or Art Retreat</DialogTitle>
              <DialogContent>
                <form onSubmit={this.handleSubmit}>
                <br/>
                <br/>
                <h5>Title of Service, Class, or Art Retreat</h5>
                  <TextField
                    name="name"
                    type="text"
                    lable="Post Product"
                    multiline
                    rows="3"
                    placeholder="Metatron"
                    error={errors.body ? true : false}
                    helperText={errors.body}
                    className={classes.textFields}
                    onChange={this.handleChange}
                    fullWidth
                  />
                  {/* <TextField
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
                  /> */}
                  <br/>
                  <br/>
                  <h5>Link to Schedule City</h5>
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
                  <br/>
                  <br/>
                  <h5>Informative Paragraph</h5>
                  <TextField
                    name="info"
                    type="text"
                    lable="info"
                    multiline
                    rows="3"
                    placeholder="We go here... we do things... we make art stuff"
                    error={errors.body ? true : false}
                    helperText={errors.body}
                    className={classes.textFields}
                    onChange={this.handleChange}
                    fullWidth
                  />
                  <br/>
                  <br/>
                  <h5>Price</h5>
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
                  <br/>
                  <br/>
                  <h5>Date or Days</h5>
                  <TextField
                    name="date"
                    type="date"
                    lable="Date"
                    multiline
                    rows="3"
                    placeholder="can be exact '6/6/20' or can be 'M-F' etc"
                    error={errors.body ? true : false}
                    helperText={errors.body}
                    className={classes.textFields}
                    onChange={this.handleChange}
                    fullWidth
                  />
                  <br/>
                  <br/>
                  <h5>Location</h5>
                  <TextField
                    name="location"
                    type="location"
                    lable="Location"
                    multiline
                    rows="3"
                    placeholder="Portland, Oregon"
                    error={errors.body ? true : false}
                    helperText={errors.body}
                    className={classes.textFields}
                    onChange={this.handleChange}
                    fullWidth
                  />
                  <br/>
                  <br/>
                  <h5>Start time or duration</h5>                  
                  <TextField
                    name="time"
                    type="time"
                    lable="Time"
                    multiline
                    rows="3"
                    placeholder="'8am-5pm' or 6:30pm, etc."
                    error={errors.body ? true : false}
                    helperText={errors.body}
                    className={classes.textFields}
                    onChange={this.handleChange}
                    fullWidth
                  />

                  {/*////////////////////////////////////////*/}
                  {/* <div className="title">
                    <h3>Feature this on the front page?</h3>
                  </div>
                  
                  <ul>
                    <li>
                      <label>
                        <input
                          type="radio"
                          name="featured"
                          value="true"
                          // checked={this.state.size === "small"}
                          onChange={this.handleChange}
                        />
                        Yes
                      </label>
                    </li>
                    
                    <li>
                      <label>
                        <input
                          type="radio"
                          name="featured"
                          value="false"
                          // checked={this.state.size === "medium"}
                          onChange={this.handleChange}
                        />
                        No
                      </label>
                    </li>
                  </ul>

                  <div className="title">
                    <h3>Is it a high end product?</h3>
                  </div>
                  
                  <ul>
                    <li>
                      <label>
                        <input
                          type="radio"
                          name="highEnd"
                          value="true"
                          // checked={this.state.size === "small"}
                          onChange={this.handleChange}
                        />
                        Yes
                      </label>
                    </li>
                    
                    <li>
                      <label>
                        <input
                          type="radio"
                          name="highEnd"
                          value="false"
                          // checked={this.state.size === "medium"}
                          onChange={this.handleChange}
                        />
                        No
                      </label>
                    </li>
                  </ul>
                  <br/>
                  <br/> */}
                  
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

PostRetreat.propTypes = {
  postRetreat: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired,
  clearErrors: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    UI: state.UI
})

export default connect(mapStateToProps, { postRetreat, clearErrors })(withStyles(styles)(PostRetreat))