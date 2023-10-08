import { Col, Row } from 'react-bootstrap'

import React from 'react'

const Category = ({filterbyCategory ,allCategory}) => {

  const onFilter =(cat)=>{
    filterbyCategory(cat)
  }
  return (
    <Row className='p-2'>
        <Col sm='12' className='justify-content-center d-flex'>
          {
            allCategory.length >= 1 ?(allCategory.map((cat)=>{

              return (
                <div>
                    <button className='btn-1 mx-2' onClick={()=>onFilter(cat)}>{cat}</button>
                    
                </div>
              )

            })) : <h2>NOT FOUND</h2>
          }

        </Col>
    </Row>
  )
}

export default Category