
import { Icons } from '@/components/Icons'
import { buttonVariants } from "@/components/ui/Button";
import LargeHeading from '@/components/ui/LargeHeading';
import Paragraph from '@/components/ui/Paragraph';
import UserAuthFrom from '@/components/UserAuthFrom';
import Link from "next/link";
import React, { FC } from "react";

const page = () => {
  return (
    <div className="absolute inset-0 mx-auto container flex h-screen flex-col items-center justify-center">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 max-w-lg">
            <div className="flex flex-col items-center gap-6 text-center">
                <Link className={buttonVariants({
                    variant:'ghost',
                    className:'w-fix',
                 })} href='/'>
                    <Icons.ChevronLeft className='mr h-4 w-4'/>
                    Back to home
                 </Link>
                 <LargeHeading>Welcome Back!</LargeHeading>
                 <Paragraph>Please sign in using your google account.</Paragraph>
                <UserAuthFrom /> 
            </div>
        </div>
    </div>
  );
};

export default page;
