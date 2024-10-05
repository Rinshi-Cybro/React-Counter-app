import React from 'react'
import Counter from './Counter/Counter'
import { Container } from 'react-bootstrap';
import './MainBody.css'




function MainBody() {
  return (
    <div className='main-body'>
      <Container>
        <Counter />
      </Container>
    </div>
  )
};

export default MainBody