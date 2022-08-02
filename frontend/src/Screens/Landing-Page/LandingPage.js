import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import './LandingPage.css'
const LandingPage = () => {
  return (
    <div className='main'>
      <Container>
        <Row>
          <div className='content'>
            <h1 className='title'>One Stop Place for all your Notes!</h1>
            <div className='button-container'>
              <a href='/login'>
                <Button variant='outline-info' size='lg'>
                  Login
                </Button>
              </a>
              <a href='/register'>
                <Button variant='outline-danger' size='lg'>
                  Sign Up
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default LandingPage
