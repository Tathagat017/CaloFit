import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../Assets/cronometer-hero-graphic.png";
import media1 from "../Assets/media-mention-1.png";
import media2 from "../Assets/media-mention-2.png";
import media3 from "../Assets/media-mention-3.png";
import ios_logo from "../Assets/ios-icon.png";
import android_logo from "../Assets/android-icon.png";
import community from "../Assets/community-icon.png";
import security from "../Assets/security-icon.png";
import nutrition from "../Assets/nutrition-icon.png";
import micronutrients from "../Assets/micronutrients-icon.png";
import diary from "../Assets/diary-icon.png";
import reports from "../Assets/reports-icon.png";
import scale from "../Assets/scale-icon.png";
import fasting from "../Assets/fasting-icon.png";
import food from "../Assets/food-icon.png";
import devices from "../Assets/devices-p-1600.png";
import crono_graphic from "../Assets/crono-pro-graphic.png";
import green_logo from "../Assets/cronometer-pro-logo-green.png";
import staff from "../Assets/cronometer-staff-2-p-1600.jpeg";
const HomePageData = () => {
  return (
    <>
      <Flex
        w={["90%", "85%", "80%", "75%"]}  //(breakpoints) xs,sm,md,lg
        m="auto"
        size={["xs", "sm", "md", "lg"]}
        direction={["column", "column", "row"]}
      >
        <Box
          w={["90%", "90%"]}
          mt="30px"
          display={["block", "block", "none", "none"]}
          mb={["50px", "50px"]}
        >
          <Image w="100%" src={HeroImage} alt />
        </Box>
        <Box
          w={["90%", "90%", "50%", "40%"]}
          mr={["0", "0", "10%"]}
          mt={["20px","20px","90px","10%"]}
          // m={["auto", "auto", "none", "none"]}
          textAlign={["center", "center", "none", "none"]}
        >
          <Box color="#4F4F52">
            <Heading size={["xl", "xl", "2xl", "2xl","3xl"]}>Eat smarter</Heading>
            <Heading size={["xl", "xl", "2xl", "2xl","3xl"]}>Live better</Heading>
          </Box>
          <Box mt="20px" color="#4F4F52">
            <Text fontSize={["xl", "xl", "2xl", "2xl","3xl"]}>
            Track your diet, exercise, and health data
            </Text>
          </Box>
          <Box mt="30px">
            <Button
              fontSize={["lg", "xl", "2xl", "2xl","3xl"]}
              colorScheme="orange"
              p={["3", "4", "5", "6"]}
              bgColor="#FF763F"
            >
              <Link to="/signin">Sign Up - It's Free!</Link>
            </Button>
          </Box>
          {/* <Box mt="20px" color="#4F4F52">
            <Text fontSize={["md", "lg", "xl", "xl"]}>
              Already have an account?
              <span>
                <Button
                  variant={["link", "link", "ghost", "ghost"]}
                  fontSize={["md", "lg", "xl", "xl"]}
                  _hover={{ color: "#FF763F", borderBottom: "1px solid" }}
                >
                  <Link to="/login">Log in</Link>
                </Button>
              </span>
            </Text>
          </Box> */}
        </Box>
        <Box
          w="40%"
          mt="30px"
          display={["none", "none", "block", "block"]}
        >
          <Image w="100%" src={HeroImage} alt />
        </Box>
      </Flex>
      <Box m="auto" w={["95%", "85%", "80%", "75%"]} mt="20px">
        <Text fontSize={["3xl", "3xl", "xl", "xl"]} textAlign="center" color="
        #323646">
          As seen in
        </Text>
        <Flex
          w={["90%", "90%", "70%", "70%"]}
          m="auto"
          justifyContent="space-between"
          mt="20px"
          direction={["column", "column", "row"]}
          align={["center", "center", "none"]}
          gap={["30px", "25px", "0", "0"]}
        >
          <Box w={["70%", "70%", "30%", "25%"]}>
            <Image src={media2} alt="media2" />
          </Box>
          <Box w={["70%", "70%", "30%", "25%"]}>
            <Image src={media1} alt="media1" />
          </Box>
          <Box w={["70%", "70%", "30%", "25%"]}>
            <Image src={media3} alt="media3" />
          </Box>
        </Flex>
        <Text
          fontSize={["2xl", "2xl", "xl", "xl"]}
          textAlign="center"
          mt="35px"
          color="#323646"
        >
          Available on Web, iOS and Android
        </Text>
        <Flex
          w={["60%", "60%", "30%", "30%"]}
          m="auto"
          justifyContent="space-around"
          mt="30px"
          mb={["0", "0", "70px", "90px"]}
          direction={["column", "column", "row"]}
          gap={["20px", "20px", "none"]}
        >
          <Link to="">
            <Image src={ios_logo} alt="ios" w={["100%", "100%", "none"]} />
          </Link>
          <Link to="">
            <Image
              src={android_logo}
              alt="android"
              w={["100%", "100%", "none"]}
            />
          </Link>
        </Flex>
      </Box>
      
    </>
  );
};

export default HomePageData;
