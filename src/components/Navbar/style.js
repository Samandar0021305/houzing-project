import { NavLink } from "react-router-dom"
import  styled  from "styled-components" 
const Container = styled.div`
`
const Wrapper = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
background:var(--colorPrimary);
color:#fff;
padding:var(--padding);
height:64px;
font-size:16px;
`
const Section = styled.div`
display:flex;
align-items:center;
cursor:${({Logo})=>Logo && 'pointer'};
 .active{
    color:#b8ff06;
}
` 
const Logo = styled.img`
width:30px;
margin-right:12px;
` 
const Link = styled(NavLink)`
text-decoration:none;
padding:0 32px;
color:#fff;
`

export {
    Container,
    Wrapper,
    Section,
    Logo,
    Link
}