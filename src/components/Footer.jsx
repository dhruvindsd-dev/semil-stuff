import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import '../cssprops/footer.css'

const Footer = () => {
  return (
    <Container
      fluid
      className="footer"
      style={{ backgroundColor: 'red', marginTop: '20px' }}>
      <Row style={{ margin: '0' }}>
        <Col xs={12} md={3}>
          <h5>Quick Links:</h5>
          <ul>
            <li>Seayon Plus</li>
            <li>My Documents</li>
            <li>Demo Team</li>
            <li>Know Your Policy</li>
            <li>Register for Exam</li>
            <li>Re-registration</li>
          </ul>
        </Col>

        <Col xs={12} md={3}>
          <h5>Visit Us:</h5>
          <p>V.L.Mehta Road, Vile Parle (W), Mumbai, Maharashtra - 400056</p>
        </Col>
        <Col xs={12} md={3}>
          <h5>System Requirements:</h5>
          <ul>
            <li>Team Speed - 4GB or above</li>
            <li>Minimum Resolution - 1024x768 or above</li>
            <li>Constant Internet - Active</li>
            <li>Browser - Chrome, Firefox, Safari, Edge</li>
          </ul>
        </Col>
        <Col xs={12} md={3}>
          <h5>Connect with us:</h5>
          <div style={{ justifyContent: 'center' }}>
            <FaInstagram className="social-icon" />
            <FaYoutube className="social-icon" />
            <FaFacebookF className="social-icon" />
            <FaTwitter className="social-icon" />
          </div>
        </Col>
      </Row>
      <Row style={{ margin: '0' }}>
        <Col>
          <p className="text-center">© 2024 MMML. All Rights Reserved.</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
