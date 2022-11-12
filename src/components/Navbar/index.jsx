import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import {Container, Link, Logo, Section, Wrapper} from './style';
import logoImg from "../../assets/icons/logo.svg"
import navbar from '../../utils/navbar';

const Home = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <Wrapper>
        <Section onClick={()=>navigate('/home')} logo>
          <Logo src={logoImg} />
          <h3>Houzing </h3>
        </Section>
        <Section>
          {
            navbar.map(value=>{
              return <Link className={({isActive})=>isActive && 'active'} key={value.id} to={value.path}>{value.title}</Link>
            })
          }
        </Section>
        <Section>
          <button>Sign in</button>
        </Section>
      </Wrapper>
      <Outlet />
    </Container>
  )
}

export default Home
