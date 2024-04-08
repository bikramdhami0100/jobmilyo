import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Facebook, Link, Mail, MapPinned, Phone, Twitter, Youtube } from 'lucide-react'
import React from 'react'

function Footer() {
    const date=new Date();
    
    return (
         <div className=' w-[100%] mt-4 gap-2 border shadow-lg'>
              <div className=' w-[96%] mt-10 grid grid-cols-2 md:grid-flow-col lg:grid-flow-col gap-4 m-auto p-4 mb-4'>
            <div>
                <h1>Company</h1>
                <div className=' m-auto cursor-pointer gap-1 '> <span>&gt;</span>About us</div>
                <div className=' m-auto cursor-pointer gap-1 '> <span>&gt;</span>Contact us</div>
                <div className=' m-auto cursor-pointer gap-1 '> <span>&gt;</span>Our Services</div>
                <div className=' m-auto cursor-pointer gap-1 '> <span>&gt;</span>Privacy Policy</div>
                <div className=' m-auto cursor-pointer gap-1 '> <span>&gt;</span>Terms and Condition</div>
            </div>
            <div>
                <h1>Quick links</h1>
                <div className=' m-auto cursor-pointer gap-1 '> <span>&gt;</span>About us</div>
                <div className=' m-auto cursor-pointer gap-1 '> <span>&gt;</span>Contact us</div>
                <div className=' m-auto cursor-pointer gap-1 '> <span>&gt;</span>Our Services</div>
                <div className=' m-auto cursor-pointer gap-1 '> <span>&gt;</span>Privacy Policy</div>
                <div className=' m-auto cursor-pointer gap-1 '> <span>&gt;</span>Terms and Condition</div>
            </div>
            <div className=' flex flex-col gap-4'>
                <h1>Contact</h1>
               <div>
               <div className=' m-auto cursor-pointer gap-2 flex  flex-row items-center '>
                    <div>
                        <MapPinned />
                    </div>
                    <div>
                        katan-18, Mahendranagar, Nepal
                    </div>
                </div>
                <div className=' m-auto cursor-pointer gap-2 flex  flex-row items-center'><div>
                    <Phone /></div>
                    <div>9800000000</div>
                </div>
                <div className=' m-auto cursor-pointer gap-2 flex  flex-row items-center '><div>
                    <Mail /></div>
                    <div>
                        jobmilyo@gmail.com
                 </div> 
                 </div>
               </div>
                 <div>
                     <div className=' flex flex-row gap-2 items-center'>
                        <div><Twitter/></div>
                        <div><Facebook/></div>
                        <div><Youtube/></div>
                        <div><Link/></div>
                     </div>
                 </div>
            </div>
            <div className=' w-[200px] flex flex-col flex-wrap'>
                <h1>Newsletter</h1>
                <p>We value your privacy.</p>
                <div className=' flex flex-row-reverse items-center p-4 gap-2 mt-8'>
                    <Input className='  absolute w-[150px] h-[50px] mr-4' placeholder='Email' />
                    <Button className=' bg-green-600  absolute mr-6 '>Sign Up</Button>
                </div>
            </div>

        </div>
      {/* <div className='  '> */}
      <hr className=' shadow-2xl border w-[96%] m-auto'/>
         {/* <div><Button className=' bg-green-600 h-[50px] absolute'>&uarr;</Button></div> */}
      {/* </div> */}
         <div className=' flex flex-row justify-around items-center flex-wrap h-[60px]'>
              <div>
              Copyright © {date.getFullYear()} Bsc.CSIT Student of Far-western University. All rights reserved.
              </div>
              <div className=' flex flex-row gap-4'>
                  <div>Home</div>
                   <p>|</p>
                  <div>Cookies</div>
                    <p>|</p>
                  <div>Help</div>
                   <p>|</p>
                  <div>FAQs</div>
              </div>
         </div>
         </div>
       
    )
}

export default Footer
