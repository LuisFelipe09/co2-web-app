import styled from 'styled-components'

import Linked from 'next/link'

export const Container = styled.div`
  width: 50%;
  margin: 0 auto;
`

export const StyledLink = styled(Linked)`
  text-decoration: none;
  color: #000;
  width: 100%;
`

export const ProjectItemContainer = styled.div`
  display: flex;
  margin: 0 auto 50px auto;
  align-items: center;
  gap: 25px;
  cursor: pointer;

  & > .project-item__img{
    width: 250px;
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
