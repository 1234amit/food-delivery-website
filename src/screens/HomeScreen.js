import React from 'react'
import menus from '../menus'
import { Col, Row } from 'react-bootstrap'
import Menu from '../components/Menu'


const HomeScreen = () => {

  return (

    <div>
        <h1 className="text-center">Latest Menu</h1>

        <Row>
            {menus.map(menu => (
                <Col key={menu._id} sm={12} md={6} lg={4} xs={3}>
                    <Menu menu={menu} />
                </Col>
            ))}
        </Row>
    </div>
  )
}

export default HomeScreen