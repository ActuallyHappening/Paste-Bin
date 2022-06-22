import { Project } from "../../../datamodels/Models"
import { T_Children } from "../../../GlobalState"
import Panel from "../Panel"


const ProjectPanels = ({ children, projects }: { projects: Array<Project>, children?: T_Children }) => {
  return (
    <>
    {projects.map((project, index) => {
      return (
        <Panel name={project.name}>
          <h1>{project.name}</h1>
          <p>{project.shortDescription}</p>
        </Panel>
      )
    })}
    </>
  )
}

export default ProjectPanels