import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderNav,
  CNavLink,
  CNavItem,
  CHeaderToggler,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilUser, cilCart, cilHome, cilMenu } from '@coreui/icons'

import { logo } from 'src/assets/brand/logo'

const AppHeader = ({ setSidebarShow }) => {
  const headerRef = useRef()
  // const { colorMode, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')

  // const dispatch = useDispatch()
  // const sidebarShow = useSelector((state) => state.sidebarShow)

  useEffect(() => {
    document.addEventListener('scroll', () => {
      headerRef.current &&
        headerRef.current.classList.toggle('shadow-sm', document.documentElement.scrollTop > 0)
    })
  }, [])

  const handleSideBar = () => {
    setSidebarShow((isClosed) => !isClosed)
  }

  return (
    <CHeader position="sticky" className="header mb-4">
      <CContainer fluid>
        <CHeaderToggler
          // onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
          onClick={handleSideBar}
          style={{ marginInlineStart: '-14px' }}
          className="d-md-none"
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <CIcon icon={logo} height={48} alt="Logo" />
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex align-items-center me-auto">
          <CNavItem height={250}>
            <CNavLink to="/dashboard" component={NavLink}>
              <CIcon icon={cilHome} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>/</CNavItem>
          <CNavItem>
            <CNavLink href="#">Users</CNavLink>
          </CNavItem>
          <CNavItem>/</CNavItem>
          <CNavItem>
            <CNavLink href="#">All User</CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav>
          <CNavItem></CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilCart} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilUser} size="lg" />
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
      </CContainer>
    </CHeader>
  )
}

AppHeader.propTypes = {
  setSidebarShow: PropTypes.bool.isRequired,
}

export default AppHeader
