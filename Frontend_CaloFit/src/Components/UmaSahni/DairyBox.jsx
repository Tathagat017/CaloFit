import { Box } from "@chakra-ui/react";
import React from "react";
import FoodBox from "./FoodBox";
import Exercise from "./Exercise";
import Note from "./Note";
import Fast from "./Fast";

const DairyBox = () => {
  return (
    <div>
      <Box borderRadius={"4"} boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px" width={"100%"} h="30vh" bg="white">
        <Box border={"1px solid red"} >
      <FoodBox/>
      <Exercise/>
      <Note/>
      <Fast/>
      </Box>

      </Box>
     
    
     
    
    </div>
  );
};

export default DairyBox;
