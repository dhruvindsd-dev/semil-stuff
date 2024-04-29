import {
    faSquareMinus,
    faSquarePlus
} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import '../cssprops/badge.css'

const Badge = () => {
  const imageUrl =
    'https://badgesfiles.s3.ap-south-1.amazonaws.com/alumnibages/Diploma-(BM).png'
  const title =
    'Post Graduate Diploma in Business Management with specialization in Human Resource Management'
  const [showCards, setShowCards] = useState(true)

  // Function to toggle the visibility of the card list
  const toggleShowCards = () => {
    setShowCards((prevShowCards) => !prevShowCards)
  }
  return (
    <div>
      <Container>
        <Row
          className="align-items-center justify-center"
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '5rem ',
          }}>
          <Col xs="auto">
            <strong>YOUR LATEST BADGE </strong>
          </Col>
          <Col
            xs="auto"
            onClick={toggleShowCards}
            style={{ cursor: 'pointer' }}>
            <span style={{ marginRight: '1rem' }}>SEE ALL </span>
            <FontAwesomeIcon
              icon={showCards ? faSquareMinus : faSquarePlus}
              color={showCards ? 'red' : 'green'}
              className="ml-2"
            />
          </Col>
        </Row>
      </Container>
      {showCards && (
        <Container className="card-center">
          {' '}
          {/* Apply the CSS class for centering */}
          <Card className="styled-card" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imageUrl} alt={title} />
            <Card.Body>
              <Card.Title style={{ color: 'blue' }}>{title}</Card.Title>
            </Card.Body>
          </Card>
        </Container>
      )}
    </div>
  )
}

export default Badge
