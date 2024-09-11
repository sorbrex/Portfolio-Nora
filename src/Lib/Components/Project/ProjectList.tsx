import { Box, Divider, Typography } from "@mui/material"
import { Projects } from "./Data"
import ProjectListCard from "./ProjectListCard"

const ProjectList = (props: ProjectListProps) => {
  const { title, content } = props
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        minWidth: "100%",
        my: 15
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: "white",
          mb: 3
        }}
      >
        {title}
      </Typography>
      <Divider sx={{ width: "80%", color: "white", borderColor: "white" }} />

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          minWidth: "100%",
          gap: 3,
          mt: 3
        }}
      >
        {Projects.find(project => project.name === content)?.sourcesArray.map((imageSource: any, index: number) => (
          <ProjectListCard key={index} imageSource={imageSource} />
        ))}
      </Box>
    </Box>
  )
}

export default ProjectList

type ProjectListProps = {
  title: string
  content: string
}