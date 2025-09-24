import { Box, Typography } from "@mui/material"
// import { Menu, Close } from "@mui/icons-material"
// import useWindowDimensions from "../../Hooks/useDimension";
// import { useMemo, useState } from "react";
// import { TEXT_COLOR } from "../../Styles";
// import { Link } from "react-router-dom";

export const Header = () => {
  // const { width } = useWindowDimensions();
  // const isMobile = useMemo(() => width < 768, [width])

  // const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Box
      sx={{
        minWidth: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
        }}
      >
        {/* Name */}
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Eleonora Sapienza
        </Typography>
      </Box>

      {/* Name */}
      {/* 
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 3,
          visibility: isMobile ? "hidden" : "visible",
        }}
      >
        <Typography variant="h6">
          <Link to="/" style={{ color: TEXT_COLOR }}>
            Home
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link
            to={{
              hash: "#about",
            }}
            style={{ color: TEXT_COLOR }}
          >
            About
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link
            to={{
              hash: "#info",
            }}
            style={{ color: TEXT_COLOR }}
          >
            Projects
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link
            to={{
              hash: "#social",
            }}
            style={{ color: TEXT_COLOR }}
          >
            Contact
          </Link>
        </Typography>

        <Box
          sx={{
            mr: 2,
            visibility: isMobile ? "visible" : "hidden",
          }}
        >
          <IconButton
            size="small"
            sx={{
              mr: 2,
            }}
          >
            <Menu
              sx={{ color: TEXT_COLOR }}
              onClick={() => setIsMenuOpen(true)}
            />
          </IconButton>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: 2,
              gap: 2,
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              bgcolor: "black",
              zIndex: 10,
              visibility: isMenuOpen ? "visible" : "hidden",
              opacity: isMenuOpen ? 1 : 0,
              transition: "visibility 0.5s, opacity 0.5s linear",
            }}
          >
            <Link to="/#home" style={{ color: TEXT_COLOR }}>
              Home
            </Link>
            <Link to="/#about" style={{ color: TEXT_COLOR }}>
              About
            </Link>
            <Link to="/#info" style={{ color: TEXT_COLOR }}>
              Projects
            </Link>
            <Link to="/#social" style={{ color: TEXT_COLOR }}>
              Contact
            </Link>

            <Close
              sx={{
                color: TEXT_COLOR,
                position: "absolute",
                top: 0,
                right: 2,
              }}
              onClick={() => setIsMenuOpen(false)}
            />
          </Box>
        </Box>
      </Box> 
      */}
    </Box>
  )
}

export default Header
