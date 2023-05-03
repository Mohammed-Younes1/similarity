'use client'
import React,{FC, FormEvent, useState} from 'react'
import { toast } from './ui/Toast'


const RequestApiKey:FC = () => {
    const [isCreating,setIsCreating]=useState<boolean>(false)
    const [apiKey, setApiKey]=useState<string | null>(null)

    const createNewApiKey=async(e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault()

        setIsCreating(true)

        try{
            const generatedApiKey=await createNewApiKey()
            setApiKey(generatedApiKey)
        }catch(err){
            if(err instanceof Error){
                toast({
                    title: 'Error',
                    message: err.message,
                    type:'error',
                })
                return
            }
            toast({
                title:'Error',
                message:'Somthing went wrong.',
                type: 'error',
            })
        }finally{
            setIsCreating(false)
        }
    }

  return <div>RequestApiKey</div>
}

export default RequestApiKey
