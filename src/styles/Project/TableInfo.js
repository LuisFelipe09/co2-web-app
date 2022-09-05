import styled from 'styled-components'

export const TableInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  & > strong{
    font-size: 1rem;
    margin-bottom: 15px;
  }
  
  & > .table-info{
    display: flex;
    gap: 30px;
    height: 30px;
    font-size: 1rem;
    align-items: center;
    justify-content: space-around;
  }
  
  & > .titles{
    background-color: #71c571;
    border-radius: 10px;
  }


`
