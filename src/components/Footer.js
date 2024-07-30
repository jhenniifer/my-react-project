import React from 'react'

const Footer = () => {
  return (
    <div className='footer text-white'>
      <p>Do you want to step in to the future before others </p>
      <button className='bg-transparent border-white text-white p-3 m-auto my-5'>Request early access</button>
    
      <div className='d-flex justify-content-between '>
        <div className='mt-5 ms-2 ms-lg-0 me-4'>
            <p className='fs-3 fw-bold'>GPT-3</p>
            <p>Crechterwoord K12 182 DK <br/> Alknjkcb, All Rights Reserved</p>
        </div>
        <div className='row gap-4 mt-5 ms-2 ms-lg-4'>
            <ul className=' col me-xl-5'>
                <p className='fw-bold'>Links</p>
                <li>Overons</li>
                <li>Social Media</li>
                <li>Counters</li>
                <li>Contact</li>
                
            </ul>
            <ul className='col me-xl-5'>
                <p className='fw-bold'>Company</p>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Contact</li>   
            </ul>
            <ul className='col'>
                <p className='fw-bold'>Get in touch</p>
                <li>Crechterwoord K12 <br/> 182 DK Alknjkcb</li>
                <li>085-132567</li>
                <li>info@payme.net</li>   
            </ul>
         </div>

    </div>

<p className='d-flex justify-content-center mt-5 pb-3'>© 2021 GPT-3. All rights reserved.</p>    
    </div>
  )
}

export default Footer
