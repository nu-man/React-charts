import React from 'react';
import { ComposedChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, PieChart, Pie, Cell } from 'recharts';
import { Container, Row, Col,Card } from 'react-bootstrap';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const data = [
  { name: 'Jan 01', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Jan 02', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Jan 03', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Jan 04', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Jan 05', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jan 06', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Jan 07', uv: 3490, pv: 4300, amt: 2100 },
];

const pieData = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const percentage = 75;

const MeterGauge = () => (
  <CircularProgressbar
    value={percentage}
    text={`${percentage}%`}
    styles={buildStyles({
      textSize: '16px',
      pathColor: '#00C49F',
      textColor: '#000',
      trailColor: '#d6d6d6',
    })}
  />
);

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const ChartComponent = () => (
  <Container fluid>
    <Row>
      <Col xs={12} md={8}>
        <ComposedChart width={600} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </ComposedChart>
      </Col>
      <Col xs={12} md={4}>
        {/* <PieChart width={300} height={300}>
          <Pie
            data={pieData}
            cx={150}
            cy={150}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart> */}
        <MeterGauge/>
      </Col>
      {/* <Col xs={12} md={6}>
        <MeterGauge size={200} />
      </Col>
      <Col xs={12} md={6}>
        <MeterGauge size={200} />
      </Col> */}
    </Row>
    
  </Container>
 
);

export default ChartComponent;
