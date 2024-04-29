import {
    faSquareMinus,
    faSquarePlus
} from '@fortawesome/free-regular-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import '../cssprops/assignmentpanel.css'; // Import the custom CSS file

const AssignmetsPanel = () => {
  const [showCards, setShowCards] = useState(true)

  // Function to toggle the visibility of the card list
  const toggleShowCards = () => {
    setShowCards((prevShowCards) => !prevShowCards)
  }

  return (
    <div>
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col xs="auto">
            <strong>ACADEMIC CALENDAR</strong>
          </Col>
          <Col
            xs="auto"
            onClick={toggleShowCards}
            style={{ cursor: 'pointer' }}>
            <span style={{ marginRight: '1rem' }}>SEE ALL</span>
            <FontAwesomeIcon
              icon={showCards ? faSquareMinus : faSquarePlus}
              color={showCards ? 'red' : 'green'}
              className="ml-2"
            />
          </Col>
        </Row>
      </Container>

      {showCards && (
        <Container className="mt-3">
          {/* List of academic activities */}
          {[
            'Manpower Planning, Recruitment and Selection',
            'Industrial Relations & Labour Laws',
            'Performance Management System',
            'Organizational Theory, Structure and Design',
            'Organization Culture',
            'Compensation & Benefits',
          ].map((title, index) => (
            <div
              key={index}
              className="text-with-icon align-items-center"
              style={{
                backgroundColor: 'white',
                width: '100%',
                height: '50px',
                border: '0.5px solid',
                display: 'flex',
                justifyContent: 'space-between',
                gap: '1rem',
              }}>
              <Col>{title}</Col>
              <Button size="sm" variant="light">
                <FontAwesomeIcon icon={faEye} />
              </Button>
            </div>
          ))}
        </Container>
      )}
    </div>
  )
}

export default AssignmetsPanel
