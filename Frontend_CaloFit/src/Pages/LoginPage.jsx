import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Image,
  useToast,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/AuthReducer/action";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NavbarSignUp from "./../Components/LoginPage_Components/NavbarSignUp";
import Footer from "./../Components/Footer/Footer";
import { handleLogoutRedux } from "../Redux/AuthReducer/action";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const state = useSelector((store) => store.authreducer);
  const dispatch = useDispatch();

  console.log(state);
  const handleSubmit = () => {
    const userData = { email, password };
    if (email.includes("admin") && password.includes("admin")) {
      return navigate("/admin");
    }
    dispatch(login(userData)).then((res) => {
      navigate("/diary");
      console.log(res);
      // if (res && res.status === "success") {
      //   alert("Success! You have logged in.");
      // } else {
      //   alert("Incorrect email or password. Please try again.");
      // }
    });
    setEmail("");
    setPassword("");
  };
  console.log(state);
  return (
    <Box>
      <NavbarSignUp />
      {state.auth && <Alert status="success"> Congrats Login Success !</Alert>}

      <Flex
        minH={"90vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              Welcome Back
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  type="email"
                />
              </FormControl>

              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  type="password"
                />
              </FormControl>

              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Stack>
                    <Text>Not a member?</Text>
                    <Text color="green">
                      {" "}
                      <Link to="/signup">Sign Up</Link>
                    </Text>
                  </Stack>
                </Stack>
                <Button
                  onClick={handleSubmit}
                  colorScheme="green"
                  color={"white"}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Footer />
    </Box>
  );
}
