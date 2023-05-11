import { Box, Button, Flex, Image, Input, SimpleGrid, Stack, Text, useDisclosure } from "@chakra-ui/react"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useEffect, useState } from "react";

import { FaChild } from "react-icons/fa";
import axios from 'axios';

export default function Exercise() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  // const [data, setData] = useState()
  const data = [
    {name:"Running",icon:"https://cdn1.cronometer.com/img/activity/activity_category_Running.png"},
    {name:"Walking",icon:"https://cdn1.cronometer.com/img/activity/activity_category_Walking.png"},
    {name:"Cycling",icon:"https://cdn1.cronometer.com/img/activity/activity_category_Cycling.png"},
    {name:"Swimming",icon:"https://cdn1.cronometer.com/img/activity/activity_category_Swimming.png"},
    {name:"Yoga",icon:"https://cdn1.cronometer.com/img/activity/activity_category_Group_Classes.png"},
    {name:"Hiking",icon:"https://cdn1.cronometer.com/img/activity/activity_Mountain_Biking.png"},
    {name:"Boxing",icon:"https://cdn1.cronometer.com/img/activity/activity_Arm_Ergometer.png"},
  ]
  // const getData = ()=>{
  //   axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>setData(res.data))
  // }
  useEffect(()=>{
    // getData()
  },[])

  return (
    <>
      <Button leftIcon={<FaChild/>} color="black" colorScheme='teal' variant='ghost' onClick={onOpen}>EXERCISE</Button>
    
      <Modal size="2xl" blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent  >
          <ModalHeader>Add Food to Diary</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <SimpleGrid p="5" borderRadius={"4"} bg="#f4f8f9" border={"1px solid #e6e7e8 "} columns={{sm: 2, md: 3, lg:4}} spacing='3'>
          
          {
            data?.map(({name, icon})=>{
              return <Box p="3" bg="white"
               _hover={{
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
              }} 
              boxShadow= "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" 
              borderRadius={"4"}
              >
                <Stack>
                  <Image src={icon} />
                  <Text textAlign={"center"} >{name}</Text>
                </Stack>
                </Box> 
            })
          }
          </SimpleGrid>
          </ModalBody>

          <ModalFooter>
           <Button variant='ghost' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="green">Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      
    </>
  )
}