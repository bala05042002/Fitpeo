import React from 'react'
import AnatomySection from '../AnatomySection/AnatomySection'
import HealthStatusCards from '../HealthStatusCards/HealthStatusCards'

const DashboardOverview = () => {
  return (
    <section className='dashboard-overview'>
      {/* As you mensioned in the Assignment these 2 sections are seperated. */}
        <AnatomySection />
        <HealthStatusCards />
    </section>
  )
}

export default DashboardOverview