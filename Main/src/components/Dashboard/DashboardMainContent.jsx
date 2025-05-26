import React from 'react';
import './Dashboard.css';
import AnatomySection from '../AnatomySection/AnatomySection';
import DashboardOverview from '../DashboardOverview/DashboardOverview';
import CalendarView from '../CalendarView/CalendarView';
import UpcomingSchedule from '../UpcomingSchedule/UpcomingSchedule';
import ActivityFeed from '../ActivityFeed/ActivityFeed';

const DashboardMainContent = () => {
  return (
    <section className='dashboard'>
      <section className='dashboard-left'>
        <div className='dashboard-header'>
          <h1>Dashboard</h1>
          <p>This Week →</p>
        </div>
        {/* 2 Main Sections are below these are displaying the main content like Human Body and more */}
        <DashboardOverview />
        <ActivityFeed />
      </section>

      <section className='dashboard-right'>
         {/* The Calendar Section was below with upcoming schedule */}
        <CalendarView />
        <UpcomingSchedule />
      </section>
    </section>
  )
}

export default DashboardMainContent