import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './Sidebar';
import StatsCard from './StatsCard';
import ChartComponent from './ChartComponent';

const Dashboard = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <Container fluid className="p-4">
        <Row className="mb-4">
          <Col xs={12} sm={6} md={3}>
            <StatsCard title="New Accounts" value="234" percentage="58%" />
          </Col>
          <Col xs={12} sm={6} md={3}>
            <StatsCard title="Total Expenses" value="71%" percentage="62%" />
          </Col>
          <Col xs={12} sm={6} md={3}>
            <StatsCard title="Company Value" value="$1.45M" percentage="72%" />
          </Col>
          <Col xs={12} sm={6} md={3}>
            <StatsCard title="New Employees" value="+34 hires" percentage="81%" />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <ChartComponent />
          </Col>
        </Row>
        <Row className="mb-4">
          <Col xs={12} sm={6} md={3}>
            <StatsCard title="New Accounts" value="234" percentage="58%" />
          </Col>
          <Col xs={12} sm={6} md={3}>
            <StatsCard title="Total Expenses" value="71%" percentage="62%" />
          </Col>
          <Col xs={12} sm={6} md={3}>
            <StatsCard title="Company Value" value="$1.45M" percentage="72%" />
          </Col>
          <Col xs={12} sm={6} md={3}>
            <StatsCard title="New Employees" value="+34 hires" percentage="81%" />
          </Col>
        </Row>
        <Row className="mb-4">
          <Col xs={12} sm={6} md={3}>
            <StatsCard title="New Accounts" value="234" percentage="58%" />
          </Col>
          <Col xs={12} sm={6} md={3}>
            <StatsCard title="Total Expenses" value="71%" percentage="62%" />
          </Col>
          <Col xs={12} sm={6} md={3}>
            <StatsCard title="Company Value" value="$1.45M" percentage="72%" />
          </Col>
          <Col xs={12} sm={6} md={3}>
            <StatsCard title="New Employees" value="+34 hires" percentage="81%" />
          </Col>
        </Row>
        
      </Container>
    </div>
  );
};

export default Dashboard;
