import '../../../index.css';
import type { Story } from "@ladle/react";
import Social from "./Social";
import { Box } from '@mui/material';
import Chart from './Chart';
import Langs from './Langs';

export const SocialComponent: Story = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: "black",
      }}
    >
      <Social />
    </Box>
  )
}

export const ChartComponent: Story = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: "black",
      }}
    >
      <Chart />
    </Box>
  )
}

export const LangComponent: Story = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: "black",
      }}
    >
      <Langs />
    </Box>
  )
}