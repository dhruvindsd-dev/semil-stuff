import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'

const ProfileBanner = () => {
  return (
    <div>
      <div
        style={{
          background:
            'linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)',
          marginTop: '-16.5px',
          border: '0',
          padding: '20px',
        }}>
        <Row className="align-items-center">
          <Col xs={1}>
            <Image
              style={{ maxWidth: '50px' }}
              src="https://www.w3schools.com/howto/img_avatar.png"
              roundedCircle
              fluid
            />{' '}
            {/* Circular profile photo */}
          </Col>
          <Col xs={9}>
            <h5 style={{ color: 'white' }}>Semil Sandip Shah</h5>{' '}
            {/* Full name */}
            <p style={{ color: 'white' }} className="">
              shahsemil2@gmail.com | clueless-bot | 7021109502 | 12/09/2024
            </p>{' '}
            {/* Other details separated by | */}
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default ProfileBanner
