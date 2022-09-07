import styled from 'styled-components'

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 60%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  background-color: #71c571;
  padding: 35px;
  border-radius: 15px;

  & > h1{
    font-size: 2.5rem;
  }

  & > .instructions{
    font-size: 1.2rem;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    & > h2{
      font-size: 1.5rem;
      text-align: center;
    }

    & > p{
      font-size: 1rem;
      text-align: center;
    }
  }

  & > .input-container{
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;

    & > input{
      font-size: 1.2rem;
      padding: 10px;
    }

    & > span{
      font-size: 1rem;
    }
  }

  & > button{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    border-radius: 10px; 
    height: 50px;
    background-color: #d3d8c6;
    font-size: 1.6rem;
    font-weight: bold;
    border: none;
    cursor: pointer;
    padding: 0 20px;
    margin-top: 20px;
  }


`
