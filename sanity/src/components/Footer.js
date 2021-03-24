import styled from "styled-components";


const StyledFooter = styled.footer`
background-color: white;
color: black;
max-width: 1000px;
margin: 10px auto 5px auto;
padding: 2px;
`

const Footer = () => {


    return (
        <StyledFooter>
            <p>Laget av Tore Meek, mars 2021</p>
        </StyledFooter>
    )
}

export default Footer;