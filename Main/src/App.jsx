import React from 'react'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import DashboardMainContent from './components/Dashboard/DashboardMainContent.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'

const App = () => {
  return (
    // Routing element replace with your component
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<DashboardMainContent />} />
          <Route path='/history' element={<DashboardMainContent />} />
          <Route path='/calender' element={<DashboardMainContent />} />
          <Route path='/appointments' element={<DashboardMainContent />} />
          <Route path='/statistics' element={<DashboardMainContent />} />
          <Route path='/chat' element={<DashboardMainContent />} />
          <Route path='/support' element={<DashboardMainContent />} />
          <Route path='/settings' element={<DashboardMainContent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App