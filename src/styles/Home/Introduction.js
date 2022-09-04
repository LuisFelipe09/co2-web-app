import styled from 'styled-components'

export const IntroductionSectionStyled = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 35px;

  & > img{
    width: 300px;
    margin-bottom: 20px;
  }

  & > h1{
    font-size: 3.5rem;
    font-weight: 500;
    margin-bottom: 20px;
  }
  
  & > h2{
    font-size: 2.5rem;
    font-weight: 400;
  }
`
