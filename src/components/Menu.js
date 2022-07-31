import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rateing from './Rateing'

const Menu = ({menu}) => {

  return (
    
    <div>
        <Card className="my-3 p-3 rounded">
            <a href={`/menu/${menu._id}`}> 
                <Card.Img src={menu.image} />
            </a>

            <Card.Body>
                <a href={`/menu/${menu._id}`}>
                    <Card.Title as="div" className="menu-name">
                        <strong>{menu.name}</strong>
                    </Card.Title>
                </a>

                <Card.Text as="div">
                    <div className="my-3">
                        <Rateing value={menu.rating}  text={`${menu.numReviews} reviews`} color={'#f8e825'}/>
                    </div>
                </Card.Text>

                <Card.Text as="h3">
                    ${menu.price}
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Menu