import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '@fortawesome/fontawesome-free/css/all.min.css' 

const Footer = () => {
  const currentYear = new Date().getFullYear() 

  return (
    <footer style={{ backgroundColor: '#000', color: '#fff', padding: '20px 0', marginTop:'20px'}}>
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={12}>
            <p> &copy; {currentYear} ICC-Project. All rights reserved.</p>
          </Col>
        </Row>

      
      </Container>
    </footer>
  )
}

export default Footer
