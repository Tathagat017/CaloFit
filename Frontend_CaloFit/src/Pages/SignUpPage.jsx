import {
  Alert,
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import Terms from "../Components/UmaSahni/Terms";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavbarSignUp from "./../Components/LoginPage_Components/NavbarSignUp";
import "@fontsource/raleway";
import "@fontsource/work-sans";
import "@fontsource/manrope";
import Footer from "./../Components/Footer/Footer";
const SignUpPage = () => {
  const InitialState = {
    name: "",
    email: "",
    gender: "",
    password: "",
    birthday: "",
    height: "",
    weight: "",
  };

  const [state, setState] = useState(InitialState);
  const navigate = useNavigate();
  const [signed, setSigned] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setState((pre) => ({ ...pre, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://calofit-backend-deployment.onrender.com/users/register",
        state
      )
      .then((res) => {
        console.log(res);
        navigate("/login");
      });
    console.log(state);
    setState(InitialState);
  };

  return (
    <div style={{ backgroundColor: "#fffcf6" }}>
      <NavbarSignUp />
      <Box bgColor={"#fffcf6"}>
        <form onSubmit={handleSubmit} style={{ marginTop: "2%" }}>
          <Box
            backgroundImage={"DotPatternLarge.svg"}
            bgRepeat={"no-repeat"}
            bgSize="cover"
          >
            <Heading
              m="10"
              mt="0"
              fontFamily="Work Sans"
              fontWeight={"bold"}
              fontSize={"3xl"}
            >
              Create Your Free Account
            </Heading>

            <Flex
              margin={"auto"}
              p={"8"}
              maxWidth={"700px"}
              background={"white"}
              // border={"1px solid black"}
              borderRadius={"8"}
              boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
            >
              <FormControl>
                <Box display="flex" flexDirection="column">
                  <Wrap mb="4">
                    <FormLabel width={"30%"}>
                      <Text
                        fontWeight="semibold"
                        fontSize="lg"
                        fontFamily={"Manrope"}
                      >
                        Name
                      </Text>
                    </FormLabel>
                    <Input
                      onChange={(e) => handleChange(e)}
                      name="name"
                      value={state.name}
                      border="1px solid gray"
                      width={"60%"}
                      type="text"
                    />
                  </Wrap>

                  <Wrap mb="4">
                    <FormLabel width={"30%"}>
                      <Text
                        fontWeight="semibold"
                        fontSize="lg"
                        fontFamily={"Manrope"}
                      >
                        Email
                      </Text>
                    </FormLabel>
                    <Input
                      onChange={(e) => handleChange(e)}
                      name="email"
                      value={state.email}
                      border="1px solid gray"
                      width={"60%"}
                      type="email"
                    />
                  </Wrap>

                  <Wrap mb="4">
                    <FormLabel width={"30%"}>
                      <Text
                        fontWeight="semibold"
                        fontSize="lg"
                        fontFamily={"Manrope"}
                      >
                        Password
                      </Text>
                    </FormLabel>

                    <Input
                      border="1px solid gray"
                      width={"60%"}
                      type="password"
                      value={state.password}
                      name="password"
                      onChange={(e) => handleChange(e)}
                    />
                  </Wrap>

                  <Wrap>
                    <FormLabel width={"30%"}>
                      <Text
                        fontWeight="semibold"
                        fontSize="lg"
                        fontFamily={"Manrope"}
                      >
                        Confirm Password
                      </Text>
                    </FormLabel>

                    <Input
                      border="1px solid gray"
                      width={"60%"}
                      type="password"
                    />
                  </Wrap>
                </Box>
              </FormControl>
            </Flex>

            {/* ------------------ Profile Details ------------------------------------------------------ */}

            <Flex
              margin={"auto"}
              p={"8"}
              mt="8"
              maxWidth={"700px"}
              background={"white"}
              borderRadius={"8"}
              boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
            >
              <FormControl>
                <Wrap mb="8">
                  <FormLabel width={"30%"}>
                    <Text
                      fontWeight={"semibold"}
                      fontSize={"lg"}
                      fontFamily={"Manrope"}
                    >
                      {" "}
                      Gender{" "}
                    </Text>
                  </FormLabel>
                  <Stack direction={["column", "row"]} spacing="24px">
                    <Flex width={"25rem"}>
                      <RadioGroup>
                        <Radio
                          mr="4"
                          name="gender"
                          value={"male"}
                          onChange={(e) => handleChange(e)}
                          colorScheme="orange"
                          size={"lg"}
                        >
                          Male
                        </Radio>
                        <Radio
                          name="gender"
                          value={"female"}
                          onChange={(e) => handleChange(e)}
                          colorScheme="orange"
                          size={"lg"}
                        >
                          Female
                        </Radio>
                      </RadioGroup>
                    </Flex>
                  </Stack>
                </Wrap>
                {/*--------------------------------BirthDay----------------------------------- */}
                <Wrap mb="8">
                  <FormLabel width={"30%"}>
                    <Text
                      fontWeight={"semibold"}
                      fontSize={"lg"}
                      fontFamily={"Manrope"}
                    >
                      Birthday
                    </Text>
                  </FormLabel>
                  <Input
                    onChange={(e) => handleChange(e)}
                    name="birthday"
                    value={state.birthday}
                  />
                </Wrap>
                {/* ------------------------------------Height------------------------------------------------------------------ */}
                <Wrap mb="8">
                  <FormLabel width={"30%"}>
                    <Text
                      fontWeight={"semibold"}
                      fontSize={"lg"}
                      fontFamily={"Manrope"}
                    >
                      Height
                    </Text>
                  </FormLabel>
                  <Input
                    onChange={(e) => handleChange(e)}
                    name="height"
                    value={state.height}
                  />
                </Wrap>
                {/* ------------------------------Weight--------------------------------------------------------- */}

                <Wrap>
                  <FormLabel width={"30%"}>
                    <Text
                      fontWeight={"semibold"}
                      fontSize={"lg"}
                      fontFamily={"Manrope"}
                    >
                      {" "}
                      Weight
                    </Text>
                  </FormLabel>
                  <Input
                    onChange={(e) => handleChange(e)}
                    name="weight"
                    value={state.weight}
                  />
                </Wrap>
              </FormControl>
            </Flex>

            {/* ------------------------Terms & Conditions-------------------------------------------- */}
            <Terms isDone={signed} handleCheckbox={setSigned} />

            <Button
              type="submit"
              mt="3"
              mb="3"
              width={"15rem"}
              colorScheme="green"
              isDisabled={!signed}
            >
              SIGN UP
            </Button>

            <br />
            <br />

            <Box margin={"auto"}>
              <Text fontWeight={"semibold"} fontFamily={"Manrope"}>
                Need help?
              </Text>
              <Text
                fontWeight={"semibold"}
                color={"orange"}
                fontFamily={"Manrope"}
              >
                support@cronometer.com
              </Text>
            </Box>
          </Box>
        </form>
      </Box>
      <Footer />
    </div>
  );
};

export default SignUpPage;
