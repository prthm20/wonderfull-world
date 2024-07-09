
import React from 'react'
import Navbar from '../../components/ui/Navbar'


import { InfiniteMovingCardsDemo } from '../../components/ui/Testimonials'
import Foter from '../../components/ui/Foter'
import { ThreeDCardDemo } from '../../components/ui/Category'
import Component from '../../components/ui/loginbtn'
import { connect } from '../../dbconfig/dbconfig'
import UserModel from '../../../model/User'



async function page() {
  
  return (
    <div>
    
     <Navbar></Navbar>
     <div className='p-28' >
      <img src="https://images.pexels.com/photos/3030268/pexels-photo-3030268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""  className=' rounded-2xl' />
     </div>
     <div className=' text-center  text-2xl text-bold font-sans opacity-70'><h1>Categories</h1></div>
    <div className='flex  '>
        
       <ThreeDCardDemo title="Religious" sourc='https://images.pexels.com/photos/415708/pexels-photo-415708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></ThreeDCardDemo>
       <ThreeDCardDemo title="Tourist" sourc='https://images.pexels.com/photos/161183/thailand-monks-temple-tourism-161183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></ThreeDCardDemo>
       <ThreeDCardDemo title="Nature" sourc='https://images.pexels.com/photos/235731/pexels-photo-235731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></ThreeDCardDemo>
       <ThreeDCardDemo title="Wonders of world" sourc='https://images.pexels.com/photos/10980106/pexels-photo-10980106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></ThreeDCardDemo>
      </div> 
    
<div className='p-5'>
     <div >
     <div className=' text-center  text-2xl text-bold font-sans opacity-70'><h1>Popular Destinations</h1></div>
     </div>
      <InfiniteMovingCardsDemo>

      </InfiniteMovingCardsDemo>
    </div>
    
<div>
  

  
  
</div>
    
    
   
  <div>
    <Foter></Foter>
  </div>

   
   
    </div>
     
  )
}



export default page