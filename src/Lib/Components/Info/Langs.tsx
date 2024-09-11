import { Box, Slider, Typography } from "@mui/material"

const Langs = () => {
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
      <Typography gutterBottom>Italian</Typography>
      <Slider
        aria-label="Italian"
        value={100}
        color="success"
        sx={{ width: "200px" }}
      />
      <Typography gutterBottom>English</Typography>
      <Slider
        aria-label="English"
        value={85}
        color="warning"
        sx={{ width: "200px" }}
      />
      <Typography gutterBottom>Spanish</Typography>
      <Slider
        aria-label="Spanish"
        value={70}
        color="error"
        sx={{ width: "200px" }}
      />
      <Box sx={{ m: 3 }} />
    </Box>
  )
}

export default Langs