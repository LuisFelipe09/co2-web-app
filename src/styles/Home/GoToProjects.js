import styled from 'styled-components'

export const GoToProjectsSectionStyled = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  align-items: center;

  & > h2{
    font-size: 2.5rem;
    margin: 0 auto;
  }

  & .link-button{
    width: 300px;
    border-radius: 10px; 
    height: 75px;
    background-color: #0a100d;
    margin-top: 30px;
    font-size: 1.6rem;
    border: none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    color: #fff;
    & > a{
      text-decoration: none;
      color: #fff;
    }
  }
`
