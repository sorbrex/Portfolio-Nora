import { Box } from "@mui/material";
import Header from "./Lib/Components/Header/Header";
import About from "./Lib/Components/About/About";
import Info from "./Lib/Components/Info/Info";
import ProjectList from "./Lib/Components/Project/ProjectList";
import Social from "./Lib/Components/Info/Social";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        position: "relative",
        padding: "1.5rem",
        minWidth: "320px",
        minHeight: "100vh",
      }}
    >
      <Header />

      <About />

      <Info />

      {/* <ProjectList title="Localization" content={'Localization'} /> */}
      <ProjectList title="Review" content={'Review'} />
      <ProjectList title="Subtitling" content={'Subtitling'} />
      <ProjectList title="Audiodescription" content={'Audiodescription'} />
      <ProjectList title="SDH Subtitling" content={'SDH Subtitling'} />
      <ProjectList title="Translation" content={'Translation'} />

      <Social />


    </Box>
  )
}

export default App
