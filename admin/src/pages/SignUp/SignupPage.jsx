import React from 'react';
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
  return (
    <>
    {false && <Box sx={{ width: '100%', zIndex:'99999999' }} className="fixed top-0" >
      <LinearProgress />
    </Box>}
    
    <div className="bg-[#151518] h-[100vh] w-full" >
  <Card className="mx-auto absolute bg-[#010409] border border-gray-800 text-slate-50 top-1/2 left-1/2 shadow-2xl  translate-y-[-50%] translate-x-[-50%] max-w-lg">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
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
              required
              className="bg-inherit border border-gray-800"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input 
              id="last-name" 
              placeholder="mayekar" 
              required 
              className="bg-inherit border border-gray-800"
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="example@email.com"
              required
              className="bg-inherit border border-gray-800"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input 
            id="password" 
            type="password"
            className="bg-inherit border border-gray-800"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Confirm Password</Label>
            <Input 
            id="password" 
            type="password"
            className="bg-inherit border border-gray-800"
            />
          </div>
          <Button type="submit">
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