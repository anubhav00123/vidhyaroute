import BreadcrumbBanner from '@/components/BreadCrumbBanner'
import Navbar from '@/components/Navbar'
import MainContent from '@/components/business/MainContent'
import Sidebar from '@/components/business/Sidebar'
import React from 'react'

const businessvisa = () => {
  return (
    <>
    <Navbar/>
    <BreadcrumbBanner title="Business Visa" />
    <div className='container' style={{marginTop:"100px"}}>
        <div className='row'>
            <Sidebar/>
            <MainContent/>
        </div>
    </div>
    
    
    </>
  )
}

export default businessvisa