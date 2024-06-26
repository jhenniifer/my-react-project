import React from 'react'
import signupImages from '../assets/images/Group 81.png'
import aiImage from '../assets/images/Frame 12.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import google from '../assets/images/google.png'
import slack from '../assets/images/slack.png'
import atlassian from '../assets/images/atlassian.png'
import dropbox from '../assets/images/dropbox.png'
import shopify from '../assets/images/shopify.png'




const Hero = () => {
  return (
    <div>
    <div className='d-lg-flex hero '>
      <div className='hero-left '>
       <h2 className='hero-heading'> Let’s Build Something amazing with GPT-3 OpenAI</h2>
       <p className='hero-p'> Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
       <form className=' mb-5 d-flex align-content-center'>
         <input type='text' placeholder='Your Email Address' />
         <button className='btn text-white' type='submit'> Get Started</button>
       </form>
       <div className='d-flex'>
        <img src={signupImages} alt='' style={{width: "120px", height: "25px"}}></img>
        <p className='pt-sm-1 ps-3'>1,600 people requested access a visit in last 24 hours</p>
       </div>
      </div>
      <div>
      <img src={aiImage} alt='' className='ai-image m-auto m-lg-0'></img>
      </div>
      </div>
      <div className='hero-icons d-flex justify-content-center gap-3 gap-md-5 my-5'>
       <img src={google} alt=''></img>
       <img src={slack} alt=''></img>
       <img src={atlassian} alt=''></img>
       <img src={dropbox} alt=''></img>
       <img src={shopify} alt=''></img>
      </div>
    </div>
   
  )
}

export default Hero
