import styled from 'styled-components'

export const NavStyled = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  padding: 20px;
  background-color: #71c571;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
`

export const NavBarList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 700px;
  margin: 0 15px 0px auto;
  background-color: #71c571;
  
  & > li > a {
    list-style: none;
    text-decoration: none;
    font-size: 1.6rem;
    font-weight: 400;
    color: #000;
    background-color: #71c571;
    
  }

  & > p{
    background-color: #71c571;
    font-size: 1.6rem;
  }
`
