import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import {Container, Link, Logo, Main, Section, Wrapper} from './style';
import logoImg from "../../assets/icons/logo.svg"
import navbar from '../../utils/navbar';

const Home = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <Main>

      <Wrapper>
        <Section onClick={()=>navigate('/home')} logo>
          <Logo src={logoImg} />
          <h3>Houzing </h3>
        </Section>
        <Section>
          {
            navbar.map((value,index)=>{
              return <Link className={({isActive})=>isActive && 'active'} key={index}
               to={value.path}>
                {value.title}
                </Link>
            })
          }
        </Section>
        <Section>
          <button>Sign in</button>
        </Section>
      </Wrapper>
          </Main>
      <Outlet />
    </Container>
  )
}

export default Home
