import styled from 'styled-components'

export const ParticipateStyled = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 35px 0 125px 0;
  
  & > h2{
    font-size: 2.5rem;
    margin-bottom: 45px;
  }
  
  & > .how{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 90%;
    gap: 45px;

    & > .how__container{
      display: flex;
      flex-direction: column;
      gap: 20px;

      & > .how__subtitle{
        font-size: 1.5rem;
        text-align: center;
      }

      & > .how__image-text{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
      }

      & > .how-image-text--doble{
        display: flex;
        justify-content: space-between;
        width: 100%;
        gap: 10px;


      }

      & .how__image{
        width: 150px;
        margin: 0 auto;
      }

      & .how__text{
        margin-top: 20px;
        font-size: 1.2rem;
        text-align: justify;
      }
    }
  }
`
