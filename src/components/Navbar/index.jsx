import React from 'react'
import { Outlet } from 'react-router-dom';
import {Container, Wrapper} from './style';

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <h1>Test</h1>
      </Wrapper>
      <Outlet />
    </Container>
  )
}

export default Home
