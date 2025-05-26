import React from 'react';
import './SimpleAppointmentCard.css'; // External CSS for additional styling

// Reusable simple appointment card component
const SimpleAppointmentCard = ({ name, time, icon }) => {
  return (
    // Main card container with inline styles and optional CSS class
    <div style={styles.section} className='health-details'>
      
      {/* Top section: name and icon spaced apart */}
      <div style={styles.divSection}>
        <p style={{ fontSize: '12px', fontWeight: '500' }}>{name}</p>
        <p style={{ fontSize: '14px' }}>{icon}</p>
      </div>

      {/* Bottom section: time of appointment */}
      <p style={{ fontSize: '12px', color: 'black' }}>{time}</p>
    </div>
  );
}

export default SimpleAppointmentCard;

// Inline styling used for layout and appearance
const styles = {
  section: {
    backgroundColor: 'lightblue',       // Light background for visibility
    padding: '12px',                    // Inner spacing
    borderRadius: '10px',               // Rounded corners
    display: 'flex',                    // Flex column layout
    flexDirection: 'column',
    gap: '5px',                         // Gap between name/icon and time
  },
  divSection: {
    display: 'flex',                    // Row layout for name and icon
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',    // Space between name and icon
    gap: '30px',                         // Extra spacing (if needed)
  }
}