import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarHeader, CCloseButton } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { AppSidebarNav } from './AppSidebarNav'
import { logoNegative } from 'src/assets/brand/logo-negative'
import { sygnet } from 'src/assets/brand/sygnet'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import PropTypes from 'prop-types'
import './css/compo.css'

// sidebar nav config
import navigation from '../_nav'

const AppSidebar = ({ sidebarShow, setSidebarShow }) => {
  // const dispatch = useDispatch()
  // const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CSidebar
      position="fixed"
      // visible={sidebarShow}
      // onVisibleChange={(visible) => {
      //   dispatch({ type: 'set', sidebarShow: visible })
      // }}
      className={`${sidebarShow ? 'sideBarActive' : 'sideBarDective'}`}
      style={{ backgroundColor: '#212631', margin: '1rem', borderRadius: '1rem' }}
    >
      <CCloseButton
        className="m-3 ms-auto d-md-none closeBtn"
        onClick={() => {
          setSidebarShow((isOpen) => !isOpen)
        }}
      />
      <CSidebarBrand className="d-none d-md-flex" to="/" style={{ margin: '2rem' }}>
        <CIcon className="sidebar-brand-full" icon={logoNegative} height={35} />
        <CIcon className="sidebar-brand-narrow" icon={sygnet} height={45} />
      </CSidebarBrand>

      <CSidebarNav>
        <SimpleBar className="sideBarCate me-3">
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
    </CSidebar>
  )
}

AppSidebar.propTypes = {
  sidebarShow: PropTypes.bool.isRequired,
  setSidebarShow: PropTypes.bool.isRequired,
}

export default React.memo(AppSidebar)
