import { Box, Button, Flex, Image, Input, SimpleGrid, Stack, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr, useDisclosure } from "@chakra-ui/react"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import axios from "axios";
import { useEffect, useState } from "react";
import { FaAppleAlt } from "react-icons/fa";

export default function FoodBox() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [linkData, setLinkData] = useState()

  const [toggle, setToggle] = useState(true)
 const data = [
    {name:"Fruits",icon:"https://cdn-icons-png.flaticon.com/512/1147/1147832.png",link:"https://calofit-backend-deployment.onrender.com/food/fruits",type:"fruits"},
    {name:"Vegetables",icon:"https://cdn-icons-png.flaticon.com/512/5346/5346571.png",link:"https://calofit-backend-deployment.onrender.com/food/vegetable",type:"vegetables"},
    {name:"Meats",icon:"https://cdn-icons-png.flaticon.com/512/4336/4336872.png",link:"https://calofit-backend-deployment.onrender.com/food/meat",type:"meats"},
    {name:"Recipes",icon:"https://cdn-icons-png.flaticon.com/512/1790/1790457.png",link:"https://calofit-backend-deployment.onrender.com/food/recipes",type:"recipes"},
  {name:"Dairy",icon:"https://cdn-icons-png.flaticon.com/512/2174/2174676.png",link:"https://calofit-backend-deployment.onrender.com/food/dairy",type:"dairys"},
  ] 
  const handleClick = (link, type) =>{
   axios.get(link).then((res)=> setLinkData(res.data[type]))
    setToggle(false)
  }
// vegetables,meats,recipes as same as fruits
  const handleFetch = (name, ...rest) =>{
   console.log(name,rest )
  }

  return (
    <>
      <Button leftIcon={<FaAppleAlt/>} color="black" colorScheme='teal' variant='ghost' onClick={onOpen}>FOOD</Button>
    
      <Modal size="2xl" blockScrollOnMount={false} isOpen={isOpen}  onClose={onClose}>
        <ModalOverlay />
        <ModalContent  >
          <ModalHeader>Add Food to Diary</ModalHeader>
          <ModalCloseButton onClick={()=>setToggle(true)} />
          <ModalBody>
         
{
  toggle ?  <SimpleGrid p="5" borderRadius={"4"} bg="#f4f8f9" border={"1px solid #e6e7e8 "} columns={{sm: 2, md: 3, lg:4}} spacing='3'>
          
          {
            data?.map(({name, icon, link, type})=>{
              return <Box p="3" bg="white"
               _hover={{
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
              }} 
              boxShadow= "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" 
              borderRadius={"4"}
              >
              
                <Stack onClick={()=>handleClick(link, type)} >
                  <Image src={icon} />
                  <Text textAlign={"center"} >{name}</Text>
                </Stack>
                </Box> 
            })
          }

          </SimpleGrid> 
  :
          <Box  bg="white" >
            <TableContainer overflowX="auto"  overflowY="auto" height="10rem" 
            css={{
            '&::-webkit-scrollbar': {
              width: '8px',
              
              borderRadius: '8px',
            },
            '&::-webkit-scrollbar-track': {
              background: 'Gainsboro',
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'MediumSeaGreen',
              borderRadius: '8px',
            },
          }}
            
            
            >
              <Table variant="simple" size='sm'  colorScheme='gray'>
                <TableCaption>Get More Details</TableCaption>
           <Thead>
            <Tr>
              <Th >name</Th>
              <Th>protein</Th>
              <Th>vitA</Th>
              <Th>vitE</Th>
              <Th>mineral</Th>
              <Th>fat</Th>
              <Th>Add  Dairy</Th>
            </Tr>
          </Thead>
           



           {
            linkData?.map(({name,kcal,carb,protein,vitA,vitD,vitC,vitE,mineral,fat,potassium})=>{
                return  <Tbody onClick={()=>handleFetch(name,kcal,carb,protein,vitA,vitD,vitC,vitE,mineral,fat,potassium)} >
              <Tr>
              <Td >{name}</Td>
              <Td>{protein}</Td>
              <Td>{vitA}</Td>
              <Td>{vitE}</Td>
              <Td>{mineral}</Td>
              <Td>{fat}</Td>
              <Td><Button size={"4"} >Add</Button></Td>
             </Tr>
             </Tbody>
            })
          }
          </Table>
          </TableContainer>
         
          </Box>
}




          {/* <SimpleGrid p="5" borderRadius={"4"} bg="#f4f8f9" border={"1px solid #e6e7e8 "} columns={{sm: 2, md: 3, lg:4}} spacing='3'>
          
          {
            data?.map(({name, icon, link})=>{
              return <Box p="3" bg="white"
               _hover={{
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
              }} 
              boxShadow= "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" 
              borderRadius={"4"}
              >
              
                <Stack onClick={()=>handleClick(link)} >
                  <Image src={icon} />
                  <Text textAlign={"center"} >{name}</Text>
                </Stack>
                </Box> 
            })
          }

          {
            linkData?.map(({name})=>{
                return <h1>{name}</h1>
            })
          }




          </SimpleGrid> */}
          </ModalBody>

          <ModalFooter>
           <Button variant='ghost' mr={3}  onClick={onClose}>
             <Text onClick={()=>setToggle(true)} >Close</Text> 
            </Button>
            <Button colorScheme="green"> <Text onClick={()=>setToggle(true)} >Save</Text> </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      
    </>
  )
}




          //  {
          //   linkData?.map(({name,kcal,carb,protein,vitA,vitD,vitC,vitE,mineral,fat,potassium})=>{
          //       return  <Tbody onClick={()=>handleFetch(name)} >
          //     <Tr>
          //     <Td >{name}</Td>
          //     <Td>{protein}</Td>
          //     <Td>{vitA}</Td>
          //     <Td>{vitE}</Td>
          //     <Td>{mineral}</Td>
          //     <Td>{fat}</Td>
          //     <Td><Button size={"4"} >Add</Button></Td>
          //    </Tr>
          //    </Tbody>
          //   })
          // }