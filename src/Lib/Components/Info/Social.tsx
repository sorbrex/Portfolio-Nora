import { Instagram, LinkedIn, Mail } from "@mui/icons-material"
import { Box } from "@mui/material"
import { TEXT_COLOR } from "../../Styles"

const Social = () => {
  return (
    <Box
      id="social"
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        height: "70px",
        backgroundColor: "black",
      }}
    >
      <Instagram
        fontSize="large"
        sx={{ color: TEXT_COLOR, cursor: "pointer" }}
        onClick={() =>
          window.open("https://www.instagram.com/imcallednorah_/", "_blank")
        }
      />
      <LinkedIn
        fontSize="large"
        sx={{ color: TEXT_COLOR, cursor: "pointer" }}
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/eleonora-sapienza-9286962a9/",
            "_blank"
          )
        }
      />
      <Mail
        fontSize="large"
        sx={{ color: TEXT_COLOR, cursor: "pointer" }}
        onClick={() =>
          window.open("mailto:eleonora.sapienza@outlook.it", "_blank")
        }
      />
    </Box>
  )
}

export default Social