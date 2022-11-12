import React from 'react'
import { Outlet } from 'react-router-dom';
import {Container, Logo, Section, Wrapper} from './style';
import logoImg from "../../assets/icons/logo.svg"

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <Section>
          <Logo src={logoImg} />
        </Section>
        <Section>2</Section>
        <Section>3</Section>
      </Wrapper>
      <Outlet />
    </Container>
  )
}

export default Home
