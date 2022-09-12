import styled from 'styled-components';

export const Wallet = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;

  & > p{
    font-size: 1rem;
  }

  & > button{
    padding: 5px;
    border: none;
    border-radius: 5px;
    background-color: #d3d8c6;
    cursor: pointer;
  }
`