import React from 'react'
import {Mail, Instagram, Phone} from 'lucide-react'

function  Footer () {
  return (
    <footer className='flex flex-row gap-6 justify-between bg-white text-[#b6115b] w-full h-auto rounded-2xl'>
        <div className='font-bold cursor-pointer'>
        <p className=''>&copy;2025</p>
        </div>

        <div className='flex space-x-4 cursor-pointer my-5 font-bold'>
         <Mail/>
        <Instagram />
        <Phone/>
        </div>

        <div className='font-bold font-serif cursor-pointer p-2'>
            <h2 className='my-2 underline underline-offset-2'>Group 3 react app</h2>
            <p>Shantell Wambui</p>
            <p>Andrew Rimongi</p>
            <p>Agostino Omare</p>
        </div>

    </footer>
  )
}

export default Footer