import React from "react";
import Footer from "../Components/Footer/Footer";
import { Box } from "@chakra-ui/react";
import HomePageData from "./HomePageData";
import NavbarSignUp from "../Components/LoginPage_Components/NavbarSignUp";

const HomePage = () => {
  return (
    <div>
      <NavbarSignUp></NavbarSignUp>
      <Box>
        <HomePageData />
        <Footer />
      </Box>
    </div>
  );
};

export default HomePage;
