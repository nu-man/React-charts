import React from 'react';
import { Card } from 'react-bootstrap';

const StatsCard = ({ title, value, percentage }) => {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text as="h4">{value}</Card.Text>
        <Card.Text className="text-muted">{percentage}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default StatsCard;
