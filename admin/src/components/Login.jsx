import { Link } from "react-router-dom"
import React, { useContext, useState } from "react";
import { AuthContext } from "@/context/authContext";
import LinearProgress from '@mui/material/LinearProgress';
import { Button } from "@/ui/button";
import Box from '@mui/material/Box';
import axios from "axios";
import { Checkbox } from "@/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/card"
import { Input } from "@/ui/input"
import { Label } from "@/ui/label"
// import { type } from "os";


export default function LoginForm() {
  const [userEmail, setUserEmail]= useState("");
  const [useerPassword, setUserPassword]=useState("");
  const [isChecked, setIsChecked]=useState(false);
  // console.log("isChecked is ", isChecked)

  const {dispatch}=useContext(AuthContext);

  const credentials = {
    email:userEmail,
    password:useerPassword,
    rememberMe:isChecked
  }

  const handleLoginFunc = async (e)=>{
    dispatch({type:"LOGIN_START"})
    try{
      const res = await axios.post("/api/auth/login", credentials, {
        credentials: "include",
      })
      if(res.data.isAdmin){
        dispatch({type:"LOGIN_SUCCESS", payload:res.data.details})
        console.log(res.data);
        localStorage.setItem("user", JSON.stringify(res.data.details))
        
      }else{
        await axios.post("/api/auth/logout");
        alert("user must be Admin")
      }
      
    }catch(err){
      dispatch({type:"LOGIN_FAILED", payload:err.response.data})
    }
    

    // Cookies.set('accessCookies', res.data.access_token)
  }

  const handleCheckboxChange =(e)=>{
    setIsChecked(!isChecked);
  }
  return (
    <>
    {true && <Box sx={{ width: '100%' }} className="fixed top-0" >
      <LinearProgress />
    </Box>}
    
    <div className="bg-[#151518] h-[100vh] w-full" >
    <Card className="mx-auto absolute bg-[#010409] border border-gray-800 text-slate-50 top-1/2 left-1/2 shadow-2xl  translate-y-[-50%] translate-x-[-50%] max-w-lg">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="example@gmail.com"
              required
              onChange={(e)=>setUserEmail(e.target.value)}
              className="bg-inherit border border-gray-800 "
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link href="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link>
            </div>
            <Input 
            id="password" 
            type="password" 
            onChange={(e)=>setUserPassword(e.target.value)}
            required 
            className="bg-inherit border border-gray-800" 
            // placeholder="••••••••••••"
            />
            <div className="flex items-center space-x-2 my-1">
              <Checkbox id="terms" 
              checked={isChecked}
              onCheckedChange={handleCheckboxChange} 
              />
            <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
            Remember me
          </label>
        </div>
          </div>
          <Button 
          type="submit" 
          variant="outline"
          onClick={handleLoginFunc} 
          className="w-full bg-slate-50 text-[#151518]"
          >
            
            Login
          </Button>
          <Button variant="outline" className="w-full bg-slate-50 text-[#151518]">
            Login with Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="#" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
    </div>
    </>
  )
}
