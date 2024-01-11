import React from 'react'

import { CContainer, CTable, CButton, CPaginationItem, CPagination } from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { cilColorBorder, cilTrash } from '@coreui/icons'

const AppContent = () => {
  const columns = [
    {
      key: 'id',
      label: 'No.',
      _props: { scope: 'col' },
    },
    {
      key: 'class',
      label: 'Name',
      _props: { scope: 'col' },
    },
    {
      key: 'heading_1',
      label: 'Email',
      _props: { scope: 'col' },
    },
    {
      key: 'heading_2',
      label: 'Role',
      _props: { scope: 'col' },
    },
    {
      key: 'heading_3',
      label: 'Action',
      _props: { scope: 'col' },
    },
  ]
  const items = [
    {
      id: 1,
      class: 'Mark',
      heading_1: 'Otto12mark@gamil.com',
      heading_2: 'Administrator',
      heading_3: (
        <div className="d-flex">
          <CButton className="table-btn me-2 btn" color="primary">
            <CIcon className="table-icon" icon={cilColorBorder} size="md" />
          </CButton>
          <CButton className="table-btn " color="primary">
            <CIcon className="table-icon" icon={cilTrash} size="md" />
          </CButton>
        </div>
      ),
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 2,
      class: 'Jacob',
      heading_1: 'Otto12mark@gamil.com',
      heading_2: '@fat',
      heading_3: (
        <>
          <CButton className="table-btn me-2 btn" color="primary">
            <CIcon className="table-icon" icon={cilColorBorder} size="md" />
          </CButton>
          <CButton className="table-btn " color="primary">
            <CIcon className="table-icon" icon={cilTrash} size="md" />
          </CButton>
        </>
      ),
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 3,
      class: 'Larry the Bird',
      heading_1: 'Otto12mark@gamil.com',
      heading_2: '@twitter',
      heading_3: (
        <>
          <CButton className="table-btn me-2 btn" color="primary">
            <CIcon className="table-icon" icon={cilColorBorder} size="md" />
          </CButton>
          <CButton className="table-btn " color="primary">
            <CIcon className="table-icon" icon={cilTrash} size="md" />
          </CButton>
        </>
      ),
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 4,
      class: 'Larry the Bird',
      heading_1: 'Otto12mark@gamil.com',
      heading_2: '@twitter',
      heading_3: (
        <>
          <CButton className="table-btn me-2 btn" color="primary">
            <CIcon className="table-icon" icon={cilColorBorder} size="md" />
          </CButton>
          <CButton className="table-btn " color="primary">
            <CIcon className="table-icon" icon={cilTrash} size="md" />
          </CButton>
        </>
      ),
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 5,
      class: 'Larry the Bird',
      heading_1: 'Otto12mark@gamil.com',
      heading_2: '@fat',
      heading_3: (
        <>
          <CButton className="table-btn me-2 btn" color="primary">
            <CIcon className="table-icon" icon={cilColorBorder} size="md" />
          </CButton>
          <CButton className="table-btn " color="primary">
            <CIcon className="table-icon" icon={cilTrash} size="md" />
          </CButton>
        </>
      ),
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 6,
      class: 'Jacob',
      heading_1: 'Otto12mark@gamil.com',
      heading_2: 'Agent',
      heading_3: (
        <>
          <CButton className="table-btn me-2 btn" color="primary">
            <CIcon className="table-icon" icon={cilColorBorder} size="md" />
          </CButton>
          <CButton className="table-btn " color="primary">
            <CIcon className="table-icon" icon={cilTrash} size="md" />
          </CButton>
        </>
      ),
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 7,
      class: 'Jacob',
      heading_1: 'Jacob3456@gamil.com',
      heading_2: '@fat',
      heading_3: (
        <>
          <CButton className="table-btn me-2 btn" color="primary">
            <CIcon className="table-icon" icon={cilColorBorder} size="md" />
          </CButton>
          <CButton className="table-btn " color="primary">
            <CIcon className="table-icon" icon={cilTrash} size="md" />
          </CButton>
        </>
      ),
      _cellProps: { id: { scope: 'row' } },
    },
  ]

  return (
    <CContainer
      fluid
      className="mx-lg-2 mx-md-0 my-4 py-2"
      style={{
        backgroundColor: '#fff',
        borderRadius: '0.5rem',
        overflowX: 'auto',
        boxShadow: '0px 0px 15px 1px rgb(165 165 165)',
      }}
    >
      <CTable
        style={{ borderRadius: '1rem' }}
        className="m-2 mb-5 custom-table"
        hover
        borderless
        columns={columns}
        items={items}
      />
      <CPagination className="pagination me-md-3" align="end" aria-label="Page navigation example">
        <CPaginationItem disabled>Previous</CPaginationItem>
        <CPaginationItem active>1</CPaginationItem>
        <CPaginationItem>2</CPaginationItem>

        <CPaginationItem>Next</CPaginationItem>
      </CPagination>
    </CContainer>
  )
}

export default React.memo(AppContent)
