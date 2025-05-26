import React from 'react'
import './Anatomy.css'

const AnatomySection = () => {
  return (
    <div className='anatomy'>
      <div className='anatomy-image'>
        {/* In some hardware issue so can't use react-three for human 360deg approach */}
        <img src={'https://static.vecteezy.com/system/resources/previews/051/554/965/non_2x/human-anatomy-model-muscles-veins-png.png'} alt="" />

        <div className='heart'>
          <p>💖 Healthy Heart</p>
          <div className='heart-focus'>
            <div className='loading'></div>
          </div>
        </div>

        <div className='leg'>
          <p>
            🦵 Healthy Leg
          </p>
          <div className='leg-focus'>
            <div className='loading'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnatomySection