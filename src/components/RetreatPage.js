import React, { Component } from 'react'

// import {
//   useParams
// } from "react-router";
//MUI STUFF
import IconButton from '@material-ui/core/IconButton'
import Tooltip from "@material-ui/core/Tooltip";
import Grid from '@material-ui/core/grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography'


import { withStyles } from "@material-ui/core/styles";
//ICONS
import EditIcon from "@material-ui/icons/Edit";
import KeyboardArrowRightOutlinedIcon from "@material-ui/icons/KeyboardArrowRightOutlined";
import KeyboardArrowLeftOutlinedIcon from "@material-ui/icons/KeyboardArrowLeftOutlined";
//REDUX
import { connect } from 'react-redux';
import { getPosts } from '../redux/actions/dataActions'
import { getRetreat, uploadImage } from '../redux/actions/dataActions';
//COMPONENTS
// import DeletePost from '../components/DeletePost';
import Navbar2 from "../components/Navbar2";
import PostFromParams from "../components/PostFromParams"
import logo from "../assets/img/planumLogo.jpg";


const styles = {
    editButton: {
        position: "absolute",
        left: "80%",
        top: "20%",
        zIndex: 10
    },
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

export class RetreatPage extends Component {

    state = {
        imageIndex: 0
    };

    componentDidMount(){
        // this.props.getRetreat();
        const { id } = this.props.match.params
        this.props.getRetreat(id)
        // console.log('params: ', id)
        // fetch(`https://us-central1-planum-magic.cloudfunctions.net/api/retreats/${id}
        // `)
        // .then((post) => {
        //     this.setState(() => ({ post }))
        // })
    }

    render() {
        console.log('props in store: ', this.props)
        const {
            classes,
            retreat: {
                name,
                // images,
                // itemCategory,
                link,
                info,
                price,
                date,
                time,
                location,
                // available,
                // highend
            },
            UI: { loading },
            user: { authenticated }
        } = this.props;
        // console.log(this.props)

        // const deleteButton = authenticated ? (
        //   <DeletePost className="delete-button" postId={this.props.match.params} />
        // ) : null;
        return (
            <Container maxWidth="lg">
            <br/><br/>
            <div className="retreat-info-grid">
            <h2>{name}</h2>
            <br/>
            <hr/>
            <br/>
            </div>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <div className="retreat-info-grid">
                        {/* {deleteButton} */}
                        <h3>Price per person</h3>
                        <h4><strong>${price}</strong></h4>
                        {/* <p>Free shipping to the <u>United States</u></p>
                        < */}
                        <br/>
                        <div className={classes.boxStyle}>
                            <button className="reserve-button button button--wayra button--border-thick button--text-upper button--size-s">
                                <a href={link} className="button-text">
                                <Typography color="inherit" variant="h5">
                                    Reserve
                                </Typography>
                                </a>
                            </button>
                            <br/>
                            <br/>
                            <br/>
                        </div>
                        <hr/>
                        <h6>Items Included</h6>
                        <p>Paint, Brushes, Canvas, Paper</p>
                        {/* <p><strong>Materials</strong></p> */}
                        {/* <p>Metallic leafing, Micron Pen</p> */}
                        <br/>
                        {/* <p>Each piece is created intuitively, with the intention of providing grounding and centering in the space for which it lives.</p> */}
                        <hr/>
                        <h6>Location Details</h6>
                        <p>{date}</p>
                        <p>{time}</p>
                        <p>{location}</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div className='align-vertically'>
                            <div className="retreat-info-grid">
                            <h6>Setting & Information</h6>
                            <p>{info}</p>
                            <br/>
                            {/* <hr/> */}
                            <br/>
                            <h6>You will take home:</h6>
                            <p>Finished personal artistic piece</p>
                            <p></p>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}


const mapStateToProps = state => ({
  retreat: state.data.retreat,
  UI: state.UI,
  user: state.user
});

const mapActionsToProps = {
    getRetreat,
    uploadImage
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(RetreatPage));
