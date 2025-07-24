import React from 'react'
import {Mail, Instagram, Phone} from 'lucide-react'

function  Footer () {
  return (
    <footer className='flex flex-row gap-6 justify-between bg-[#0065F8] text-white'>
        <div className='font-bold my-5 cursor-pointer hove:bg-'>
        <p>&copy;2025</p>
        </div>

        <div className='flex'>
         <Mail/>
        <Instagram />
        <Phone/>
        </div>

        <div>
            <h2>Group 3 react app</h2>
            <p>Shantell Wambui</p>
            <p>Andrew Rimongi</p>
            <p>Agostino Omare</p>
        </div>

    </footer>
  )
}

export default Footer