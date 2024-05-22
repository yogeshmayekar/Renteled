import { Link } from "react-router-dom"
import React from "react";
import LinearProgress from '@mui/material/LinearProgress';
import { Button } from "@/ui/button";
import Box from '@mui/material/Box';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/card"
import { Input } from "@/ui/input"
import { Label } from "@/ui/label"

export default function LoginForm() {
  return (
    <>
    {false && <Box sx={{ width: '100%' }} className="fixed top-0" >
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
            required 
            className="bg-inherit border border-gray-800" 
            placeholder="••••••••••••"
            />
          </div>
          <Button type="submit" variant="outline" className="w-full bg-slate-50 text-[#151518]">
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
