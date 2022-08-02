import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        bottom: 0,
        position: 'relative',
      }}>
      <Container>
        <Row>
          <Col className='text-center py-3'>Copyright &copy; Notes MERN</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
