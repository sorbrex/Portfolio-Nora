import { Box, Divider, Typography } from "@mui/material"
import Chart from "./Chart"
import Langs from "./Langs"

const Info = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        backgroundColor: "black",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: "white",
          mb: 3
        }}
      >
        Main Project and Languages
      </Typography>
      <Divider sx={{ width: "80%", color: "white", borderColor: "white" }} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          height: "300px",
          my: 5
        }}
      >
        <Chart />

        <Langs />
      </Box>
    </Box>
  )
}


export default Info