import React from 'react';
import './ActivityFeed.css';

// Graph component representing one day's activity with four color-coded bars
const Graph = ({ name, color1, color11, color12, color2, color3, color31, color32, color4, split1, split2, split3, split4 }) => {
  return (
    <div className='graph'>
      {/* Visual bar indicators */}
      <div className='indicator'>
        {/* First bar with optional split */}
        <div style={{ backgroundColor: color1, gap: split1 && '5px' }}>
          {split1 && <div style={{ backgroundColor: color11, height: '50%' }}></div>}
          {split1 && <div style={{ backgroundColor: color12, height: '50%' }}></div>}
        </div>

        {/* Second bar */}
        <div style={{ backgroundColor: color2 }}></div>

        {/* Third bar with optional split */}
        <div style={{ backgroundColor: color3, gap: split3 && '5px' }}>
          {split3 && <div style={{ backgroundColor: color31, height: '45%' }}></div>}
          {split3 && <div style={{ backgroundColor: color32, height: '45%' }}></div>}
        </div>

        {/* Fourth bar */}
        <div style={{ backgroundColor: color4 }}></div>
      </div>

      {/* Day label */}
      <div style={{ fontSize: '10px', color: 'gray' }}>{name}</div>
    </div>
  );
};

// Main ActivityFeed component displaying weekly activity summary
const ActivityFeed = () => {
  return (
    <div className='activity'>
      {/* Header with summary */}
      <div className='activity-header'>
        <h4>Activity</h4>
        <p>3 appointments on this week</p>
      </div>

      {/* Weekly graph bars for each day */}
      <div className='graphs'>
        <Graph name={'Mon'} color1={'lightgray'} color2={'rgb(0, 255, 234)'} color3={'lightgray'} split1={false} split2={false} split4={false} split3={false} color4={'lightgray'} />
        <Graph name={'Tues'} color1={''} color11={'rgb(0, 255, 234)'} color12={'blue'} color2={'blue'} color3={'lightgray'} split1={true} split2={false} split4={false} split3={true} color4={'rgb(0, 255, 234)'} />
        <Graph name={'Wed'} color1={'lightgray'} color11={'rgb(0, 255, 234)'} color12={'blue'} color2={'blue'} color31={'rgb(0, 255, 234)'} color32={'blue'} color3={''} split1={false} split2={false} split4={false} split3={true} color4={'rgb(0, 255, 234)'} />
        <Graph name={'Thurs'} color1={'lightgray'} color11={'lightgray'} color12={'lightgray'} color2={'blue'} color31={'rgb(0, 255, 234)'} color32={'blue'} color3={'lightgray'} split1={true} split2={false} split4={false} split3={false} color4={'lightgray'} />
        <Graph name={'Fri'} color1={''} color11={'rgb(0, 255, 234)'} color12={'blue'} color2={'blue'} color3={'lightgray'} split1={true} split2={false} split4={false} split3={true} color4={'rgb(0, 255, 234)'} />
        <Graph name={'Sat'} color1={'lightgray'} color2={'rgb(0, 255, 234)'} color3={'lightgray'} split1={false} split2={false} split4={false} split3={false} color4={'lightgray'} />
        <Graph name={'Sun'} color1={'lightgray'} color11={'lightgray'} color12={'lightgray'} color2={'blue'} color31={'rgb(0, 255, 234)'} color32={'blue'} color3={'lightgray'} split1={true} split2={false} split4={false} split3={false} color4={'lightgray'} />
      </div>
    </div>
  );
};

export default ActivityFeed;