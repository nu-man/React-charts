import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="d-flex flex-column  p-3 bg-light" style={{ width: '250px' }}>
      <Nav className="flex-column">
        <Nav.Item className='primary'>Menu
        
          <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
          <Nav.Link as={Link} to="/analytics">Analysis</Nav.Link>
          <Nav.Link as={Link} to="/analytics">Commerce</Nav.Link>
          <Nav.Link as={Link} to="/analytics">Sales</Nav.Link>
          <Nav.Link as={Link} to="/analytics">Minimal
          <Nav.Link as={Link} to="/analytics">Version 1</Nav.Link>
          <Nav.Link as={Link} to="/analytics">Version 2</Nav.Link>
          </Nav.Link>
          <Nav.Link as={Link} to="/analytics"> Pages</Nav.Link>
          <Nav.Link as={Link} to="/analytics"> Applications</Nav.Link>
        
        </Nav.Item>

        <Nav.Item>UI Components
        <Nav.Link as={Link} to="/analytics"> Elements</Nav.Link>
        <Nav.Link as={Link} to="/analytics">Components</Nav.Link>
        <Nav.Link as={Link} to="/analytics">Tables</Nav.Link>

        </Nav.Item>
        <Nav.Item>Dashboard Widgets
        <Nav.Link as={Link} to="/analytics">Chart Boxes 1</Nav.Link>
        <Nav.Link as={Link} to="/analytics">Chart Boxes 2</Nav.Link>
        <Nav.Link as={Link} to="/analytics">Chart Boxes 3</Nav.Link>
        <Nav.Link as={Link} to="/analytics"> Profile Boxes</Nav.Link>
        </Nav.Item>
        <Nav.Item>Form
        <Nav.Link as={Link} to="/analytics">Elements</Nav.Link>
        <Nav.Link as={Link} to="/analytics"> Widgets</Nav.Link>

        </Nav.Item>
        <Nav.Item>Charts
        <Nav.Link as={Link} to="/analytics">ChartJS</Nav.Link>
        <Nav.Link as={Link} to="/analytics">Apex Charts</Nav.Link>
        </Nav.Item>
      </Nav>
     
    </div>
  );
};

export default Sidebar;
