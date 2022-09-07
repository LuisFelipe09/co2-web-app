import styled from 'styled-components'

export const IntroductionStyled = styled.section`
  width: 100%;
  height: 90vh;  
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
  color: white;  

  & > img{
    width: 300px;
    margin-bottom: 20px;
    z-index: 2;
  }

  & > h1{
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 20px;
    z-index: 2;
  }
  
  & > h2{
    font-size: 2.5rem;
    font-weight: 400;
    z-index: 2;
  }
`

export const Background = styled.img`
  position: absolute !important;
  width: 100% !important;
  height: 100% !important;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  object-fit: cover;
`
