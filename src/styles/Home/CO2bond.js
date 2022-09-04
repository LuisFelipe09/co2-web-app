import styled from 'styled-components'

export const CO2Styled = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 35px 0 250px 0;

  & > h2{
    font-size: 2.5rem;
    /* font-weight: 400; */
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
    }

    & > div > p{
      font-size: 1.4rem;
      text-align: justify;
    }
  }
`
