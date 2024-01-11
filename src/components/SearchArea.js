/* eslint-disable */

import React from 'react'
import { CContainer, CForm, CRow, CCol, CFormInput, CButton, CButtonGroup } from '@coreui/react'
import './css/compo.css'

export default function SearchArea() {
  return (
    <CContainer fluid className="d-flex align-items-center px-4 searchSec">
      <div className="secName me-auto">
        <h3>All User</h3>
      </div>

      <div>
        <CForm className="row g-3">
          <CCol xs="auto" className="align-self-center">
            <CFormInput type="password" id="inputPassword2" placeholder="Search user" />
          </CCol>
          <CCol xs="auto" className="align-self-center">
            <CButton style={{ backgroundColor: '#212631', borderRadius: '1rem' }}>Add New</CButton>
          </CCol>
        </CForm>
      </div>
      <div className="ms-5 d-flex">
        <CRow className="align-items-center">
          <CCol className="d-md-none"></CCol>
          <CCol>
            <h5 className="text-end align-self-center">Export</h5>
          </CCol>
          <CCol>
            <CButtonGroup role="group" className="group-btn" aria-label="Basic outlined example">
              <CButton className="btn" variant="outline">
                Excel
              </CButton>
              <CButton className="btn" variant="outline">
                Pdf
              </CButton>
            </CButtonGroup>
          </CCol>
        </CRow>
      </div>
    </CContainer>
  )
}
