import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import FoodBox from "./FoodBox";
import Exercise from "./Exercise";
import Note from "./Note";
import Fast from "./Fast";

const DairyBox = () => {
 const [dataFromChild, setDataFromChild] = useState(null);
//  console.log(dataFromChild)
 const handleDataFromChild = (data) => {
    setDataFromChild(data.kcal_consumed_eaten);
    
  };
  // console.log("This Data is from Parent", dataFromChild)
  return (
    <div>
      <Box  pl="4"
          pr="4" pb="3" borderRadius={"4"} minH={"30vh"} boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px" width={"100%"}   h="auto" bg="white">
       
      <Box  >
      <FoodBox  onData={handleDataFromChild} />
      <Exercise/>
      <Note/>
      <Fast/>
      </Box>
     <Box     >
      
      {
        
      

       dataFromChild?.map((el)=>{
       return <Flex 
       key={Date.now()+"el.food.name"+Math.random()}
       _hover={{
        bg:"#f0f2fa"
       }}
          fontSize={"sm"} 
          bg="#fafbff"
         
          border={"1px solid #eff0f4"} 
          p="1" 
          m="2" 
          justifyContent={"space-between"} > 
          <Text>   {el.food.name}  </Text> 
          <Text>{el.food.kcal} kcl </Text> 
          <Text>{el.quantity} qty</Text>  
       </Flex>
       })
      }
      </Box>
      </Box>
     
    </div>
  );
};

export default DairyBox;
