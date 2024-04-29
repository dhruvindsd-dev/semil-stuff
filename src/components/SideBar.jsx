import { faCog, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import '../cssprops/sidebar.css'

const SideBar = () => {
  return (
    <div
      style={{
        width: '60px',
        backgroundColor: 'black',
        color: 'white',
      }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          padding: '1rem 0',
          position: 'sticky',
          top: '62px',
        }}>
        <FontAwesomeIcon icon={faHome} />
        <FontAwesomeIcon icon={faUser} />
        <FontAwesomeIcon icon={faCog} />
      </div>
    </div>
  )
}

export default SideBar
