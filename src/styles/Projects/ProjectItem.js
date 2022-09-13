import styled from 'styled-components'

import Linked from 'next/link'

export const Container = styled.div`
  width: 500px;
  margin: 0 auto;
`

export const StyledLink = styled(Linked)`
  text-decoration: none;
  color: #000;
  width: 100%;
`

export const ProjectItemContainer = styled.div`
  display: grid;
  grid-template-rows: 200px auto;
  grid-gap: 5%;
  margin: 0 auto 50px auto;
  align-items: center;
  gap: 25px;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 15px;
  padding: 0 0 10px 0;

  & > .project-item__img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & > .project-item__text{
    width: 100%;
    padding: 0 35px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    & > .project-item__text--name{
      font-size: 1.6rem;
    }

    & > .project-item__text--supply{
      font-size: 1.4rem;
    }

    & > .project-item__text--creator{
      font-size: 1.4rem;
    }
      
  }

`
