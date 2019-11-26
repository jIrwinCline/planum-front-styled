import React, { Component } from 'react'
import Navbar2 from '../components/Navbar2'
import logo from '../assets/img/planumLogo.jpg'
import { withStyles } from "@material-ui/core/styles";

const styles = {
  card: {
    position: "relative",
    display: "flex",
    marginBottom: 20
  },
  image: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "12%"
  },
  content: {
    padding: 25,
    objectFit: "cover"
  },
  line: {
    marginTop: 30,
    marginBottom: 30,
    borderTop: "1px solid lightgrey"
  }
};


export class home extends Component {
    render() {
        const {
          classes } = this.props
        return (
          <div>
            <div >
            <hr className={classes.line}/>
              <img className={classes.image} src={logo} alt="main logo" />
            </div>
            <Navbar2 />
            <h1>Home Page</h1>
          </div>
        );
    }
}

export default withStyles(styles)(home);
