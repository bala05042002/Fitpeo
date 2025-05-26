import React from 'react';
import './UpcomingSchedule.css'; // Importing component-specific styles
import SimpleAppointmentCard from '../SimpleAppointmentCard/SimpleAppointmentCard.jsx'; // Reusable appointment card

const UpcomingSchedule = () => {
  return (
    <div className='upcoming'>
      {/* Main heading for the section */}
      <h1>The Upcoming Schedule</h1>

      {/* Thursday's appointments */}
      <p>On Thursday</p>
      <div className='cards'>
        <SimpleAppointmentCard name={'Health checkup complete'} icon={'💉'} time={'11:00 AM'} />
        <SimpleAppointmentCard name={'Ophthalmologist'} icon={'👁️'} time={'14:00 PM'} />
      </div>

      {/* Saturday's appointments */}
      <p>On Saturday</p>
      <div className='cards'>
        <SimpleAppointmentCard name={'Cardiologist'} icon={'❤️'} time={'12:00 PM'} />
        <SimpleAppointmentCard name={'Neurologist'} icon={'🧑‍⚕️'} time={'16:00 PM'} />
      </div>
    </div>
  );
}

export default UpcomingSchedule;