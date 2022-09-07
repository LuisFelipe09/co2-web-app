import styled from 'styled-components'

export const IntroductionStyled = styled.section`
  width: 60%;
  margin: 35px auto 150px auto;
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-areas: "image text";
  align-items: center;
  justify-content: center;


  & > .introduction-img{
    grid-area: image;
    width: 250px;
  }

  & .introduction-title{
    font-size: 3rem;
    margin-bottom: 20px;
  }
  
  & .introduction-subtitle{
    font-size: 1.5rem;
  }
  `
