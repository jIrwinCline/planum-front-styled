import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

import pic3 from "../assets/img/light-painting.jpg";

import { makeStyles, useTheme } from '@material-ui/core/styles';


const classes = {
//   card: {
//     display: 'flex',
//     backgroundColor: 'blue',
    
//   },
//   details: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   content: {
//     flex: '1 0 auto',
//   },
//   cover: {
//     width: 151,
//   },
};


export class RetreatPost extends Component {
    render() {
        return (
            <>
            <div className='retreat-post-card'>
                <Grid className='retreat-post-card-info' container>
                    <Grid className='card-info-name' item xs={12} sm={4}>
                        <h3>retreat 1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat placeat dignissimos delectus elige</p>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <p>11/23/2020</p>
                        <hr style={{ width: '210px'}}/>
                        <p>6:00pm</p>
                        <hr style={{width: '210px'}}/>
                        <p>location</p>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <img className='retreat-post-cover' src={pic3} alt="paints"/>
                    </Grid>
                </Grid>
                
            </div>
            <br/>
            </>
        )
    }
}


const mapStateToProps = state => ({
  data: state.data
});

export default connect(mapStateToProps/*, { getRetreatPost }*/)(RetreatPost)

