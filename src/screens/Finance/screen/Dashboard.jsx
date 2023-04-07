import { Box, Typography } from "@mui/material";
import React from "react";

const Dashboard = () => {
  return (
    <Box
      sx={{
        bgcolor: "#105949",
        width: "300px",
        height: "200px",
        boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.5)",
        boxSizing: "border-box",
        borderRadius: "25px",
        textAlign: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: "20px",
          color: "white",
          fontFamily: "Arvo",
          fontWeight: "bold",
        }}
      >
        Dashboard
      </Typography>
    </Box>
  );
};

export default Dashboard;
