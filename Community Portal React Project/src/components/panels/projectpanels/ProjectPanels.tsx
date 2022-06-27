import { Project } from "../../../datamodels/Models"
import { T_Children } from "../../../GlobalState"
import Panel from "../Panel"


const ProjectPanels = ({ children, projects }: { projects: Array<Project>, children?: T_Children }) => {
  //console.log("ProjectPanels projects:", projects)
  return (
    <>
    {projects?.map((project, index) => {
      return (
        <Panel key={index} name={project.name}>
          <h1>{project.name}</h1>
          <p>{project.shortDescription}</p>
        </Panel>
      )
    })}
    {children}
    </>
  )
}

export default ProjectPanels