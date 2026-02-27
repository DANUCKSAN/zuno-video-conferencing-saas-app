import { sidebarLinks } from '@/constants'
import React from 'react'

const Sidebar = () => {
  return (
    <section className='sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]'>
        <div className='flex flex-col gap-6'>
            {sidebarLinks.map((link,index) => (
                <div key={index} className='flex cursor-pointer items-center gap-3 text-sm font-medium'>
                    <span>{link.label}</span>
                </div>
            ))}
        </div>

    </section>
  )
}

export default Sidebar
