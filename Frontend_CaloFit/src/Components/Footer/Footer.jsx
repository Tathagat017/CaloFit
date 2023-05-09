import { Box, Flex, Heading, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import instagram_logo from "../../Assests/social_instagram-icon.png";
import facebook_logo from "../../Assests/social_facebook-icon.png";
import twitter_logo from "../../Assests/social_twitter-icon.png";
import youtube_logo from "../../Assests/social_youtube-icon.png";
import ios_logo from "../../Assests/ios-icon.png";
import android_logo from "../../Assests/android-icon.png";
import { Link } from "react-router-dom";
import footer_logo from "../../Assests/crono-logo-white.png";

const Footer = () => {
  return (
    <Box bgColor="#262a3b">
      <Box w={["90%", "90%", "80%"]} m="auto" pt="60px">
        <Box pt={["40px", "50px", "60px"]}>
          <Flex
            direction={["column", "column", "row"]}
            gap={["25px", "25px", "0"]}
          >
            <Box w={["60%", "60%", "25%"]} m={["auto", "auto", "none"]}>
              <Image
                src="./calofit-white.png"
                alt="logo"
                w={["100%", "100%", "70%"]}
              />
            </Box>
            <Box w={["60%", "60%", "25%"]} color="white" textAlign="left">
              <Heading size="md" mb="10px">
                The Product
              </Heading>
              <Text mb="15px" fontSize={17} color="white">
                For Individuals
              </Text>
              <Text mb="15px" fontSize={17} color="#f8fcfc">
                For Professionals
              </Text>
              <Text mb="15px" fontSize={17} color="#f8fcfc">
                Privacy
              </Text>
              <Text mb="15px" fontSize={17} color="#f8fcfc">
                Terms
              </Text>
            </Box>
            <Box w={["60%", "60%", "25%"]} color="white" textAlign="left">
              <Heading size="md" mb="10px">
                The Company
              </Heading>
              <Text mb="15px" fontSize={17} color="#f8fcfc">
                About US
              </Text>
              <Text mb="15px" fontSize={17} color="#f8fcfc">
                Crono Blog
              </Text>
              <Text mb="15px" fontSize={17} color="#f8fcfc">
                Crono Forums
              </Text>
              <Text mb="15px" fontSize={17} color="#f8fcfc">
                Jobs
              </Text>
              <Text mb="15px" fontSize={17} color="#f8fcfc">
                Support
              </Text>
            </Box>
            <Box
              w={["60%", "60%", "25%"]}
              fontSize={17}
              color="white"
              textAlign="left"
            >
              <Heading size="md" mb="10px">
                Partners & Affiliates
              </Heading>
              <Text mb="15px" fontSize={17} color="#f8fcfc">
                Affilate Program
              </Text>
              <Text mb="15px" fontSize={17} color="#f8fcfc">
                Media Kit
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box borderBottom="1px solid white">
          <Box w={["60%", "60%", "25%"]} m="auto">
            <HStack justifyContent="space-evenly">
              <Box h="40px">
                <Link to="">
                  <Image src={instagram_logo} alt="instagram" h="100%" />
                </Link>
              </Box>
              <Box h="40px">
                <Link to="">
                  <Image src={facebook_logo} alt="facebook" h="100%" />
                </Link>
              </Box>
              <Box h="40px">
                <Link to="">
                  <Image src={twitter_logo} alt="twitter" h="100%" />
                </Link>
              </Box>
              <Box h="40px">
                <Link to="">
                  <Image src={youtube_logo} alt="youtube" h="100%" />
                </Link>
              </Box>
            </HStack>
          </Box>
          <Flex
            w={["70%", "70%", "30%"]}
            m="auto"
            justifyContent="space-around"
            mt="30px"
            pb="60px"
            gap={["20px", "20px", "0"]}
          >
            <Link to="">
              <Image src={ios_logo} alt="ios" />
            </Link>
            <Link to="">
              <Image src={android_logo} alt="android" />
            </Link>
          </Flex>
        </Box>
        <Box color="white" fontSize="lg" mt="30px" pb="50px" textAlign="center">
          <Text>Copyright © 2011-2022</Text>
          <Text>All rights reserved</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
