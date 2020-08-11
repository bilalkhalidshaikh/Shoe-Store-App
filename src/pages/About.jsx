import React from 'react';
// import AllProducts from './AllProducts';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(theme => ({
    title: {
        backgroundColor: '#ebe6e6',
        padding:'70px 0px 20px 20px',
    },
    mydetails:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        flexWrap:'wrap',
    },
    info:{
        marginTop:'10%',
    },
    image:{
        width:'90%',
        borderRadius:'5%',
        boxShadow:'3px 3px 5px grey'
    }
}))

function About() {

    const classes = useStyle();

    return (
        <Container maxWidth='lg'>
            <div className={classes.title}>
                <h1><u>About</u></h1>
                {/* <p>Menz FOOTWEAR</p> */}
            </div>
            <hr />
            <div className={classes.mydetails}>
                <div><img className={classes.image} src={require('../image.jpg')} alt='creater' title='Creater of this app' /></div>
                <div className={classes.info}>
                    <h4>Name: <strong>Bilal Shaikh</strong></h4>
                    <hr/>
                    <h5><a href="https://github.com/bilalkhalidshaikh" target='_blank'>Github</a></h5>
                    <h6>Cell: +923183052976</h6>
                    <br/>
                    <p>This shoe store app is developed by Bilal Shaikh<br/>as a Project of Bootcamp.</p>
                </div>
            </div>
            <br />
            
        </Container>
    );
}

export default About;