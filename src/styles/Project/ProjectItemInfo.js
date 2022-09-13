import styled from 'styled-components'

export const ProjectItemInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;

  & > .titles{
    display: flex;
    gap: 30px;
    align-items: center;

    & > .titles-img{
      width: 150px;
    }

    & > .titles-title{
      font-size: 2.5rem;
    }

    & .titles-button{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 300px;
      border-radius: 10px; 
      height: 80px;
      background-color: #71c571;
      font-size: 1.6rem;
      font-weight: bold;
      border: none;
      cursor: pointer;
      margin-left: 155px;
      padding: 0 20px;

        & > img{
          width: 75px;
        }
      }
  }

`

export const Section = styled.section`
  display: grid;
  grid-template-columns: 25% 45% 25%;
  grid-gap: 2.5%;
  margin-bottom: 10px;

  & > .info-fields{
    display: flex;
    flex-direction: column;
    gap: 10px;
  } 

  & > .info-description{
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;

    & > h2{
      font-size: 1.5rem;
    }

    & > p{
      font-size: 1rem;
    }

    & > input{
      font-size: 1rem;
    }

    & > label{
      font-size: 1rem;
    }    
  } 
}
`
