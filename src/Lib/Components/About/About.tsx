import { Box, Typography } from "@mui/material"
import Propic from "./Propic"
import { useMemo } from "react";
import useWindowDimensions from "../../Hooks/useDimension";

export const About = () => {

  const { width } = useWindowDimensions();
  const isMobile = useMemo(() => width < 768, [width])

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 3,
        my: 20,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "70%",
        }}
      >

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width: isMobile ? "100%" : "50%",
            height: "100%",
          }}
        >
          <Typography variant="h2" sx={{ fontWeight: "bold" }}>
            Audiovisual
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            width: isMobile ? "100%" : "50%",
            height: "100%",
          }}
        >

          <Typography variant="h2" sx={{ fontWeight: "bold" }}>
            Translator
          </Typography>
        </Box>


        <Typography variant="h6">
          I am Eleonora Sapienza, an Audiovisual Translator.
          My interest in Audiovisual Translation began at the end of my university career.
          Since then, I have been trying to specialise in the art of translation and subtitling,
          so that I can contribute to the break down of linguistic and cultural barriers overlapped between the medias and our society.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "30%",
        }}
      >
        <Propic />
      </Box>
    </Box>
  )
}

export default About