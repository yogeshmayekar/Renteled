import React, { useState } from 'react';
import { Link } from "react-router-dom"
import { Button } from "@/ui/button"
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/card"
import { Input } from "@/ui/input"
import { Label } from "@/ui/label"
// import LinearProgress from '@mui/material/LinearProgress';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function SignupPage() {
  const navigate = useNavigate();
  const [firstName, setFirstName]=useState("");
  const [lastName, setLastName]=useState("");
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const [confirmPasword, setConfirmPassword]=useState("");

  const [errorFirstName, setErrorFirstName]=useState(false);
  const [errorLatName, setErrorLastName]=useState(false);
  const [errorEmail, setErrorEmail]=useState(false);
  const [errorPassword, setErrorPassword]=useState(false);
  const [errorConfirmPassword, setErrorConfirmPassword]=useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const formValidation=()=>{
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(email))
    !firstName && setErrorFirstName(true);
    !lastName && setErrorLastName (true);
    !email && setErrorEmail(true);
    !password && setErrorPassword(true);
    !confirmPasword && setErrorConfirmPassword(true);
    // console.log(passwordRegex.test(password))
    !passwordRegex.test(password) && setErrorPassword(true);
    if(password !== confirmPasword){
      setErrorConfirmPassword(true);
    }
  }

  const handleCreateAcount =()=>{
    formValidation();
  }

  return (
    <>
    {/* {false && <Box sx={{ width: '100%', zIndex:'99999999' }} className="fixed top-0" >
      <LinearProgress />
    </Box>} */} 
    
    <div className="bg-[#151518]  w-full" >
  <Card className="mx-auto bg-[#010409] border border-gray-800 text-slate-50  shadow-2xl sm:my-5 max-w-md ">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>a
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">First name</Label>
              <Input 
              id="first-name"
              placeholder="yogesh"
              onChange={(e)=>{setFirstName(e.target.value); setErrorFirstName(false)}}
              required
              className={errorFirstName ? "bg-inherit border-[#bf1010] " : "bg-inherit border border-gray-800"}
              />
              
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input 
              id="last-name" 
              placeholder="mayekar"
              onChange={(e)=>{setLastName(e.target.value); setErrorLastName(false)}} 
              required 
              className={errorLatName?"bg-inherit border-[#bf1010] " : "bg-inherit border border-gray-800"}
              />
            </div>
            {errorFirstName && <p  className='px-1 text-red text-xs italic max-w-sm '>Firstname required.</p>}
            {errorLatName && <p  className='px-1 text-red text-xs italic max-w-sm '>Lastname required.</p>}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="example@email.com"
              onChange={(e)=>{setEmail(e.target.value); setErrorEmail(false); setIsValidEmail(true)}}
              required
              className={errorEmail ? "bg-inherit border-[#bf1010] " : "bg-inherit border border-gray-800"}
            />
            {(!isValidEmail || errorEmail) && <p  className='px-1 text-red text-xs italic max-w-sm '>Please enter a valid email address.</p>}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input 
            id="password" 
            type="password"
            onChange={(e)=>{setPassword(e.target.value); setErrorPassword(false); }}
            className={errorPassword ? "bg-inherit border-[#bf1010] " : "bg-inherit border border-gray-800"}
            />
            {errorPassword && <p  className='px-1 text-red text-xs italic max-w-sm '>Password must contain at least one digit, one lowercase letter, one uppercase letter, one special character, and be at least 6 characters long.</p>}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Confirm Password</Label>
            <Input 
            id="confirm-password" 
            type="password"
            onChange={(e)=>{setConfirmPassword(e.target.value); setErrorConfirmPassword(false);}}
            className={errorConfirmPassword ? "bg-inherit border-[#bf1010] " : "bg-inherit border border-gray-800"}
            />
            {errorConfirmPassword && <p  className='px-1 text-red text-xs italic max-w-sm '>Passwords do not match.</p>}
          </div>
          <Button type="submit" onClick={handleCreateAcount} >
            {false? 
            <Box sx={{ display: 'flex'}}>
            <CircularProgress color="inherit" sx={{width:'10px', padding:"8px"}} />
          </Box> :
          "Create an account"
          }
          </Button>
          <Button variant="outline" className="w-full bg-slate-50 text-[#151518]">
            {false ?
            <Box sx={{ display: 'flex'}}>
            <CircularProgress color="inherit" sx={{width:'10px', padding:"8px"}} />
          </Box> : "Sign up with Google"
          }
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link href="" onClick={()=>navigate("/login")} className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
    </div>
    </>
  )
}

export default SignupPage