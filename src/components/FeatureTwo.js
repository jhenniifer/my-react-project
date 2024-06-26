import React from 'react'
import featureImage from '../assets/images/Feature Image.png'

const FeatureTwo = () => {
  return (
    <div className='featured-two d-lg-flex gap-xl-5 mt-5 mb-5'>
     <div>
       <img src={featureImage} ></img>
     </div>
      <div >
        <p>Request Early Access to Get Started</p>
        <h3 className='mt-lg-3 mt-xxl-2'>The possibilities are beyond your imagination</h3>
        <p  className='mt-lg-4 mt-xxl-3'>
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
       </p>
       <p className='mt-lg-4'>
       Request Early Access to Get Started
       </p>
      </div>
    </div>
  )
}

export default FeatureTwo
