import { getServerSession } from 'next-auth'
import Link from 'next/link'
import React from 'react'

interface NavbarProps {}

const NavbarProps = async({}) => {
    const session =await getServerSession()
  return (
    <div className='fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900 z-50 top-0 left-0 right-0 h-20 border-slate-300 dark:border-slate-700 shadow-sm flex item-center justify-between'>
        <div className='container max-w-7xl mkx-auto w-full flex justify-between items-center'>
            <Link href='/' className={buttonVariants}></Link>
        </div>
    </div>
  )
}

export default NavbarProps