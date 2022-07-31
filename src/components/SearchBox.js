import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const SearchBox = () => {

    const [keyword, setKeyword] = useState("")

    const submitHandler = () =>{
        console.log("submitted")
    }

  return (

    <div>
        <Form onSubmit={submitHandler} className="d-flex">
                <Form.Control
                type='text' 
                name= 'q' 
                onChange={(e) => setKeyword(e.target.value)}
                className='mr-sm-2 ml-sm-5'
                placeholder = 'Search'
                >
                </Form.Control>

                <Button
                type='submit'
                variant = 'outline-primary'
                className='p-2'
                >Submit</Button>
        </Form>
    </div>
  )
}

export default SearchBox