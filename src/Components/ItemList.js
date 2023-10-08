import { Card, Col, Container, Row } from 'react-bootstrap'

import React from 'react'
import { items } from '../data'

const ItemList = ({itemsData}) => {
  return (
    <Row>
        {
            itemsData.length >=1 ? ( 
                itemsData.map((item)=>{
                    return (
                        <Col sm='12' className='mb-3'>
                            <Card key={item.id} className='d-flex flex-row'>
                                <Card.Img style={{ width: '252px', height: '180px'}} src={item.imgUrl}/>          
                                <Card.Body>
                                    <Card.Title className='d-flex justify-content-between '>
                                        <div className='item-title'>{item.title}</div>
                                        <div className='item-price'>{item.price}</div>
                                    </Card.Title>
                                    <Card.Text className='py-2'>
                                        <div className='item-title'>{item.description}</div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                    )
                })
            ): <h2 className ="text-center"> NO FOUND</h2>
        }
        
    </Row>
  )
}

export default ItemList