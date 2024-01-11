/* eslint-disable */

import React, { useRef, useState, useEffect } from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import SearchArea from '../components/SearchArea'

const DefaultLayout = () => {
  const [sidebarShow, setSidebarShow] = useState(window.innerWidth > 768)
  console.log(sidebarShow)

  // Update the state when the screen width changes
  const handleResize = () => {
    setSidebarShow(window.innerWidth > 768)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div>
      <AppSidebar sidebarShow={sidebarShow} setSidebarShow={setSidebarShow} />
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader setSidebarShow={setSidebarShow} />
        <SearchArea />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        {/* <AppFooter /> */}
      </div>
    </div>
  )
}

export default DefaultLayout
