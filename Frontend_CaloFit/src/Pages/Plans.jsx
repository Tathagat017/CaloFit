import React, { useEffect, useState } from "react";
import { Box, Heading, Text,Flex } from "@chakra-ui/react";
import GoldPlan from "./GoldPlan";
import Enterprise from "./Enterprise";
import FAQ from "./FAQ";
import GiftSubscription from "./GiftSubscription";
import axios from "axios";
import ProfPlan from "./ProPlan";
// import { SidebarContent } from "../../components/SidebarContent";
// import { MobileNav } from "../../components/Siderbar";

const Plans = () => {
  const[activePlan,setActivePlan]=useState("")
  let token=localStorage.getItem("token")
  useEffect(()=>{
    axios.get('https://calofit-backend-deployment.onrender.com/userplan',{
      headers:{
        Authorization: `Bearer ${token}`,
       }
    }).then(res=>setActivePlan(res.data))
  },[])
  let data=activePlan[0]
  return (
    <>
    <Box>
      <Text fontSize={["l", "xl", "2xl"]} fontWeight="bold" w="95%" m="auto">
        Plans for Individuals
      </Text>
      <br />
     {activePlan? <Flex gap="1%" border="1px solid gray" borderRadius={10} px="1%" borderColor="red">
      <Text fontSize='3xl'>Current Plan:{data.plan}</Text>
      <Text fontSize='3xl'>Name:{data.name}</Text>
      <Text fontSize='3xl'>Mobile No:{data.mo_no}</Text>
      <Text fontSize='3xl'> Start:{data.str_date}</Text>
      <Text fontSize='3xl'>End:{data.end_date}</Text>
      </Flex>:<Heading pl={20} color="red" >No Plan Activated!</Heading>}
      <GoldPlan />
      <br />
      <Text fontSize={["l", "xl", "2xl"]} fontWeight="bold" w="95%" m="auto">
        Gift Subscriptions
      </Text>
      <br />
      <GiftSubscription />
      <br />
      <Text fontSize={["l", "xl", "2xl"]} fontWeight="bold" w="95%" m="auto">
        Plans for Professionals
      </Text>
      <br />
      <ProfPlan />
      <br />
      <Enterprise />
      <br />
      <FAQ />
      <br />
    </Box >
    </>
  );
};

export default Plans;
