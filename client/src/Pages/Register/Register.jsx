import React, { useState, useContext } from "react";
import "./register.css";
import { useNavigate, Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { RegisterContext } from '../../context/registerContext';

// const defaultTheme = createTheme();

const Register = () =>{
    const { error, dispatch33 } = useContext(RegisterContext);
    const [showPassword, setShowPassword] = React.useState(false);
    const [isFirstNameEmpty, setIsFirstNameEmpty] = useState(false);
    const [isLastNameEmpty, setIsLastNameEmpty] = useState(false);
    const [isEmailEmpty, setIsEmailEmpty] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [isRepeatPasswordValid, setIsRepeatPasswordValid] = useState(false);
    const [userData, setUserData] = useState({
      firstName: undefined,
      lastName: undefined,
      email : undefined,
      password : "",
      repeat_password:undefined,
      isAdmin:false,
    });
    const navigate = useNavigate();

    const submitClose = (e)=>{
        navigate("/");
        e.preventDefault();
    }

    const handleChange = (e) => {
      setUserData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };
    

    const handleCheckedChange = (e)=>{
      setUserData((prev) => ({...prev,
        isAdmin:e.target.checked,
      }));
    }

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        userData.firstName ? setIsFirstNameEmpty(false) : setIsFirstNameEmpty(true);        
        userData.lastName ? setIsLastNameEmpty(false) : setIsLastNameEmpty(true);
        userData.email ? setIsEmailEmpty(false) : setIsEmailEmpty(true); 
        userData.password.length<6  ? setIsPasswordValid(true) : setIsPasswordValid(false); 
        userData.repeat_password === userData.password ? setIsRepeatPasswordValid(false) :setIsRepeatPasswordValid(true);    
        dispatch33({ type: "REGISTER_START" });
        // console.log("user data is",userData);

        if(userData.firstName && userData.lastName && userData.email && userData.repeat_password === userData.password && userData.password.length>=6){
          try{
            // console.log( userData);
            const res = await axios.post("http://localhost:9090/api/auth/register", userData);
            // console.log(res);
            dispatch33({ type: "REGISTER_SUCCESS", payload: res.data.details });
            navigate("/user/Sign-in");
          }catch(err){
            // console.log("catched error is",err.response.data);
            dispatch33({ type: "REGISTER_FAILURE", payload: err.response.data });
          }
        }
      };
    return(
        <div className="maincon">
        
            <div className="registerContainer">
                <CloseIcon className="closeButton" onClick={submitClose} />
                {/* <ThemeProvider theme={defaultTheme}> */}
      <Container component="main" maxWidth="xs" sx={{marginBottom:2}}>
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h2" variant="h5" sx={{textAlign:'center'}}>
            Sign up
          </Typography>
          {error && <p className='error__message'>{error.message}</p>}
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={handleChange}
                  helperText={isFirstNameEmpty ? 'Please enter your first name' : ''}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={handleChange}
                  helperText={isLastNameEmpty ? 'Please enter your last name ' : ''}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleChange}
                  helperText={isEmailEmpty ? 'Email is Required' : ''}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  autoComplete="new-password"
                  onChange={handleChange}
                  helperText={isPasswordValid ? 'Password must contains min 6 character' : ''}
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
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="repeat_password"
                  label="Confirm Password"
                  type="password"
                  id="repeat_password"
                  autoComplete="new-password"
                  onChange={handleChange} 
                  helperText={isRepeatPasswordValid ? 'Password do not match' : ''}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" onChange={handleCheckedChange} />}
                  label="Sign up as Admin"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item sx={{mb:0.5}} >
                <Link to="/user/Sign_in" variant="body2">
                  Already have an account? Sign in
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

export default Register;