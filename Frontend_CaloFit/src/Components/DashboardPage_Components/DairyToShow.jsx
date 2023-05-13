import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Heading,
  HStack,
  Button,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Grid,
  Image,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { IoReorderThreeSharp } from "react-icons/io5";
import Chart1 from "./Charts/chart1";
import Bar1 from "./Charts/bar1";
import Submenu from "./Charts/submenu";

import { AiFillDelete } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import axios from "axios";

export default function DairyShow() {
  const dispatch = useDispatch();
  let [model, setmodel] = useState(false);
  let [data, setData] = useState([]);
  const [consumed, setConsumed] = useState(0);
  const [exercise, setExercise] = useState(0);
  var Token;
  Token = localStorage.getItem("token");

  const GetRequest = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_KEY}nutrition/getuserdata`, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then((res) => {
        console.log(res.data.users_data);
        setData(res.data.users_data);
      })
      .catch((err) => console.log("Error In getRequest,", err));
  };

  useEffect(() => {
    GetRequest();
  }, []);

  //

  const [total, settotal] = useState({
    totalcunsumed: 0,
    totalprotein: 0,
    totalcarbs: 0,
    totalfat: 0,
  });

  let userdataTotal = {
    _id: {
      $oid: "645f134576be5e09bde7f55d",
    },
    kcal_consumed_eaten: [
      {
        food: {
          name: "Apple",
          kcal: 52,
          carb: 14,
          protein: 0.3,
          vitA: 1,
          vitD: 0,
          vitC: 7,
          vitE: 0.2,
          mineral: 0.1,
          fat: 0.2,
          potassium: 107,
          _id: {
            $oid: "6453d2d9f509f48fa36d55ff",
          },
        },
        quantity: 1,
        _id: {
          $oid: "645f134576be5e09bde7f55e",
        },
      },
    ],
    excercise_done: [],
    kcal_burnt: 120,
    total_kcal_left: 23,
    userID: "645f0bd9000901c978f7fd69",
  };

  let userdata = userdataTotal.kcal_consumed_eaten;
  let totalcunsumed = 0;
  let m = data.kcal_consumed_eaten;
  console.log(m?.map((el) => (totalcunsumed += el.food.kcal)));
  let kcal_burnt = data.kcal_burnt;
  let totalprotein = 10,
    totalcarbs = 2,
    totalfat = 13;

  return (
    <Box w="90%">
      <Box
        backgroundColor="rgb(255,252,246)"
        fontFamily="Work Sans,sans-serif"
        w={{ base: "100%", md: "70%", lg: "80%" }}
        ml={{ base: "0px", md: "30%", lg: "20%" }}
      >
        <Flex
          mt="20px"
          gap={{ base: "10px", md: "30px", lg: "30px" }}
          flexDirection={{ base: "column", md: "column", lg: "row" }}
        >
          <Flex
            bgColor="white"
            boxShadow="md"
            borderRadius="15px"
            w={{ base: "100%", md: "100%", lg: "50%" }}
            p="10px"
            fontSize="22px"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex alignItems="center">
              <BsChevronLeft />
              <SlCalender />
              <Text as="b" fontSize="18px">
                Today
              </Text>
              <BsChevronRight />
            </Flex>
            <Box>
              <TiTick
                style={{
                  padding: "2px",
                  border: "1px solid",
                  borderRadius: "25px",
                }}
              />
            </Box>
          </Flex>
          <Flex
            bgColor="white"
            boxShadow="md"
            borderRadius="15px"
            w={{ base: "100%", md: "100%", lg: "50%" }}
            p="10px"
            alignItems="center"
          >
            <IoReorderThreeSharp style={{ fontSize: "25px" }} />
            <Flex flexDirection="column">
              <Text fontSize="16px" as="b" margin="0px">
                DAILY TARGET EDITOR
              </Text>
              <Text fontSize="14px" margin="0px">
                Thu-Default Macronutrient Targets
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Box
          w="100%"
          margin="auto"
          marginTop="30px"
          bgColor="white"
          boxShadow="md"
          borderRadius="15px"
          p="15px"
        >
          <Heading>Nutritions Live Data </Heading>
          {/* <Box
            mt="10px"
            w="100%"
            h="200px"
            p="15px"
            borderRadius="15px"
            border="1px solid #ccc"
          >
            <Text as="b" display={userdata.length === 0 ? "block" : "none"}>
              Add food, exercise, biometrics or notes to see them in your dairy.
            </Text>
            <Flex w="100%" flexDirection="column">
              {userdata?.map((el, i) => (
                <Flex
                  justifyContent="space-between"
                  key={i}
                  backgroundColor={i % 2 == 0 ? "gray.200" : "white"}
                  p="5px"
                  borderRadius="10px"
                >
                  <Text w="500px" as="b">
                    {el.name}
                  </Text>
                  <Text>{el.ss}g</Text>
                  <Text>{el.energy}kcal</Text>
                  <AiFillDelete />
                </Flex>
              ))}
            </Flex>
          </Box> */}
        </Box>
        <Flex
          margin="auto"
          marginTop="30px"
          gap={{ base: "10px", md: "30px", lg: "30px" }}
          flexDirection={{ base: "column", md: "column", lg: "row" }}
        >
          <Box
            bgColor="white"
            boxShadow="md"
            borderRadius="15px"
            w={{ base: "100%", md: "100%", lg: "50%" }}
            p="10px"
          >
            <Text fontSize="20px" fontWeight="700">
              Energy Summary
            </Text>
            <Flex justifyContent="center" gap={{ base: "0", md: "10px" }}>
              <Flex flexDirection="column" alignItems="center">
                <Chart1
                  datas={[totalprotein, totalcarbs, totalfat]}
                  bgc={["rgb(68,208,123)", "rgb(28,202,215)", "rgb(234,59,4)"]}
                  sz={{ base: "90px", md: "130px" }}
                  middata={totalcunsumed}
                />
                <Text>Consumed</Text>
              </Flex>
              <Flex flexDirection="column" alignItems="center">
                <Chart1
                  datas={[1779, 356]}
                  bgc={["rgb(174,97,194)", "rgb(50,142,142)"]}
                  sz={{ base: "90px", md: "130px" }}
                  middata={kcal_burnt}
                />
                <Text>{kcal_burnt} kcal burnt</Text>
              </Flex>
              <Flex flexDirection="column" alignItems="center">
                <Chart1
                  datas={[2135, totalcunsumed]}
                  bgc={["rgb(230,232,240)", "rgb(157,160,173)"]}
                  sz={{ base: "90px", md: "130px" }}
                  middata={1800 - totalcunsumed}
                />
                <Text>Remaining</Text>
              </Flex>
            </Flex>
          </Box>
          <Box
            bgColor="white"
            boxShadow="md"
            borderRadius="15px"
            w={{ base: "100%", md: "100%", lg: "50%" }}
            p="10px"
          >
            <Text fontSize="20px" as="b">
              Macronutrient Targets
            </Text>
            <Flex marginTop="10px">
              <Flex flexDirection="column" as="b">
                <Text>Energy</Text>
                <Text>Protein</Text>
                <Text>Cet Carbs</Text>
                <Text>Fat</Text>
              </Flex>
              <Flex
                w="50%"
                mt="5px"
                flexDirection="column"
                justifyContent="space-between"
                marginLeft="20px"
              >
                <Bar1
                  barval={Math.floor((totalcunsumed / 2135) * 100)}
                  barpercent={`${totalcunsumed} kcal / 2135 kcal ${Math.floor(
                    Math.random() * 100 * (totalcunsumed / 1800) * 100
                  )}%`}
                  clr={"gray"}
                  spl={0}
                />
                <Bar1
                  barval={Math.floor((totalprotein / 133) * 100)}
                  barpercent={`${totalprotein} g / 133.4 g ${Math.floor(
                    Math.random() * 100 * (totalprotein / 133) * 100
                  )}%`}
                  clr={"green"}
                  spl={0}
                />
                <Bar1
                  barval={Math.floor((totalcarbs / 240) * 100)}
                  barpercent={`${totalcarbs} g / 240.2 g ${Math.floor(
                    Math.random() * 100 * (totalcarbs / 240) * 100
                  )}%`}
                  clr={"blue"}
                  spl={0}
                />
                <Bar1
                  barval={Math.floor((totalfat / 71) * 100)}
                  barpercent={`${totalfat} g / 71.2 g ${Math.floor(
                    Math.random() * 100 * (totalcarbs / 71) * 100
                  )}%`}
                  clr={"red"}
                  spl={0}
                />
              </Flex>
            </Flex>
          </Box>
        </Flex>
        <Box
          bgColor="white"
          boxShadow="md"
          borderRadius="15px"
          p="10px"
          w="100%"
          mt="30px"
        >
          <Text fontSize="20px" fontWeight="700">
            Nutrient Targets
          </Text>
          <Box mt="20px">
            <Text fontSize="18px" fontWeight="600">
              Nutrition Scores
            </Text>
            <Flex gap="20px">
              <Flex flexDirection="column" alignItems="center">
                <CircularProgress
                  value={(1800 - totalcunsumed) / 100}
                  color="pink.600"
                  size="90px"
                  thickness="6px"
                >
                  <CircularProgressLabel>
                    {(1800 - totalcunsumed) / 100}%
                  </CircularProgressLabel>
                </CircularProgress>
                <Text fontSize="14px">All Targets</Text>
              </Flex>
              <Flex
                display={{ base: "none", md: "none", lg: "flex" }}
                boxShadow="md"
                w="100%"
                gap="20px"
                border="1px solid #ccc"
                borderRadius="15px"
                p="10px"
                alignItems="center"
                justifyContent="center"
              >
                <Image src="https://cronometer.com/img/nutrition-scores.svg" />
                <Flex flexDirection="column">
                  <Text fontWeight="600">Get more with Cronometer Gold</Text>
                  <Text>
                    Upgrade to view full set of nutrition scores representing
                    well researched health concepts
                  </Text>
                </Flex>
                <Button
                  w="150px"
                  color="white"
                  bgColor="black"
                  _hover={{ boxShadow: "dark-lg" }}
                >
                  UPGRADE
                </Button>
              </Flex>
            </Flex>
          </Box>
          <Box mt="20px">
            <Text fontSize="18px" fontWeight="600">
              Highlighted Nutrients
            </Text>
            <Grid
              templateColumns={{
                base: "repeat(3,1fr)",
                md: "repeat(4,1fr)",
                lg: "repeat(8,1fr)",
              }}
              w={{ base: "100%", md: "90%", lg: "100%" }}
            >
              <Flex flexDirection="column" alignItems="center">
                <CircularProgress
                  value={(Math.random() * 10 * totalcunsumed) / 100}
                  color="yellow.400"
                  size="90px"
                  thickness="6px"
                >
                  <CircularProgressLabel>
                    {((Math.random() * 10 * totalcunsumed) / 100).toFixed(2)}
                  </CircularProgressLabel>
                </CircularProgress>
                <Text fontSize="14px">Fiber</Text>
              </Flex>
              <Flex flexDirection="column" alignItems="center">
                <CircularProgress
                  value={(Math.random() * 10 * totalcunsumed) / 100}
                  color="yellow.400"
                  size="90px"
                  thickness="6px"
                >
                  <CircularProgressLabel>22%</CircularProgressLabel>
                </CircularProgress>
                <Text fontSize="14px">Iron</Text>
              </Flex>
              <Flex flexDirection="column" alignItems="center">
                <CircularProgress
                  value={(Math.random() * 10 * totalcunsumed) / 100}
                  color="yellow.400"
                  size="90px"
                  thickness="6px"
                >
                  <CircularProgressLabel>11%</CircularProgressLabel>
                </CircularProgress>
                <Text fontSize="14px">Calcium</Text>
              </Flex>
              <Flex flexDirection="column" alignItems="center">
                <CircularProgress
                  value={(Math.random() * 10 * totalcunsumed) / 100}
                  color="yellow.400"
                  size="90px"
                  thickness="6px"
                >
                  <CircularProgressLabel>26%</CircularProgressLabel>
                </CircularProgress>
                <Text fontSize="14px">Vit.A</Text>
              </Flex>
              <Flex flexDirection="column" alignItems="center">
                <CircularProgress
                  value={(Math.random() * 10 * totalcunsumed) / 100}
                  color="yellow.400"
                  size="90px"
                  thickness="6px"
                >
                  <CircularProgressLabel>51%</CircularProgressLabel>
                </CircularProgress>
                <Text fontSize="14px">Vit.C</Text>
              </Flex>
              <Flex flexDirection="column" alignItems="center">
                <CircularProgress
                  value={(Math.random() * 10 * totalcunsumed) / 100}
                  color="yellow.400"
                  size="90px"
                  thickness="6px"
                >
                  <CircularProgressLabel>40%</CircularProgressLabel>
                </CircularProgress>
                <Text fontSize="14px">Vit.B12</Text>
              </Flex>
              <Flex flexDirection="column" alignItems="center">
                <CircularProgress
                  value={(Math.random() * 10 * totalcunsumed) / 100}
                  color="yellow.400"
                  size="90px"
                  thickness="6px"
                >
                  <CircularProgressLabel>36%</CircularProgressLabel>
                </CircularProgress>
                <Text fontSize="14px">Folate</Text>
              </Flex>
              <Flex flexDirection="column" alignItems="center">
                <CircularProgress
                  value={(Math.random() * 10 * totalcunsumed) / 100}
                  color="yellow.400"
                  size="90px"
                  thickness="6px"
                >
                  <CircularProgressLabel>6%</CircularProgressLabel>
                </CircularProgress>
                <Text fontSize="14px">Potassium</Text>
              </Flex>
            </Grid>
          </Box>
          <Flex
            w="100%"
            mt="20px"
            gap="20px"
            flexDirection={{ base: "column", md: "column", lg: "row" }}
          >
            <Flex
              w={{ base: "100%", md: "100%", lg: "50%" }}
              flexDirection="column"
              gap="10px"
            >
              <Box
                w="100%"
                border="1px solid #ccc"
                borderRadius="15px"
                h="fit-content"
              >
                <Text
                  bgColor="#ccc"
                  borderRadius="15px 15px 0px 0px"
                  padding="5px 15px"
                >
                  General
                </Text>
                <Box padding="0px 15px">
                  <Submenu
                    data={["Energy", "Alcohol", "Caffiene", "Water"]}
                    flag={userdata.length}
                    para={"g"}
                  />
                </Box>
              </Box>
              <Box
                w="100%"
                border="1px solid #ccc"
                borderRadius="15px"
                h="fit-content"
              >
                <Text
                  bgColor="#ccc"
                  borderRadius="15px 15px 0px 0px"
                  padding="5px 15px"
                >
                  Carbohydrates
                </Text>
                <Box padding="0px 15px">
                  <Submenu
                    data={["Carbs", "Fiber", "Starch", "Sugars", "Net Carbs"]}
                    flag={userdata.length}
                    para={"g"}
                  />
                </Box>
              </Box>
              <Box
                w="100%"
                border="1px solid #ccc"
                borderRadius="15px"
                h="fit-content"
              >
                <Text
                  bgColor="#ccc"
                  borderRadius="15px 15px 0px 0px"
                  padding="5px 15px"
                >
                  Lipids
                </Text>
                <Box padding="0px 15px">
                  <Submenu
                    data={[
                      "Fat",
                      "Monounsaturated",
                      "Polyunsaturated",
                      "Omega-3",
                      "Omega-6",
                      "Saturated",
                      "Trans-Fats",
                      "Cholesterol",
                    ]}
                    flag={userdata.length}
                    para={"g"}
                  />
                </Box>
              </Box>
              <Box
                w="100%"
                border="1px solid #ccc"
                borderRadius="15px"
                h="fit-content"
              >
                <Text
                  bgColor="#ccc"
                  borderRadius="15px 15px 0px 0px"
                  padding="5px 15px"
                >
                  Protein
                </Text>
                <Box padding="0px 15px">
                  <Submenu
                    data={[
                      "Protein",
                      "Cystine",
                      "Histedine",
                      "Isoleucine",
                      "Leucine",
                      "Lysine",
                      "Methionine",
                      "Phenylalanine",
                      "Threonine",
                      "Tryptophan",
                      "Tyrosine",
                      "Valine",
                    ]}
                    flag={userdata.length}
                    para={"g"}
                  />
                </Box>
              </Box>
            </Flex>
            <Flex
              w={{ base: "100%", md: "100%", lg: "50%" }}
              flexDirection="column"
              gap="10px"
            >
              <Box
                w="100%"
                border="1px solid #ccc"
                borderRadius="15px"
                h="fit-content"
              >
                <Text
                  bgColor="#ccc"
                  borderRadius="15px 15px 0px 0px"
                  padding="5px 15px"
                >
                  Vitamins
                </Text>
                <Box padding="0px 15px">
                  <Submenu
                    data={[
                      "B1 (Thiamine)",
                      "B2 (Riboflavin)",
                      "B3 (Niacin)",
                      "B5 (Pantothenic)",
                      "B6 (Pyridoxine)",
                      "B12 (Cobalamin)",
                      "Folate",
                      "Vitamin A",
                      "Vitamin C",
                      "Vitamin C",
                      "Vitamin E",
                      "Vitamin K",
                    ]}
                    flag={userdata.length}
                    para={"mg"}
                  />
                </Box>
              </Box>
              <Box
                w="100%"
                border="1px solid #ccc"
                borderRadius="15px"
                h="fit-content"
              >
                <Text
                  bgColor="#ccc"
                  borderRadius="15px 15px 0px 0px"
                  padding="5px 15px"
                >
                  Minerals
                </Text>
                <Box padding="0px 15px">
                  <Submenu
                    data={[
                      "Calcium",
                      "Copper",
                      "Iron",
                      "Magnesium",
                      "Manganese",
                      "Phosphorus",
                      "Potassium",
                      "Selenium",
                      "Sodium",
                      "Zinc",
                    ]}
                    flag={userdata.length}
                    para={"mg"}
                  />
                </Box>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
