import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

import DeleteRetreat from './DeleteRetreat';

import { Link, Redirect } from "react-router-dom";

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
        const {
            classes,
            retreat: {
                name,
                createdAt,
                retreatId,
                link,
                info,
                price,
                date,
                location,
                time,
            },
            user: {
                authenticated
            }
        } = this.props;
        const deleteButton = authenticated ? (
          <DeleteRetreat className="delete-button" retreatId={retreatId} />
        ) : null;
        return (
            <>
            <div className='retreat-post-card'>
            <Link to={`/retreats/${retreatId}`}>
                <Grid className='retreat-post-card-info' container>
                    <Grid className='card-info-name' item xs={12} sm={4}>
                        <h3>{name}</h3>
                        {/* <p>{info}</p> */}
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <p>{date}</p>
                        <hr style={{ width: '210px'}}/>
                        <p>{time}</p>
                        <hr style={{width: '210px'}}/>
                        <p>{location}</p>
                    </Grid>
                    <Grid style={{marginTop: '5px'}} item xs={12} sm={4}>
                        <h5>Host: Laci Adelle</h5>
                        {deleteButton}
                        {/* <img className='retreat-post-cover' src={pic3} alt="paints"/> */}
                    </Grid>
                </Grid>
                </Link>
            </div>
            <br/>
            </>
        )
    }
}


const mapStateToProps = state => ({
  data: state.data,
  user: state.user
});

export default connect(mapStateToProps)(RetreatPost)

