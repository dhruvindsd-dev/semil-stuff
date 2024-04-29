import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal, faTrophy } from '@fortawesome/free-solid-svg-icons';
import '../cssprops/rank.css'; // Import the custom CSS

const ScoreCard = () => {
  return (
		<div className="center-container">
			{" "}
			{/* Center the card on the page */}
			<Card className="custom-card">
				{" "}
				{/* Apply custom styles to the card */}
				<Card.Header className="large-text">Sem: 1 Cycle: Jun 2021</Card.Header>
				<Card.Body>
					<Card.Text className="large-text">
						{" "}
						{/* Larger text */}
						<h2>86/100</h2>
					</Card.Text>
					<Row>
						<Col>
							<FontAwesomeIcon className="icon" icon={faMedal} /> My Rank
						</Col>
						<Col>
							<FontAwesomeIcon className="icon" icon={faTrophy} /> Total Score
						</Col>
					</Row>
					<Row className="large-text" style={{ color: "red" }}>
						<Col>366/600</Col>
						<Col>86/100</Col>
					</Row>
				</Card.Body>
			</Card>
			<Card className="custom-card">
				{" "}
				{/* Apply custom styles to the card */}
				<Card.Header className="large-text">Sem: 2 Cycle: Jun 2021</Card.Header>
				<Card.Body>
					<Card.Text className="large-text">
						{" "}
						{/* Larger text */}
						<h2>406th Rank</h2>
					</Card.Text>
					<Row>
						<Col>
							<FontAwesomeIcon className="icon" icon={faMedal} /> My Rank
						</Col>
						<Col>
							<FontAwesomeIcon className="icon" icon={faTrophy} /> Total Score
						</Col>
					</Row>
					<Row className="large-text" style={{ color: "red" }}>
						<Col>406/600</Col>
						<Col>66/100</Col>
					</Row>
				</Card.Body>
			</Card>
		</div>
	)
};

export default ScoreCard;
