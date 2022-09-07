import styled from 'styled-components'

export const NavStyled = styled.nav`
  position: fixed;
  width: 100%;
  padding: 0 5%;
  top: 0;  
  height: 10vh;
  background-color: #0a100d;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  z-index: 3;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NavBarList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 700px;    
  width: 400px;
  
  & > li > a {
    list-style: none;
    text-decoration: none;
    font-size: 1.6rem;
    font-weight: 400;       
    color: white;    
  }

  & > p{    
    font-size: 1.6rem;
  }
`
export const Wallet = styled.div`
  display: flex;
  width: 250px;
  align-items: center;
  justify-content: space-between;
  & > p{    
    font-size: 1.6rem;
    width: auto;
  }
`
