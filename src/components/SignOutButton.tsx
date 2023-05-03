'use client'
import React,{FC, useState} from 'react'

import { signIn, signOut } from 'next-auth/react'
import { Button } from './ui/Button'
import { toast } from './ui/Toast'




interface SignOutButtonProps {}

const SignInButton:FC<SignOutButtonProps> = () => {
const [isLoading,setIsLoading]=useState<boolean>(false)

const signOutWithGoogle = async() => {
    setIsLoading(true)
    try {
        await signOut()
    } catch (error) {
        toast({
            title:'error signing in',
            message:'Plase try again later',
            type: 'error'
        })
    }
}

  return (
    <Button onClick={signOutWithGoogle} isLoading={isLoading}>
        Sign Out
    </Button>
  )
  
}

export default SignInButton