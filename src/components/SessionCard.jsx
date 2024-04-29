import {
    faSquareMinus,
    faSquarePlus
} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Card, Container } from 'react-bootstrap'
import '../cssprops/sessioncard.css'

const SessionCard = () => {
  const [showCards, setShowCards] = useState(true)

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
          <div style={{ width: 'fit-content' }}>SESSION RECORDING</div>
          <div
            style={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
            }}
            onClick={toggleShowCards}>
            <div>RECENT SEE ALL</div>
            <FontAwesomeIcon
              icon={showCards ? faSquareMinus : faSquarePlus}
              color={showCards ? 'red' : 'green'}
            />
          </div>
        </div>
      </Container>

      {showCards && (
        <div className="card-list">
          {[...Array(5)].map((_, i) => (
            <Card key={i}>
              <Card.Img
                variant="top"
                src="https://upload.wikimedia.org/wikipedia/en/e/ec/Narsee_Monjee_Institute_of_Management_Studies_Logo.png"
                style={{ maxWidth: '200px', marginLeft: '15px' }}
              />
              <Card.Body>
                <Card.Title>Organization Culture</Card.Title>
                <Card.Text>Prof.Jayant</Card.Text>
                <Card.Text>27-Apr-2024</Card.Text>

                <Card.Subtitle className="mb-2 text-muted">
                  Session 9 (Recordings)
                </Card.Subtitle>
                <Card.Text style={{ color: 'blue' }}>
                  Common for all batches
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

export default SessionCard
