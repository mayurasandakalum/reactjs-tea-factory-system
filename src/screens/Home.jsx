import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import { Paths } from "../utils/Paths";

const images = [
  {
    url: "/static/images/buttons/breakfast.jpg",
    title: "Supplier and Quantity Management",
    width: "23%",
    path: Paths["SupplierQuantity"],
  },
  {
    url: "/static/images/buttons/burgers.jpg",
    title: "Transport and Raw material management",
    width: "23%",
    path: Paths["Transport"],
  },
  {
    url: "/static/images/buttons/camera.jpg",
    title: "Warehouse management",
    width: "23%",
    path: Paths["Warehouse"],
  },
  {
    url: "/static/images/buttons/camera.jpg",
    title: "Customer and Order Management",
    width: "23%",
    path: Paths["CustomerOrder"],
  },
  {
    url: "/static/images/buttons/breakfast.jpg",
    title: "Machine management",
    width: "23%",
    path: Paths["Machine"],
  },
  {
    url: "/static/images/buttons/burgers.jpg",
    title: "Finance management",
    width: "23%",
    path: Paths["Finance"],
  },
  {
    url: "/static/images/buttons/camera.jpg",
    title: "Time schedule and target management",
    width: "23%",
    path: Paths["TimeTarget"],
  },
  {
    url: "/static/images/buttons/camera.jpg",
    title: "Supplier payment management",
    width: "23%",
    path: Paths["SupplierPayment"],
  },
];

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  // position: "relative",
  // top: "50%",
  // transform: "translateY(-50%)",
  // marginLeft: 30,
  margin: "1%",
  height: 300,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

const Home = () => {
  const [windowSize, setwindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowSize() {
      setwindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowSize);

    return () => {
      window.removeEventListener("resize", handleWindowSize);
    };
  }, []);
  return (
    <Box
      height={windowSize.innerHeight}
      id="abc"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        minWidth: 300,
        width: "100%",
      }}
    >
      <Box
        id="bbb"
        position="relative"
        top="150px"
        width="75%"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {images.map((image) => (
          <ImageButton
            href={image.path}
            focusRipple
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <ImageSrc
              style={{
                backgroundImage: `url(https://img.freepik.com/free-vector/blockchain-transport-technology-abstract-concept-illustration_335657-3955.jpg?w=2000)`,
              }}
            />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: "relative",
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                {image.title}
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        ))}
      </Box>
    </Box>
  );
};

export default Home;
