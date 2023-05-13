import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import FoodBox from "./FoodBox";
import Exercise from "./Exercise";
import Note from "./Note";
import Fast from "./Fast";
import axios from "axios";
import { useSelector } from "react-redux";

const DairyBox = () => {
  const [dataFromChild, setDataFromChild] = useState(null);
  const [exerciseData, setExerciseData] = useState(null);
  const [NoteFromChid, setNoteFromChild] = useState(null);
  const [Notemy, setNote] = useState(null);

  const handleNoteFromChild = (data) => {
    setNoteFromChild(data);
    // console.log(NoteFromChid)
  };

  const handleDataFromChild = (data) => {
    setDataFromChild(data.kcal_consumed_eaten);
  };

  const handleExerciseChild = (data) => {
    setExerciseData(data.excercise_done);
    // console.log(exerciseData, "this is exercise")
  };

  const token = useSelector((store) => store.authreducer.token);

  var Token;

  Token = localStorage.getItem("token");

  // GetRequest
  const GetRequest = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_KEY}nutrition/getuserdata`, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then((res) => {
        // console.log(res.data.users_data.kcal_consumed_eaten, "What is this");
        setDataFromChild(res.data.users_data.kcal_consumed_eaten);
      })
      .catch((err) => console.log("Error In getRequest,", err));
  };

  // NoteGetRequest

  const NoteGetRequest = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_KEY}notes`, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then((res) => setNote(res.data));
  };

  useEffect(() => {
    NoteGetRequest();
  }, [NoteFromChid]);

  useEffect(() => {
    GetRequest();
  }, []);

  return (
    <div>
      <Box
        pl="4"
        pr="4"
        pb="3"
        borderRadius={"4"}
        minH={"30vh"}
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        width={"100%"}
        h="auto"
        bg="white"
      >
        <Box>
          <FoodBox onData={handleDataFromChild} />
          <Exercise onData={handleExerciseChild} />
          <Note onData={handleNoteFromChild} />
          <Fast />
        </Box>
        <Box>
          {dataFromChild?.map((el) => {
            return (
              <Flex
                key={Date.now() + "el.food.name" + Math.random()}
                _hover={{
                  bg: "#f0f2fa",
                }}
                fontSize={"sm"}
                bg="#fafbff"
                border={"1px solid #eff0f4"}
                p="1"
                m="2"
                justifyContent={"space-between"}
              >
                <Text> {el.food.name} </Text>
                <Text>{el.food.kcal} kcl </Text>
                <Text>{el.quantity} qty</Text>
              </Flex>
            );
          })}
        </Box>
        {/* Notedata */}
        <Box>
          {Notemy?.map((el) => {
            return (
              <Flex
                key={Date.now() + "el.food.name" + Math.random()}
                _hover={{
                  bg: "#f0f2fa",
                }}
                fontSize={"sm"}
                bg="#fafbff"
                border={"1px solid #eff0f4"}
                p="1"
                m="2"
                justifyContent={"space-between"}
              >
                <Text> {el.title} </Text>
                <Text>{el.body} kcl </Text>
              </Flex>
            );
          })}
        </Box>
      </Box>
    </div>
  );
};

export default DairyBox;
