import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import MyButton from '../util/MyButton';

//MUI Stuff
import Button from '@material-ui/core/Button'
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DeleteOutline from '@material-ui/icons/DeleteOutline';

import {connect } from 'react-redux';
import { deleteRetreat } from '../redux/actions/dataActions';

const styles = {
    deleteButton: {
        // position: 'absolute',
        // left: '80px',
        // bottom: '100px'
    }
}

class DeleteRetreat extends Component {
  state = {
    open: false
  };
  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  deleteRetreat = () => {
    this.props.deleteRetreat(this.props.retreatId)
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <MyButton
          style={{
            zIndex: '1',
            position: 'relative'
            }}
          tip="Delete Retreat/Service Post"
          onClick={this.handleOpen}
          btnClassName={classes.deleteButton}
        >
          <DeleteOutline color="secondary" />
        </MyButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>
            Are you sure you want to delete this retreat or service ?
          </DialogTitle>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.deleteRetreat} color="secondary">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

DeleteRetreat.propTypes = {
    deleteRetreat: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    retreatId: PropTypes.string.isRequired
}

export default connect(null, { deleteRetreat })(withStyles(styles)(DeleteRetreat))
