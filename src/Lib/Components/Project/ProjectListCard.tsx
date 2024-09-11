
const ProjectListCard = (props: ProjectListCardProps) => {
  const { imageSource, key } = props

  return (
    <img
      src={imageSource}
      key={key}
      style={{ width: "150px", height: "200px", objectFit: "cover" }}
    />
  )
}

export default ProjectListCard

type ProjectListCardProps = {
  key: number
  imageSource: any
}
