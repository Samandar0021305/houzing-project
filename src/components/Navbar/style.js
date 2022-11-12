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
` 
const Logo = styled.img`
width:30px;
` 

export {
    Container,
    Wrapper,
    Section,
    Logo
}