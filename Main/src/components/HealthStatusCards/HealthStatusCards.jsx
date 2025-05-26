import React from 'react';
import healthData from '../../data/healthData.js'; // Importing mock health status data
import './HealthStatusCards.css'; // Importing component-specific styles

const HealthStatusCards = () => {
  return (
    <>
      <div className='health-cards'>
        {/* Mapping through each health record to display a card */}
        {healthData.map((item, index) => (
          <div key={index} className='health-card'>
            {/* Card header with image and name */}
            <div className='info'>
              <img src={item.img} />
              <h3 style={{ fontSize: '1rem' }}>{item.name}</h3>
            </div>

            {/* Displaying the date of the health record */}
            <p className='date'>Date: {item.date}</p>

            {/* Health percentage bar styled based on value and color */}
            <div className='percentage'>
              <div 
                style={{
                  width: `${item.healthPercentage}`, 
                  backgroundColor: `${item.color}`, 
                  height: '10px'
                }}
              ></div>
            </div>
          </div>
        ))}

        {/* Static detail link or label at the bottom */}
        <p className='details'>Details <span style={{fontSize: '1.2rem'}}>→</span></p>
      </div>
    </>
  );
}

export default HealthStatusCards;