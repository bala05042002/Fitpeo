import React from 'react';
import './CalendarView.css';
import { appointments } from '../../data/appointments';

// Single date card component
const DateComponent = ({ day, date, t1, t2, t3, t1Aval, t2Aval, t3Aval, available, current }) => {
  return (
    <div 
      className='date-info'
      // Highlight current day and reduce opacity if not available
      style={{
        backgroundColor: current && 'rgb(206, 206, 255)', 
        opacity: !available && '0.6'
      }}
    >
      <p>{day}</p>
      <h1>{date}</h1>

      {/* First time slot */}
      <p
        style={{
          backgroundColor: (current && t1Aval && 'blue') || (!current && t1Aval && 'blue'),
          color: t1Aval ? 'white' : '',
          opacity: (current && t1Aval && '1') || (!current && t1Aval && '0.2')
        }}
      >
        {t1} {!current && t1Aval && <span>•</span>}
      </p>

      {/* Second time slot */}
      <p
        style={{
          backgroundColor: (current && t2Aval && 'blue') || (!current && t2Aval && 'blue'),
          color: t2Aval ? 'white' : '',
          opacity: (current && t2Aval && '1') || (!current && t2Aval && available && '0.2')
        }}
      >
        {t2} {!current && t2Aval && <span>•</span>}
      </p>

      {/* Third time slot (no custom style) */}
      <p>{t3}</p>
    </div>
  );
};

const CalendarView = () => {
  return (
    <section className='calender-section'>
      <h1>May 2025</h1>

      {/* Weekly date tiles */}
      <div className='dates'>
        <DateComponent day={'Mon'} date={'25'} t1={'10:00'} t2={'11:00'} t3={'12:00'} t1Aval={false} t2Aval={false} t3Aval={false} available={true} current={false} />
        <DateComponent day={'Tues'} date={'26'} t1={'08:00'} t2={'09:00'} t3={'10:00'} t1Aval={false} t2Aval={true} t3Aval={false} available={true} current={true} />
        <DateComponent day={'Wed'} date={'27'} t1={'12:00'} t2={'----'} t3={'13:00'} t1Aval={false} t2Aval={false} t3Aval={false} available={true} current={false} />
        <DateComponent day={'Thurs'} date={'28'} t1={'10:00'} t2={'11:00'} t3={'----'} t1Aval={false} t2Aval={true} t3Aval={false} available={true} current={false} />
        <DateComponent day={'Fri'} date={'29'} t1={'----'} t2={'14:00'} t3={'16:00'} t1Aval={false} t2Aval={false} t3Aval={false} available={true} current={false} />
        <DateComponent day={'Sat'} date={'30'} t1={'12:00'} t2={'14:00'} t3={'15:00'} t1Aval={true} t2Aval={false} t3Aval={false} available={true} current={false} />
        <DateComponent day={'Sun'} date={'31'} t1={'09:00'} t2={'10:00'} t3={'11:00'} t1Aval={true} t2Aval={false} t3Aval={false} available={false} current={false} />
      </div>

      {/* Appointment cards section */}
      <div className='appointment-cards'>
        {appointments.map(ele => (
          <div 
            className='appointment-card'
            // Styling based on availability
            style={{
              backgroundColor: ele.available ? 'rgb(25, 25, 156)' : 'lightblue',
              color: ele.available ? 'white' : 'darkblue'
            }}
          >
            <div>
              <p>{ele.type}</p>
              <img src={ele.img} alt="" />
            </div>
            <p>{ele.time}</p>
            <p>{ele.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CalendarView;