import { Instagram, LinkedIn, Mail } from "@mui/icons-material"
import { Box } from "@mui/material"
import { TEXT_COLOR } from "../../Styles"

const Social = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        height: "70px",
        backgroundColor: "black",
      }}
    >
      <Instagram fontSize="large" sx={{ color: TEXT_COLOR }} />
      <LinkedIn fontSize="large" sx={{ color: TEXT_COLOR }} />
      <Mail fontSize="large" sx={{ color: TEXT_COLOR }} />
    </Box>
  )
}

export default Social