import React from 'react'
import image1 from '../assets/images/Group01.png'
import image2 from '../assets/images/Group02.png'
import image3 from '../assets/images/Group03.png'
import image4 from '../assets/images/Group04.png'
import image5 from '../assets/images/Group05.png'

const Blogging = () => {
  return (
    <div className='blogging'>
      <div>A lot is happening, <br/>
        We are blogging about it.
      </div>
<div className='d-none d-xl-flex'>
<div>
    <img src={image1} className='image1'></img>
</div>
<div className='ms-5'>
<img src={image2} className='me-4 mb-5'></img>
<img src={image3} className='mb-5'></img>
<img src={image4} className='me-4'></img>
<img src={image5}></img>
</div>
</div>

<div >
   <div className='d-flex d-xl-none justify-content-center'>
    <img src={image1} style={{width: "100%"}} ></img>
  </div>
    <div className='d-flex d-xl-none justify-content-center flex-wrap gap-5 mt-5'>
   <img src={image2} ></img>
   <img src={image3} ></img>
   <img src={image4} ></img>
   <img src={image5} ></img>
   </div>
</div>
</div>
  )
}

export default Blogging
