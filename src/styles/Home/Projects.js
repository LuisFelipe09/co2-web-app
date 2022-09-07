import styled from 'styled-components'

export const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;    
    height: 96vh;
    padding: 0 4% 4% 4%;      
    color: black;

    & > h2 {
        font-size: 2rem;        
        margin-bottom: 20px;
        z-index: 2;
    }
`

export const ProjectsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    padding: 5px;
`

export const EachProject = styled.div`
    width: 100%;
    height: 200px;    
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;    
    box-shadow: 5px 5px 5px 2px rgba(0, 0, 0, 0.5);

    & > figure {
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: clip;

        & > img {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }

    & > h4 {
        
        font-size: 1rem;
        color: white;
        padding: 5px;
        width: auto;
        height: auto;
        background-color: rgba(10, 16, 13, 0.5);
        margin: 40px 0;
        z-index: 3;    
    }
`
