import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from  'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import {MoreVertOutlined} from '@material-ui/icons';
import Login from './screens/Login';

function App() {
  const [user, setUser] = useState('');
  const classes = useStyles();

  const userState = () => {
    const userdata = localStorage.getItem('user');
    const userobject = userdata !== null ? JSON.parse(userdata) : null;
    setUser(userobject);
  }
  const signOut = () => {
    localStorage.removeItem('user');
    setUser(null);
  }
  useEffect(() => {
      userState();
  }, []);
  return (
    <>
    {user !== null ? (
       <>
       <AppBar position="static">
         <Toolbar>
           <Typography variant="h6" className={classes.title}>React Firebase Login with Google</Typography>
           <Button color="inherit"  onClick={() => signOut()}>Logout</Button>
         </Toolbar>
       </AppBar>
       <Container component="main" maxWidth="xs" className={classes.container}>
           <Card className={classes.root}>
           <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                M
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertOutlined />
              </IconButton>
            }
            title={user.username}
            subheader={user.email}
          />
          <CardMedia
            className={classes.media}
            image={user.imageurl}
            title={user.username}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {user.username}  {user.email}
            </Typography>
          </CardContent>
           </Card>
        </Container> 
     </>
    ) : (
      <Login signin={(user) => setUser(user)}/>
    )}
    </>
   
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345
  },
  title: {
    flexGrow: 1
  },
  button: {
    margin: theme.spacing(1)
  },
  container: {
    marginTop: '15%'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  avatar: {
    backgroundColor: 'red',
  },
}))

export default App;
