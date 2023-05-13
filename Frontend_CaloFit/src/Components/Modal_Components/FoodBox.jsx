import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  SimpleGrid,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import "@fontsource/raleway";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaAppleAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import DonutChart from "./../DashboardPage_Components/DonutChart";

export default function FoodBox({ onData }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [linkData, setLinkData] = useState();
  const [Arraydata, setArrayData] = useState([]);
  let [selectedFood, setSelectedFood] = useState({});

  let url = "https://calofitbackend.cyclic.app/";
  let initialDonutData = [
    {
      name: "kcal",
      color: "#05103b",
      value: 0,
    },
    {
      name: "carb",
      color: "#1d043b",
      value: 0,
    },
    {
      name: "protein",
      color: "#ffcf04",
      value: 0,
    },
    {
      name: "vitA",
      color: "#ff8900",
      value: 0,
    },
    {
      name: "vitD",
      color: "#ff3838",
      value: 0,
    },
    {
      name: "vitC",
      color: "rgb(34, 215, 255)",
      value: 0,
    },
    {
      name: "vitE",
      color: "rgb(243, 45, 236)",
      value: 0,
    },
    {
      name: "mineral",
      color: "rgb(48, 129, 216)",
      value: 0,
    },
    {
      name: "fat",
      color: "rgb(250, 246, 7)",
      value: 0,
    },
    {
      name: "potassium",
      color: "rgb(34, 173, 69)",
      value: 0,
    },
  ];
  const [donutData, setDonutData] = useState(initialDonutData);

  useEffect(() => {
    setDonutData(initialDonutData);
  }, [isOpen]);

  const token = useSelector((store) => store.authreducer.token);

  var Token;
  const [toggle, setToggle] = useState(true);
  Token = localStorage.getItem("token");

  onData(Arraydata);

  const data = [
    {
      name: "Fruits",
      icon: "https://cdn-icons-png.flaticon.com/512/1147/1147832.png",
      link: `${url}food/fruits`,
      type: "fruits",
    },
    {
      name: "Vegetables",
      icon: "https://cdn-icons-png.flaticon.com/512/5346/5346571.png",
      link: `${url}food/vegetable`,
      type: "vegetables",
    },
    {
      name: "Meats",
      icon: "https://cdn-icons-png.flaticon.com/512/4336/4336872.png",
      link: `${url}food/meat`,
      type: "meats",
    },
    {
      name: "Recipes",
      icon: "https://cdn-icons-png.flaticon.com/512/1790/1790457.png",
      link: `${url}food/recipes`,
      type: "recipes",
    },
    {
      name: "Dairy",
      icon: "https://cdn-icons-png.flaticon.com/512/2174/2174676.png",
      link: `${url}food/dairy`,
      type: "dairys",
    },
  ];

  const handleClick = (link, type) => {
    axios.get(link).then((res) => setLinkData(res.data[type]));
    setToggle(false);
  };
  // vegetables,meats,recipes as same as fruits
  const handleFetch = (el) => {
    //  console.log(el )
  };

  const object = {
    kcal_consumed_eaten: [],
    excercise_done: [],
    kcal_burnt: 120,
    total_kcal_left: 23,
  };

  // console.log(object.kcal_consumed_eaten)

  // Patch Request
  const patchRequestWithFoodObject = async (el) => {
    let new_mapped = [...donutData];
    let i = 0;
    for (let key in el) {
      if (typeof el[key] == typeof 1) {
        new_mapped[i].value = el[key];
        i++;
      }
    }
    if (i >= 9) {
      i = 0;
    }
    // console.log(new_mapped);
    setDonutData(new_mapped);
    // console.log(donutData);
    await GetRequest();
    // console.log(Arraydata.kcal_consumed_eaten, "ArrayData")

    let new_element = {};

    for (let i in el) {
      if (i !== el.userID) {
        new_element[i] = el[i];
      }
    }

    let new_food = {
      food: new_element,
      quantity: 1,
    };

    // const newObject =

    // let new_kcal = [...Arraydata.kcal_consumed_eaten, new_food];
    // console.log( new_kcal)

    Arraydata.kcal_consumed_eaten.push(new_food);
    const OnlyArray = Arraydata.kcal_consumed_eaten;
    console.log(OnlyArray, "This is only array");
    setArrayData((Arraydata.kcal_consumed_eaten = OnlyArray));
    onData(Arraydata);
    console.log(Arraydata, "Here is ArrayData.........");

    axios
      .patch(`${url}nutrition/update`, Arraydata, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then((res) => GetRequest())
      .catch((err) => console.log("Error from PatchRequest", err));
  };

  // postRequestWithFoodObject

  const postRequestWithFoodObject = (el) => {
    let new_mapped = [...donutData];
    let i = 0;
    for (let key in el) {
      if (typeof el[key] == typeof 1) {
        new_mapped[i].value = el[key];
        i++;
      }
    }
    if (i >= 9) {
      i = 0;
    }
    // console.log(new_mapped);
    setDonutData(new_mapped);
    object.kcal_consumed_eaten = {
      food: el,
      quantity: 1,
    };
    axios
      .post(`${url}nutrition/add`, object, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch(function (error) {
        if (error.response.status == 403) {
          patchRequestWithFoodObject(el);
        }
      });
  };

  const handleAddToDairy = (el) => {
    postRequestWithFoodObject(el);
    setSelectedFood(el);
  };

  // GetRequest
  const GetRequest = () => {
    axios
      .get(`${url}nutrition/getuserdata`, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then((res) => {
        console.log(res.data.users_data);
        setArrayData(res.data.users_data);
      })
      .catch((err) => console.log("Error In getRequest,", err));
  };

  const donut = [
    {
      name: "kcal",
      color: "#05103b",
      value: 143,
    },
    {
      name: "carb",
      color: "#2facff",
      value: 65,
    },
    {
      name: "protein",
      color: "#ffcf04",
      value: 34,
    },
    {
      name: "vitA",
      color: "#ff8900",
      value: 87,
    },
    {
      name: "vitD",
      color: "#ff3838",
      value: 21,
    },
    {
      name: "vitC",
      color: "rgb(225, 93, 170)",
      value: 84,
    },
    {
      name: "vitE",
      color: "rgb(216, 132, 48)",
      value: 87,
    },
    {
      name: "mineral",
      color: "rgb(48, 129, 216)",
      value: 8,
    },
    {
      name: "fat",
      color: "rgb(48, 216, 160)",
      value: 8,
    },
    {
      name: "potassium",
      color: "rgb(112, 236, 29)",
      value: 8,
    },
  ];
  // console.log("this is current item", linkData);

  useEffect(() => {
    GetRequest();
  }, [setArrayData]);

  return (
    <>
      <Button
        leftIcon={<FaAppleAlt />}
        color="black"
        colorScheme="teal"
        variant="ghost"
        onClick={onOpen}
      >
        FOOD
      </Button>

      <Modal
        size="2xl"
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Food to Diary</ModalHeader>
          <ModalCloseButton onClick={() => setToggle(true)} />
          <ModalBody>
            {toggle ? (
              <SimpleGrid
                p="5"
                borderRadius={"4"}
                bg="#f4f8f9"
                border={"1px solid #e6e7e8 "}
                columns={{ sm: 2, md: 3, lg: 4 }}
                spacing="3"
              >
                {data?.map(({ name, icon, link, type }) => {
                  return (
                    <Box
                      p="3"
                      bg="white"
                      _hover={{
                        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                      }}
                      boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                      borderRadius={"4"}
                    >
                      <Stack onClick={() => handleClick(link, type)}>
                        <Image src={icon} />
                        <Text textAlign={"center"}>{name}</Text>
                      </Stack>
                    </Box>
                  );
                })}
              </SimpleGrid>
            ) : (
              <Box bg="white">
                <TableContainer
                  overflowX="auto"
                  overflowY="auto"
                  height="10rem"
                  css={{
                    "&::-webkit-scrollbar": {
                      width: "8px",

                      borderRadius: "8px",
                    },
                    "&::-webkit-scrollbar-track": {
                      background: "Gainsboro",
                    },
                    "&::-webkit-scrollbar-thumb": {
                      background: "MediumSeaGreen",
                      borderRadius: "8px",
                    },
                  }}
                >
                  <Table variant="simple" size="sm" colorScheme="gray">
                    <TableCaption>Get More Details</TableCaption>
                    <Thead>
                      <Tr>
                        <Th>name</Th>
                        <Th>protein</Th>
                        <Th>vitA</Th>
                        <Th>vitE</Th>
                        <Th>mineral</Th>
                        <Th>fat</Th>
                        <Th>Add Dairy</Th>
                      </Tr>
                    </Thead>
                    {linkData?.map((el) => {
                      return (
                        <Tbody onClick={() => handleFetch(el)}>
                          <Tr>
                            <Td>{el.name}</Td>
                            <Td>{el.protein}</Td>
                            <Td>{el.vitA}</Td>
                            <Td>{el.vitE}</Td>
                            <Td>{el.mineral}</Td>
                            <Td>{el.fat}</Td>
                            <Td>
                              <Button
                                onClick={() => handleAddToDairy(el)}
                                size={"4"}
                              >
                                Add
                              </Button>
                            </Td>
                          </Tr>
                        </Tbody>
                      );
                    })}
                  </Table>
                </TableContainer>
                <Text
                  marginLeft={"45%"}
                  fontFamily={"sans-serif"}
                >{`${selectedFood.name}`}</Text>
                <Box
                  padding={"1%"}
                  w={"95%"}
                  display={"flex"}
                  flexDirection={"row"}
                  justifyContent={"space-evenly"}
                  alignItems={"center"}
                  margin={"auto"}
                  boxShadow={
                    "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"
                  }
                >
                  <Table width={"55%"} height={"10%"}>
                    <Td>
                      {donutData.map((el) => {
                        return (
                          <Tr>
                            <Text
                              fontSize={"1rem"}
                              fontFamily={"Raleway"}
                              spacing={"0.5rem"}
                            >
                              {el.name.includes("vit")
                                ? el.name.replace("vit", "Vitamin")
                                : el.name}
                              : {`${el.value} mg`}
                            </Text>
                          </Tr>
                        );
                      })}
                    </Td>
                  </Table>
                  <DonutChart data={donutData} />
                </Box>
              </Box>
            )}
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              <Text onClick={() => setToggle(true)}>Close</Text>
            </Button>
            <Button colorScheme="green">
              {" "}
              <Text onClick={() => setToggle(true)}>Save</Text>{" "}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
