import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { Row, Col } from 'react-bootstrap'

const Footer = () => {

  return (

    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">copyright &copy; FoodWebsite</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer