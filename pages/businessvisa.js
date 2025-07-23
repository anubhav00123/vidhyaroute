import BreadcrumbBanner from '@/components/BreadCrumbBanner'
import Navbar from '@/components/Navbar'
import MainContent from '@/components/business/MainContent'
import Sidebar from '@/components/business/Sidebar'
import Footer from '@/components/ui/Footer'
import React from 'react'

const businessvisa = () => {
  return (
    <>
    <Navbar/>
    <BreadcrumbBanner title="Our Services" />
    <div className='container' style={{marginTop:"100px"}}>
        <div className='row'>
            <Sidebar/>
            <MainContent/>
        </div>
    </div>
    <Footer/>
    
    
    </>
  )
}

export default businessvisa