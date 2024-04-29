import {
    faSquareMinus,
    faSquarePlus
} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Card, Container } from 'react-bootstrap'
import '../cssprops/academiccard.css'

const AcademicCard = () => {
  // State to track whether the card list is visible or not
  const [showCards, setShowCards] = useState(true)

  // Function to toggle the visibility of the card list
  const toggleShowCards = () => {
    setShowCards((prevShowCards) => !prevShowCards)
  }

  return (
    <div style={{ margin: '4rem 0' }}>
      <Container style={{ textWrap: 'nowrap' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}>
          <div style={{ width: 'fit-content' }}>ACADEMIC CALENDAR</div>
          <div
            style={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
            }}
            onClick={toggleShowCards}>
            <div>UPCOMING SEE ALL</div>
            <FontAwesomeIcon
              icon={showCards ? faSquareMinus : faSquarePlus}
              color={showCards ? 'red' : 'green'}
            />
          </div>
        </div>
      </Container>

      {showCards && (
        <div className="card-lists">
          {[...Array(5)].map((_, i) => (
            <Card key={i}>
              <Card.Body>
                <Card.Text>27-Apr-2024</Card.Text>
                <Card.Title>Manpower Planning</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Session 10
                </Card.Subtitle>
                <Card.Text style={{ color: 'blue' }}>
                  Common for all batches
                </Card.Text>
                <Card.Text>Prof.Rajshree</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

export default AcademicCard
