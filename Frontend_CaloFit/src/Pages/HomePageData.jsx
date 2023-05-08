import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  AspectRatio,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../Assests/cronometer-hero-graphic.png";
import media1 from "../Assests/media-mention-1.png";
import media2 from "../Assests/media-mention-2.png";
import media3 from "../Assests/media-mention-3.png";
import ios_logo from "../Assests/ios-icon.png";
import android_logo from "../Assests/android-icon.png";
import community from "../Assests/community-icon.png";
import security from "../Assests/security-icon.png";
import nutrition from "../Assests/nutrition-icon.png";
import micronutrients from "../Assests/micronutrients-icon.png";
import diary from "../Assests/diary-icon.png";
import reports from "../Assests/reports-icon.png";
import scale from "../Assests/scale-icon.png";
import fasting from "../Assests/fasting-icon.png";
import food from "../Assests/food-icon.png";
import devices from "../Assests/devices-p-1600.png";
import crono_graphic from "../Assests/crono-pro-graphic.png";
import green_logo from "../Assests/cronometer-pro-logo-green.png";
import staff from "../Assests/cronometer-staff-2-p-1600.jpeg";
const HomePageData = () => {
  return (
    <>
      <Flex
        w={["90%", "85%", "80%", "75%"]} //(breakpoints) xs,sm,md,lg
        m="auto"
        size={["xs", "sm", "md", "lg"]}
        direction={["column", "column", "row"]}
      >
        {/* <Box
          w={["90%", "100%"]}
          mt="30px"
          display={["block", "block", "none", "none"]}
          mb={["50px", "50px"]}
        >
          <Image w="100%" src="https://cdn1.cronometer.com/webflow/crono-hero-img-22x-1-p-1600.png" alt />
        </Box> */}
        <Box
          w={["90%", "90%", "50%", "40%"]}
          mr={["0", "0", "10%"]}
          mt={["20px", "20px", "90px", "10%"]}
          // m={["auto", "auto", "none", "none"]}
          textAlign={["center", "center", "none", "none"]}
        >
          <Box color="#262a3b">
            <Heading size={["xl", "xl", "2xl", "2xl", "2xl"]} fontWeight={900}>
              Eat smarter
            </Heading>
            <Heading size={["xl", "xl", "2xl", "2xl", "2xl"]} fontWeight={900}>
              Live better
            </Heading>
          </Box>
          <Box mt="20px" color="#4F4F52">
            <Text fontSize={["xl", "xl", "2xl", "2xl", "2xl"]}>
              Track your diet, exercise, and health data
            </Text>
          </Box>
          <Box mt="30px">
            <Button
              fontSize={["lg", "xl", "2xl", "2xl", "xl"]}
              colorScheme="orange"
              p={["3", "4", "5", "6"]}
              bgColor="#FF763F"
            >
              <Link to="/signin">Sign Up - It's Free!</Link>
            </Button>
          </Box>
        </Box>
        <Box
          w={["95%", "95%", "40%"]}
          m="auto"
          marginTop={["20px", "20px", "12%"]}
        >
          <AspectRatio ratio={5 / 3}>
            <iframe
              style={{ borderRadius: "10px" }}
              src="https://www.youtube.com/embed/R49fLnhMhIE"
              title="CaloFit | Eat Smarter. Live Better."
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </AspectRatio>
        </Box>
      </Flex>
      <Box
        m="auto"
        w={["95%", "85%", "80%", "100%"]}
        mt="30px"
        backgroundColor={"#fafbff"}
        pb={"1%"}
      >
        <Text
          fontSize={["3xl", "3xl", "xl", "sm"]}
          textAlign="center"
          color="
        #323646"
          p={2}
        >
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
          <Box w={["70%", "70%", "30%", "14%"]}>
            <Image src={media2} alt="media2" />
          </Box>
          <Box w={["70%", "70%", "30%", "14%"]}>
            <Image src={media1} alt="media1" />
          </Box>
          <Box w={["70%", "70%", "30%", "14%"]}>
            <Image src={media3} alt="media3" />
          </Box>
        </Flex>
        <Text
          fontSize={["2xl", "2xl", "xl", "sm"]}
          textAlign="center"
          mt="20px"
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
            <Image
              src={ios_logo}
              alt="ios"
              w={["100%", "100%", "none"]}
              mt={-4}
            />
          </Link>
          <Link to="">
            <Image
              mt={-4}
              src={android_logo}
              alt="android"
              w={["100%", "100%", "none"]}
            />
          </Link>
        </Flex>
      </Box>

      <Box color="#262a3b">
        <Heading
          pt={["30px", "30px", "80px", "100px"]}
          textAlign="center"
          fontWeight={800}
          fontSize={["3xl", "3xl", "4xl"]}
        >
          Develop healthy habits
        </Heading>
        <Box
          w={["70%", "70%", "35%", "35%"]}
          m="auto"
          mt={["10px", "11px", "13px", "15px"]}
          mb="70px"
        >
          <Text fontSize={["lg", "xl", "lg"]} textAlign="center">
            Count your calories, ensure you're meeting nutrient targets, and see
            your progress over time.
          </Text>
        </Box>
        <Flex
          w={["90%", "85%", "75%"]}
          m="auto"
          justifyContent="space-evenly"
          pb={["0", "0", "100px"]}
          direction={["column", "column", "row"]}
          gap={["50px", "50px", "none"]}
        >
          <Box w={["90%", "90%", "30%"]} m={["auto", "auto", "none"]}>
            <Box w="50%" m="auto" mb="10px">
              <Image
                src="https://cdn1.cronometer.com/webflow/cronometer-features-11.svg"
                alt="community"
              />
            </Box>
            <Box w={["95%", "95%", "80%"]} m="auto">
              <Heading fontSize={["xl", "xl", "xl"]} textAlign="center">
                Track up to 82 micronutrients
              </Heading>
            </Box>
            <Text fontSize={["lg", "lg", "sm"]} textAlign="center" mt="10px">
              Log your meals and track all your macro and micronutrients.
            </Text>
          </Box>
          <Box w={["90%", "90%", "30%"]} m={["auto", "auto", "none"]}>
            <Box w="50%" m="auto" mb="10px">
              <Image
                src="https://cdn1.cronometer.com/webflow/cronometer-features-14.svg"
                alt="nutrition"
              />
            </Box>
            <Box w={["95%", "95%", "80%"]} m="auto">
              <Heading fontSize={["xl", "xl", "xl"]} textAlign="center">
                Log meals, exercise and biometrics
              </Heading>
            </Box>
            <Text fontSize={["lg", "lg", "sm"]} textAlign="center" mt="10px">
              Plus, you can create custom foods, recipes, exercises and
              biometrics!
            </Text>
          </Box>
          <Box w={["90%", "90%", "30%"]} m={["auto", "auto", "none"]}>
            <Box w="50%" m="auto" mb="10px">
              <Image
                src="https://cdn1.cronometer.com/webflow/cronometer-features-13.svg"
                alt="security"
              />
            </Box>
            <Box w={["90%", "90%", "60%"]} m="auto">
              <Heading fontSize={["xl", "xl", "xl"]} textAlign="center">
                Valuable reports and charts
              </Heading>
            </Box>
            <Text fontSize={["lg", "lg", "sm"]} textAlign="center" mt="10px">
              Learn how nutrients and biometrics correlate over time.
            </Text>
          </Box>
        </Flex>
        <Flex
          w={["90%", "85%", "75%"]}
          m="auto"
          justifyContent="space-evenly"
          pb={["0", "0", "100px"]}
          direction={["column", "column", "row"]}
          gap={["50px", "50px", "none"]}
          pt={["50px", "50px", "0"]}
        >
          <Box w={["90%", "90%", "30%"]} m={["auto", "auto", "none"]}>
            <Box w="50%" m="auto" mb="10px">
              <Image
                src="https://cdn1.cronometer.com/webflow/cronometer-features-16.svg"
                alt="community"
              />
            </Box>
            <Box w={["95%", "95%", "80%"]} m="auto">
              <Heading fontSize={["xl", "xl", "xl"]} textAlign="center">
                Custom diet settings
              </Heading>
            </Box>
            <Box w={["95%", "95%", "80%"]} m="auto">
              <Text fontSize={["lg", "lg", "sm"]} textAlign="center" mt="10px">
                Set weight, macro & nutrient targets to meet your goals.
              </Text>
            </Box>
          </Box>
          <Box w={["90%", "90%", "30%"]} m={["auto", "auto", "none"]}>
            <Box w="50%" m="auto" mb="10px">
              <Image
                src="https://cdn1.cronometer.com/webflow/cronometer-features-15.svg"
                alt="nutrition"
              />
            </Box>
            <Box w={["85%", "85%", "70%"]} m="auto">
              <Heading fontSize={["xl", "xl", "xl"]} textAlign="center">
                Fasting timer
              </Heading>
            </Box>
            <Box w="90%" m="auto">
              <Text fontSize={["lg", "lg", "sm"]} textAlign="center" mt="10px">
                Track your intermittent fasts and see their effect over time.
              </Text>
            </Box>
          </Box>
          <Box w={["90%", "90%", "30%"]} m={["auto", "auto", "none"]}>
            <Box w="50%" m="auto" mb="10px">
              <Image
                src="https://cdn1.cronometer.com/webflow/cronometer-features-12.svg"
                alt="security"
              />
            </Box>
            <Box w={["90%", "90%", "60%"]} m="auto">
              <Heading fontSize={["xl", "xl", "2lx"]} textAlign="center">
                Diet support
              </Heading>
            </Box>
            <Box m="auto">
              <Text fontSize={["lg", "lg", "sm"]} textAlign="center" mt="10px">
                Whether your Keto, Vegan, or on one recommended by your doctor.
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>

      <Box bgColor="#ffffff" color="#262a3b">
        <Heading
          pt={["30px", "30px", "100px", "60px"]}
          textAlign="center"
          fontWeight={800}
          fontSize={["3xl", "3xl", "4xl"]}
        >
          Discover your nutrition
        </Heading>
        <Box
          w={["90%", "90%", "40%"]}
          m="auto"
          mt="15px"
          mb={["30px", "50px", "70px"]}
        >
          <Text fontSize="lg" textAlign="center">
            Cronometer encourages you to not just count your calories but to
            focus on your nutrition as a whole.
          </Text>
        </Box>
        <Flex
          w={["90%", "85%", "75%"]}
          m="auto"
          justifyContent="space-evenly"
          pb={["0", "0", "100px", "130px"]}
          direction={["column", "column", "row"]}
          gap={["50px", "50px", "none"]}
        >
          <Box w={["90%", "90%", "30%"]} m={["auto", "auto", "none"]}>
            <Box w="15%" m="auto" mb="10px">
              <Image
                src="https://cdn1.cronometer.com/webflow/checkmark.svg"
                alt="community"
              />
            </Box>
            <Heading fontSize="xl" textAlign="center">
              Over 5 million users
            </Heading>
            <Text
              fontSize="sm"
              textAlign="center"
              mt={["5px", "10px", "15px", "20px"]}
            >
              Join the community to get tips and inspiration from other users on
              our forums and Facebook group.
            </Text>
          </Box>
          <Box w={["90%", "90%", "30%"]} m={["auto", "auto", "none"]}>
            <Box w="15%" m="auto" mb="10px">
              <Image
                src="https://cdn1.cronometer.com/webflow/checkmark.svg"
                alt="nutrition"
              />
            </Box>
            <Heading fontSize="xl" textAlign="center">
              Accurate nutrition data
            </Heading>

            <Text
              fontSize="sm"
              textAlign="center"
              mt={["5px", "10px", "15px", "20px"]}
            >
              Be confident that the food you log has the correct nutrition data.
              We verify every food submission for accuracy.
            </Text>
          </Box>
          <Box w={["90%", "90%", "30%"]} m={["auto", "auto", "none"]}>
            <Box w="15%" m="auto" mb="10px">
              <Image
                src="https://cdn1.cronometer.com/webflow/checkmark.svg"
                alt="security"
              />
            </Box>
            <Heading fontSize="xl" textAlign="center">
              Data privacy & security
            </Heading>
            <Text
              fontSize="sm"
              textAlign="center"
              mt={["5px", "10px", "15px", "20px"]}
            >
              We don't sell your account data to third parties and take the
              security of our users' accounts seriously.
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box
        bgColor="
#262a3b "
        color="#4F4F52"
      >
        <Box
          w={["95%", "95%", "40%", "40%"]}
          m="auto"
          pt="70px"
          mb={["30px", "40px", "60px", "70px"]}
        >
          <Text
            fontSize={["xl", "2xl", "lg"]}
            textAlign="center"
            // fontWeight="500"
            color={"#ffffff"}
          >
            Find out if you're getting the vitamins and minerals you need with
            our food diary app.
          </Text>
          <Box
            w="50%"
            m="auto"
            mt={["30px", "40px", "50px"]}
            pb={["10px", "30px", "50px"]}
          >
            <Button
              fontSize={["lg", "xl", "lg"]}
              colorScheme="orange"
              p={["5", "6", "7"]}
              bgColor="#FF763F"
              w="100%"
            >
              <Link to="/signin">Sign Up - It's Free!</Link>
            </Button>
          </Box>
        </Box>
      </Box>
      <Box color="#4F4F52">
        <Text
          textAlign="center"
          fontSize={["2xl", "3xl", "3xl"]}
          fontWeight="500"
        >
          Sync with Apps and Devices
        </Text>
        <Text
          textAlign="center"
          fontSize={["lg", "xl", "xl"]}
          mt="10px"
          w={["85%", "85%", "40%"]}
          m={["auto", "auto", "none"]}
        >
          Sync Cronometer with these activity trackers, Apple Health, Google Fit
          and Samsung Health.
        </Text>
        <Box
          w={["90%", "90%", "50%"]}
          m="auto"
          mt="30px"
          pb={["40px", "60px", "80px", "100px"]}
        >
          <Image src={devices} />
        </Box>
      </Box>

      <Box
        borderTop="1px solid lightgray"
        align="center"
        w={["90%", "90%", "75%"]}
        m="auto"
        pb="50px"
      >
        <Text
          fontSize={["xl", "xl", "xl"]}
          color="#4F4F52"
          mt={["30px", "40px", "50px"]}
        >
          Help us spread the good word about nutrition and become an affiliate.
        </Text>
        <Button
          color="#FF763F"
          border="1px solid #FF763F"
          bgColor="white"
          p={["3", "4", "5"]}
          w={["73%", "50%", "40%"]}
          fontSize={["sm", "md", "lg"]}
          mt="20px"
        >
          <Link to="/about">Become an Affiliate</Link>
        </Button>
      </Box>
    </>
  );
};

export default HomePageData;
