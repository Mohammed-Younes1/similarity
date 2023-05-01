'use client'
import {ThemeProvider} from "next-themes"
import React, { ReactNode } from 'react'
import {SessionProvider} from 'next-auth/react'

// interface Props {}

const Providers = ({children}: {children: ReactNode}) => {
  return <ThemeProvider attribute='class' defaultTheme="system" enableSystem>
         <SessionProvider>
            {children}
        </SessionProvider>
        </ThemeProvider>
}

export default Providers