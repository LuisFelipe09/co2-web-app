import styled from 'styled-components'

export const IntroductionStyled = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 35px 0 250px 0;

  & > img{
    width: 300px;
    margin-bottom: 20px;
  }

  & > h1{
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  & > h2{
    font-size: 2.5rem;
    font-weight: 400;
  }
`
