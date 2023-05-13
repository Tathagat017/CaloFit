import { Box, Button, Center, Flex, FormControl, FormLabel, Image, Input, SimpleGrid, Stack, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr, useDisclosure } from "@chakra-ui/react"
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

export default function Exercise({onData}) {
  let [Name, setName] = useState("")
  const Initial = {time_done:"",  excercise:""  }
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [toggle, setToggle] = useState(true)
  const [state, setState] = useState(Initial)
  const [ObjectData, setObjectData] = useState({})
  const [linkData, setLinkData] = useState()
  const [onlyArray, setOnlyArray] = useState()
  var Token;
  Token = localStorage.getItem("token")
  onData(ObjectData)
  // const [data, setData] = useState()
  const data = [
    {name:"Running",icon:"https://cdn1.cronometer.com/img/activity/activity_category_Running.png", id:"1"},
    {name:"Walking",icon:"https://cdn1.cronometer.com/img/activity/activity_category_Walking.png", id:"2"},
    {name:"Cycling",icon:"https://cdn1.cronometer.com/img/activity/activity_category_Cycling.png", id:"3"},
    {name:"Swimming",icon:"https://cdn1.cronometer.com/img/activity/activity_category_Swimming.png", id:"4"},
    {name:"Yoga",icon:"https://cdn1.cronometer.com/img/activity/activity_category_Group_Classes.png", id:"5"},
    {name:"Hiking",icon:"https://cdn1.cronometer.com/img/activity/activity_Mountain_Biking.png", id:"6"},
    {name:"Boxing",icon:"https://cdn1.cronometer.com/img/activity/activity_Arm_Ergometer.png", id:"7"},
  ]
const ToggleClick = (name) =>{
  
  setName(name)

  setToggle(false)
}

const object = { 
    "kcal_consumed_eaten":[],
    "excercise_done":[],
    "kcal_burnt":120,
    "total_kcal_left":23
}



const GetRequestForExercise = () =>{
  axios.get( `${process.env.REACT_APP_BACKEND_KEY}/nutrition/getuserdata`,{
    headers:{
      Authorization: `Bearer ${Token}`,
    }
  }).then((res)=>{
    setObjectData(res.data.users_data)
    setOnlyArray(res.data.users_data.excercise_done)
    console.log(res.data.users_data.excercise_done, "GetRequestForExercise")
  })
  .catch((err)=>console.log("Error from GetRequestForExercise", err))
}

// PostRequestForExercise
const PostRequestForExercise = (data) =>{
  
 object.excercise_done.push(data)
 
  return axios.post( `${process.env.REACT_APP_BACKEND_KEY}/nutrition/add`,object,
  {
    headers:{
      Authorization: `Bearer ${Token}`,
    }
  }).then((res)=>console.log(res))
  .catch((err)=> {
    console.log("Error From PostRequestForExercise", err)
    if(err.response.status == 403){
      patchRequestForExercise(data)
    }
  })
}

// PathchRequestForExercise

const patchRequestForExercise = async(data) =>{
  setOnlyArray((pre)=>({...pre, data}))
  console.log(setOnlyArray)
 console.log(object.excercise_done)
// object.excercise_done.push(data)
//  GetRequestForExercise()
  // console.log(object, "Object")
 onData(object)

 try {
 
 axios.patch( `${process.env.REACT_APP_BACKEND_KEY}/nutrition/update`,object, 
  {
  headers: {Authorization: `Bearer ${Token}`,}
  })
  .then((res)=> {console.log(res)
  GetRequestForExercise()
  })
  .catch((err)=>console.log("Error from PatchRequest", err))

  } catch (error) {
      console.log("Error From Patch Request", error)
  }
}




const handleChangeInputBox = (e) =>{
  const {name, value} = e.target
  setState((pre)=>({...pre, [name]:value}))
  if(state.excercise == ""){
    state.excercise = Name
  }
 
  
  }

const handleInputDataSubmit = async(e) =>{
  try {
    e.preventDefault()
    await PostRequestForExercise(state)
    
    setState(Initial)
    console.log("Submit")
 
  } catch (error) {
    console.log("Error From handeInputDataSubmit", error)
  }
  
}

  useEffect(()=>{
    GetRequestForExercise()
  },[])

  return (
    <>
      <Button leftIcon={<FaChild/>} color="black" colorScheme='teal' variant='ghost' onClick={onOpen}>EXERCISE</Button>
    
      <Modal size="2xl" blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent  >
          <ModalHeader>Add Exercise to Diary</ModalHeader>
          <ModalCloseButton onClick={()=>setToggle(true)} />
          <ModalBody>

{
  toggle ? <SimpleGrid p="5" borderRadius={"4"} bg="#f4f8f9" border={"1px solid #e6e7e8 "} columns={{sm: 2, md: 3, lg:4}} spacing='3'>
          
          {
            data?.map(({name, icon, id})=>{
              return <Box onClick = {()=>ToggleClick(name)}  key={id} p="3" bg="white"
               _hover={{
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
              }} 
              boxShadow= "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" 
              borderRadius={"4"}
             
             >
                <Stack>
                  <Image src={icon} />
                  <Text textAlign={"center"}  >{name}</Text>
                </Stack>
                </Box> 
            })
          }
          </SimpleGrid>
    : // If Toggle False
              // <Th >Excercise name</Th>
              // <Th>hard kcal min</Th>
              // <Th>Easy kcal min</Th>
    <Box  bg="white" >
     <form onSubmit={(e)=>handleInputDataSubmit(e)} >
    <FormControl isRequired >
      <FormLabel>Excercise name</FormLabel>
      <Input  name="excercise" onChange={handleChangeInputBox} value={ state.excercise || Name }  type='text' />

      <FormLabel>Number of times done</FormLabel>
      <Input  name="time_done" onChange={handleChangeInputBox} value={state.time_done}  type='number' />

      
      
    </FormControl>
    <Center p="4" >
    <Button  colorScheme='teal' variant='outline' type="submit" >Submit</Button>
    </Center>
     </form>
     
         
    </Box>

}
          </ModalBody>

          <ModalFooter>
           <Button variant='ghost' mr={3} onClick={onClose}>
           <Text onClick={()=>setToggle(true)} > Close </Text>   
            </Button>
            <Button onClick={()=>setToggle(true)} colorScheme="green">Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      
    </>
  )
}