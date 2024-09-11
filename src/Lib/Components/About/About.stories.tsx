import '../../../index.css'
import { Story } from "@ladle/react"
import { Box } from "@mui/material"
import Propic from "./Propic"
import About from './About'


export const AboutComponent: Story = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "black",
      }}
    >
      <About />
    </Box>
  )
}

export const PropicComponent: Story = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "black",
      }}
    >
      <Propic />
    </Box>
  )
} 
