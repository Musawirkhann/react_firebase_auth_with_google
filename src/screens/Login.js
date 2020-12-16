import React from 'react';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import firebase from 'firebase';
import fire from '../helpers/db';

const Login = (props) => {
    const classes = useStyles();
    const SignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        fire.auth().signInWithPopup(provider).then((result) => {
            const token = result.credential.accessToken;
            const user = result.user;
            const data = {
                storetoken: token,
                username: user.displayName,
                email: user.email,
                imageurl: user.photoURL
            }
            localStorage.setItem('user', JSON.stringify(data));
            props.signin(data);
        }).catch((error) => {
            const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.email;
          const credential = error.credential;
          console.log(errorMessage);
        });
    }
    return (
        <Container component="main" maxWidth="xs" className={classes.container}>
            <Card>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary">Login With Google</Typography>
                    <Button variant="contained" className={classes.button} color="secondary" onClick={() => SignIn()}>Login</Button>
                </CardContent>
            </Card>
        </Container>
    );
}

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: '15%'
    },
    title: {
        fontSize: 20,
        fontWeight: 800
    },
    button: {
        margin: theme.spacing(1)
    }
}))
export default Login;