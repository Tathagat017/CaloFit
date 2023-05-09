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
import {useSelector} from "react-redux"

export default function FoodBox({onData}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [linkData, setLinkData] = useState()
  const [Arraydata, setArrayData] = useState([])
  const token = useSelector((store)=>store.authreducer.token)
 
  var Token;
  const [toggle, setToggle] = useState(true)

  Token = localStorage.getItem("token")

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
  const handleFetch = (el) =>{
  //  console.log(el )
  }

 const object = { "kcal_consumed_eaten":[{
  "food":{"name": "Beef Tenderloin",
      "kcal": 143,
      "carb": 0,
      "protein": 20,
      "vitA": 0,
      "vitD": 0,
      "vitC": 0,
      "vitE": 0,
      "mineral": 2,
      "fat": 7,
      "potassium": 350},
"quantity":1
}],
"excercise_done":[],
"kcal_burnt":120,
 "total_kcal_left":23
}

  const patchRequestWithFoodObject = async (el)=>{

  await GetRequest()
 
  let new_element = {}

  for(let i in el){
    if(i!== el.userID){
    new_element [i] = el[i]
    }
  }

  let new_food = {
  food:new_element,
  quantity:1
  }

    Arraydata.kcal_consumed_eaten.push(new_food)
    const OnlyArray =  Arraydata.kcal_consumed_eaten
    // console.log(OnlyArray, "This is only array")
    setArrayData(Arraydata.kcal_consumed_eaten = OnlyArray)
    onData(Arraydata)
  //  console.log(Arraydata, "Here is ArrayData.........")
  axios.patch('https://calofit-backend-deployment.onrender.com/nutrition/update',
  Arraydata, {
     headers: {
    Authorization: `Bearer ${Token}`,
   }
  }).then((res)=> GetRequest()).catch((err)=>console.log("Error from PatchRequest", err))

  }

  // postRequestWithFoodObject
  
const postRequestWithFoodObject = (el) =>{
  object.kcal_consumed_eaten ={
    food:el, quantity:1
  }
  axios.post("https://calofit-backend-deployment.onrender.com/nutrition/add",object, {
     headers: {
    Authorization: `Bearer ${Token}`,
   }
  }).then((res)=>{
    console.log(res)
    return res
  })
  .catch(function (error) {
    if (error.response.status == 403) {
      patchRequestWithFoodObject(el)
    }
  });
}

// GetRequest

  const handleAddToDairy =(el)=>{
  postRequestWithFoodObject(el)
  }

  const GetRequest = () =>{
  axios.get("https://calofit-backend-deployment.onrender.com/nutrition/getuserdata", {
  headers: {
    Authorization: `Bearer ${Token}`
  }
  })
  .then((res)=>{
  // console.log(res.data.users_data)
  setArrayData(res.data.users_data)
  }).catch((err)=>console.log("Error In getRequest,", err))

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
              <Th>Add Dairy</Th>
            </Tr>
          </Thead>
           {
            linkData?.map((el)=>{
                return  <Tbody onClick={()=>handleFetch(el)} >
              <Tr>
              <Td >{el.name}</Td>
              <Td>{el.protein}</Td>
              <Td>{el.vitA}</Td>
              <Td>{el.vitE}</Td>
              <Td>{el.mineral}</Td>
              <Td>{el.fat}</Td>
              <Td><Button onClick={()=>handleAddToDairy(el)} size={"4"} >Add</Button></Td>
             </Tr>
             </Tbody>
            })
          }
          </Table>
          </TableContainer>
         
          </Box>
}

          </ModalBody>

          <ModalFooter>
           <Button variant='ghost' mr={3}  onClick={onClose}>
             <Text onClick={()=>setToggle(true)} >Close</Text> 
            </Button>
            <Button colorScheme="green"> <Text onClick={()=>setToggle(true)} >Save</Text> </Button>
         {/* <Button onClick={GetRequest} >Get Data</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
      
    </>
  )
}

