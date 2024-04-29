// // WelcomeBanner.js
// import React from "react"
// import { Container, Row, Col, Image } from "react-bootstrap"
// import "bootstrap/dist/css/bootstrap.min.css"

// const Banner = () => {
// 	return (
// 		<Container fluid className="p-3 bg-light">
// 			<Row>
// 				<Col xs={6} md={4}>
// 					<Image src="https://d3udzp2n88cf0o.cloudfront.net/css/logo.png" alt="NGASCE Logo" fluid style={{ height: "56px", width: "197px" }} />
// 				</Col>
// 				<Col xs={6} md={8} className="d-flex justify-content-end align-items-center">
// 					<h6 style={{ color: "#DC3545" }}>WELCOME TO NGASCE STUDENT ZONE</h6>
// 				</Col>
// 			</Row>
// 		</Container>
// 	)
// }

// export default Banner

// WelcomeBanner.js
import { faBell } from '@fortawesome/free-regular-svg-icons'
import {
    faArrowRightFromBracket,
    faEnvelope,
    faMagnifyingGlass,
    faSuitcase,
    faUser
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { Container, Image } from 'react-bootstrap'

const Banner = () => {
  return (
    <Container fluid className="p-3 bg-light">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Image
          src="https://d3udzp2n88cf0o.cloudfront.net/css/logo.png"
          alt="NGASCE Logo"
          fluid
          style={{ height: '30px', width: '100px' }}
        />
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <div sm={0}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <div sm={0}>
            <FontAwesomeIcon icon={faSuitcase} />
          </div>
          <div sm={0}>
            <FontAwesomeIcon icon={faEnvelope} />
          </div>{' '}
          <div sm={0}>
            {' '}
            <FontAwesomeIcon icon={faBell} />
          </div>{' '}
          <div sm={0}>
            {' '}
            <FontAwesomeIcon icon={faUser} />
          </div>{' '}
          <div sm={0}>
            {' '}
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Banner
