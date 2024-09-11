import { Box } from "@mui/material";
import PropicImage from '../../Assets/Images/Propic.jpg'

const Propic = () => {
  return (
    <Box
      sx={{
        position: "relative",
        border: "5px solid white",
        height: "200px",
        width: "200px",
      }}
    >
      <img
        src={PropicImage}
        alt="propic"
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          objectFit: "cover",
          height: "100%",
          width: "100%"
        }}
      />
    </Box>
  );
};

export default Propic