import './signIn.css';
import React, { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
import Avatar from '@mui/material/Avatar';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import OutlinedInput from '@mui/material/OutlinedInput';
// import VisibilityIcon from '@mui/icons-material/Visibility';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { zoomies } from 'ldrs';
import { AuthContext } from '../../context/authContext';
import ActionButton from "../../components/actionButton/ActionButton";
import Cookies from 'js-cookie';

// const defaultTheme = createTheme();

const SignIn = ()=>{
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate =useNavigate();
  const [credentials, setCredentials] = useState({
    email: undefined,
    password : undefined,
    rememberMe : false,
  });
  zoomies.register();
  const { loading, error, dispatch } = useContext(AuthContext);
  const [topLoader, setTopLoader]= useState(false);
  // console.log("context error is ", error)

    const handleSubmit = async (event) => {
        setTopLoader(true);
        event.preventDefault();
        dispatch({ type: "LOGIN_START" });
        // console.log(credentials);
        try {
          const res = await axios.post("http://localhost:9090/api/auth/login", credentials, {
            credentials: "include",
          });
          // console.log("response is", res.data.access_token);
          Cookies.set("access_token", res.data.access_token)
          // localStorage.setItem('access_token', res.data.token);
          dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
          navigate(-2);
          setTopLoader(false);
        } catch (err) {
          // console.log("err223",err.response.data)
          dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
          setTopLoader(false)
        }
      }; 

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleCheckedChange = (e)=>{
    setCredentials((prev) => ({...prev,
      rememberMe:e.target.checked,
    }));
    // console.log(credentials);

  }

    
    return(
        <div className="maincon">
          {topLoader && <>
          <l-zoomies
            size="2000"
            stroke="4"
            bg-opacity="0.1"
            speed="1.2" 
            color="rgb(12, 107, 209)" 
          ></l-zoomies>
          </>}
            <div className="signInContainer">
            <ActionButton fontSize={2.1} />
            {/* <ThemeProvider theme={defaultTheme}> */}
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 1,
            marginBotom:1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 0, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{textAlign:'center'}}>
            Sign In with <br></br> <strong> Renteled.com</strong>
          </Typography>
          {error && <p className='error__message'>{error.message}</p>}
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={handleChange}
              autoFocus
              autocomplete="off"
            />
             <FormControl sx={{ mt: 1 }} variant="outlined" fullWidth>
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            fullWidth
            id="password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            onChange={handleChange}
          />
             </FormControl>
            
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" onChange={handleCheckedChange} />}
              label="Remember me"
            />
            <Button
              type="submit"
              disabled={loading}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container sx={{mb:3, mt:2, gap:'20px' }} >
              <Grid item xs>
                <Link to="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item xs>
                <Link to="/user/signup/with_diffrent/account" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    {/* </ThemeProvider> */}

    </div>  
        </div>
    )
}

export default SignIn;