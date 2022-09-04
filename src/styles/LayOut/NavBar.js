import styled from 'styled-components'

export const NavBarList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 50%;
  list-style-type: none;
  margin: 0 15px 25px auto;
  
  
  & > li > a {
    list-style: none;
    text-decoration: none;
    font-size: 1.4rem;
    font-weight: 400;
    color: #000;
  }

  & > p{
    font-size: 1.4rem;
  }
`
