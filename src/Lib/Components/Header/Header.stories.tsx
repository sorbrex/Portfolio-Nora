import { Box } from '@mui/material';
import '../../../index.css'

import type { Story } from "@ladle/react";
import Header from './Header';

export const HeaderComponent: Story = () => {
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
      <Header />
    </Box>
  )
}

