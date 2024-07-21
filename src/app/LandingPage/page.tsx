'use client'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

function Landingpage() {
  const router = useRouter()
  router.push(`/Home`)
  return (
    
    <div>
       <div className="flex justify-between h-full w-100%">

<div className="m-5 mt-20">
<div className="text-black font-sans text-left text-7xl">
Adventure
</div>
<div className="text-black font-sans text-left text-7xl">
is 
</div>
<div className="text-black font-sans text-left text-7xl">
worthwhile.
</div>
<div className="m-16 ml-20">
<Link href={"/Home"}>
    <button className=" text-center text-white font-extrabold bg-violet-600 p-5 rounded-full hover:bg-fuchsia-500">
            Let&apos;s Explore &rarr; 
    </button>
</Link>
</div>
</div>


</div>
    </div>
  )
}

export default Landingpage
