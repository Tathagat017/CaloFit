import React, { useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  ListItem,
  Radio,
  useToast,
  RadioGroup,
  Stack,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  FormControl,
  FormLabel,
  Input,
  Tr,
  UnorderedList,
} from "@chakra-ui/react";
import { useState } from "react";
import "./goldPlan.css";
import data from "./priceData.json";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import axios from "axios";

const ProfPlan = () => {
  const [changePrice, setChangePrice] = useState(false);
  const [open, setOpen] = useState(false);
  const [plans, setPlans] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mo_no: "",
    plan: "Pro",
    str_date: "",
    end_date: "",
    // userId: "",
  });
  const toast = useToast({ position: "top" });
  const afterOneYear = () => {
    const currentDate = new Date(); // get the current date
    const oneYearFromNow = new Date(
      currentDate.getFullYear() + 1,
      currentDate.getMonth(),
      currentDate.getDate()
    ); // create a new date object for 1 year from now
    return oneYearFromNow.toISOString().slice(0, 10); // log the date in ISO format (YYYY-MM-DD)
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const openForm = () => {
    const newData = {
      ...formData,
      str_date: new Date().toISOString().slice(0, 10),
      end_date: changePrice
        ? new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000)
            .toISOString()
            .slice(0, 10)
        : afterOneYear(),
      // userId: "",
    };
    setFormData(newData);
    setIsOpen(true);
  };

  const closeForm = () => {
    setIsOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    console.log(formData);
    axios
      .post("https://calofitbackend.cyclic.app/userplan/add", formData)
      .then(() => console.log("post Success"))
      .catch((err) => console.log(err));
    closeForm();
  };
  const handleChangePrice = (state) => {
    setChangePrice(state);
  };
  const handleOpen = () => {
    setOpen(!open);
  };
  useEffect(() => {
    axios
      .get("https://calofitbackend.cyclic.app/plan")
      .then((res) => setPlans(res.data));
  }, []);
  // console.log(plans)
  let plan;
  if (plans) {
    plans.forEach((el) => {
      if (el.name === "Pro") {
        plan = el;
      }
    });
  }
  // console.log(plan)
  return (
    <Box className="bgImage">
      <Flex
        flexDirection={["column", "column", "row"]}
        justifyContent={["center", "center", "space-between"]}
      >
        <Box>
          <Image
            w={["50%", "40%", "40%"]}
            src="https://cdn1.cronometer.com/plans/pro-no-icon-logo.svg"
          />
          <br />
          <Text fontWeight={"bold"} fontSize={["13px", "15px", "20px"]}>
            {plan ? plan.tag : ""}
          </Text>
          <br />
          <UnorderedList fontSize={["10px", "13px", "17px"]}>
            {plan ? plan.features.map((el) => <ListItem>{el}</ListItem>) : ""}
          </UnorderedList>
          <br />
          <Button
            variant={"outline"}
            colorScheme="orange"
            fontSize={["10px", "13px", "15px"]}
            onClick={() => handleOpen()}
          >
            VIEW ALL FEATURES
          </Button>
        </Box>
        <Box mt={["20px", "20px", "0px"]}>
          {changePrice ? (
            <>
              <Text
                fontSize={["l", "xl", "3xl"]}
                fontWeight={"bold"}
                textAlign={["left", "left", "right"]}
              >
                ₹{plan ? plan.price_month : ""}
              </Text>
              <Text fontSize={["10px", "13px", "17px"]}>
                RS per month-billed monthly
              </Text>
            </>
          ) : (
            <>
              <Text
                fontSize={["l", "xl", "3xl"]}
                fontWeight={"bold"}
                textAlign={["left", "left", "right"]}
              >
                ₹{plan ? plan.price_Year : ""}
              </Text>
              <Text
                textAlign={["left", "left", "right"]}
                fontSize={["10px", "13px", "17px"]}
              >
                RS per year-billed yearly
              </Text>
            </>
          )}
          <RadioGroup defaultValue="1">
            <Stack spacing={5} direction="row">
              <Radio
                onClick={() => handleChangePrice(false)}
                colorScheme="orange"
                value="1"
                size={["sm", "md", "lg"]}
              >
                Yearly
              </Radio>
              <Radio
                onClick={() => handleChangePrice(true)}
                colorScheme="orange"
                value="2"
                size={["sm", "md", "lg"]}
              >
                Monthly
              </Radio>
            </Stack>
          </RadioGroup>
          <br />
          <Button
            _hover={"none"}
            bg="#44d07b"
            color={"white"}
            fontSize={["10px", "13px", "17px"]}
            onClick={openForm}
          >
            SUBSCRIBE NOW
          </Button>
        </Box>
      </Flex>
      {open ? (
        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Th w="70%">
                  <Text fontSize={["10px", "15px", "25px"]} fontWeight={"bold"}>
                    Gold Features
                  </Text>
                  <br />
                  <Text>USD per Year - billed annually</Text>
                </Th>
                <Th w="15%">
                  <Image src="https://cdn1.cronometer.com/plans/basic-logo.svg" />
                  <Text fontSize={["10px", "13px", "17px"]} fontWeight={"bold"}>
                    $0.00
                  </Text>
                </Th>
                <Th w="15%">
                  <Image src="https://cdn1.cronometer.com/plans/gold-logo.svg" />
                  <Text fontSize={["10px", "13px", "17px"]} fontWeight={"bold"}>
                    $49.99
                  </Text>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.priceData.map((el) => {
                return (
                  <Tr fontSize={["10px", "13px", "17px"]}>
                    <Td w="70%">
                      <Text>{el.title}</Text>
                      <Text>{el.details}</Text>
                    </Td>
                    <Td w="15%">
                      {el.basic ? (
                        <CheckIcon color="green" />
                      ) : (
                        <CloseIcon color="red" />
                      )}
                    </Td>
                    <Td w="15%">
                      {el.gold ? (
                        <CheckIcon color="green" />
                      ) : (
                        <CloseIcon color="red" />
                      )}
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      ) : (
        <Box></Box>
      )}
      {isOpen && (
        <Box maxWidth="400px" mx="auto" className="form-popup">
          <form onSubmit={handleSubmit} className="form-container">
            <Image
              w={["50%", "40%", "100%"]}
              src="https://cdn1.cronometer.com/plans/pro-no-icon-logo.svg"
            />
            <br />
            <Flex
              alignItems="center"
              justifyContent="space-between"
              border="1px"
              borderColor="gray.200"
              borderRadius="10px"
              py={3}
              px={1}
            >
              <Box>
                <Heading as="h3" size="lg" noOfLines={1}>
                  ₹{changePrice ? plan.price_month : plan.price_Year}
                </Heading>
              </Box>
              <Box>
                <UnorderedList>
                  <ListItem>10 clients included.</ListItem>
                </UnorderedList>
              </Box>
            </Flex>
            <FormControl id="name" mt={0}>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </FormControl>

            <FormControl id="mo_no" mt={0}>
              <FormLabel>Mobile Number</FormLabel>
              <Input
                type="tel"
                name="mo_no"
                placeholder="Mobile Number"
                value={formData.mo_no}
                onChange={handleInputChange}
              />
            </FormControl>

            <FormControl id="plan" mt={0}>
              <FormLabel>Plan</FormLabel>
              <Input
                name="plan"
                value={plan.name}
                onChange={handleInputChange}
              ></Input>
            </FormControl>
            <FormControl id="str_date" mt={0}>
              <FormLabel>Start Date</FormLabel>
              <Input
                type="text"
                name="str_date"
                placeholder="Start Date"
                value={formData.str_date}
                onChange={handleInputChange}
              />
            </FormControl>

            <FormControl id="end_date" mt={0}>
              <FormLabel>End Date</FormLabel>
              <Input
                type="text"
                name="end_date"
                placeholder="End Date"
                value={formData.end_date}
                onChange={handleInputChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Credit Card Number</FormLabel>
              <Input placeholder="card no" w="33%" />
              <Input placeholder="MM" w="22%" />
              <Input placeholder="YYYY" w="25%" />
              <Input placeholder="cvv" w="20%" />
            </FormControl>

            <Flex>
              <Box
                onClick={() =>
                  toast({
                    title: "Payment Successfull.",
                    // description: "We've created your account for you.",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                  })
                }
              >
                <Button type="submit" className="btn" onClick={handleSubmit}>
                  Pay Now
                </Button>
              </Box>
              <Button type="button" className="btn cancel" onClick={closeForm}>
                Close
              </Button>
            </Flex>
          </form>
        </Box>
      )}
    </Box>
  );
};

export default ProfPlan;
