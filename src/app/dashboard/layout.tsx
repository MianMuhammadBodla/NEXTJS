import Link from 'next/link'
import React from 'react'

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='grid grid-cols-[10rem,auto] bg-gray-700'>
   
   
         <div className="flex flex-col w-3 text-bold text-2xl">
         
         <Link href="/dashboard/analytics">Analytics</Link>
    <Link href="/dashboard/setting">Setting</Link>
         </div>
        <div>{children}</div>
    </div>
  )
}

export default Layout