import styled from 'styled-components'

export const CO2Styled = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 35px 0 125px 0;

  & > h2{
    font-size: 2.5rem;
    margin-bottom: 30px;
  }

  & > .info-container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-area: "image text";
    width: 90%;
    margin: 25px auto;
    gap: 20px;
    justify-content: center;
    align-items: center;

    & > img{
    width: 100%;
    border-radius: 10px;
    }

    & > .info-container__text{
      display: flex;
      flex-direction: column;
      gap: 10px;

      & > .info-container__text--title{
        font-size: 2rem;
        margin-bottom: 10px;
        text-align: center;
      }

      & > .info-container__text--foodprint{
        font-size: 1.5rem;
        margin: 0 auto;
        background-color: #71c571;
        padding: 15px;
        border-radius: 15px;
        text-align: center;
        border: none;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

        & > a{
          text-decoration: none;
          color: #000;
        }
      }
    }

    & > div > p{
      font-size: 1.4rem;
      text-align: justify;
    }
  }
`
