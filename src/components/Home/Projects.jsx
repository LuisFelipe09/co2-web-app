import React, { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import useProjects from '../../hooks/useProjects'

import {
  ProjectsContainer, ProjectsGrid,
  EachProject
} from '../../styles/Home/Projects'

const ProjectStructure = ({ metadata }) => {
  return (
    <EachProject>
        <figure>
            <img src={metadata.image} alt="project image"/>
        </figure>
        <h4>{metadata.name}</h4>
    </EachProject>
  )
}

const Projects = () => {
  const [components, setComponents] = useState(undefined)
  const { projectsInstances, getProjects } = useProjects()

  const fillComponents = useCallback(() => {
    if (projectsInstances.length > 0) {
      const compo = projectsInstances.map(async (elem, key) => {
        let uriToFetch = await elem.methods.uri(0).call()
        uriToFetch = uriToFetch.includes('data:application/json;base64,') ? uriToFetch : 'data:application/json;base64,' + uriToFetch

        const responseMetaData = await fetch(uriToFetch)
        const metadata = await responseMetaData.json()
        console.log(metadata)
        return (
          <Link href={`/project/${key}`} key={key}>
            <ProjectStructure project={metadata}/>
          </Link>
        )
      })
      setComponents(compo)
    }
  }, [projectsInstances])

  useEffect(() => {
    fillComponents()
  }, [projectsInstances, fillComponents])

  return (
        <ProjectsContainer>
            <h2>Projects we believe in</h2>
            <ProjectsGrid>
                {components}
            </ProjectsGrid>
        </ProjectsContainer>
  )
}

export default Projects
