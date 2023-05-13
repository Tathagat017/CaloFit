import { Box, Button, Heading, Input, Textarea, useDisclosure } from "@chakra-ui/react"
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
import { useState } from "react";
import { FaListAlt } from "react-icons/fa";
export default function Note({onData}) {
   var Token;
  
  Token = localStorage.getItem("token");
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  
  const handleSubmit = () =>{
    const object = {
    title, body
    }
    postRequestNote(object)
    // console.log(object, "this is Note object")
  }
  
  // PostRequestNote

  const postRequestNote = (object) =>{
    axios.post(`${process.env.REACT_APP_BACKEND_KEY}notes/add`,object,{
       headers: {
          Authorization: `Bearer ${Token}`,
        }
    } ).then((res)=>{console.log(res)
    onData(res)
    })
  }
  
  
  return (
    <>
      <Button leftIcon={<FaListAlt/>} color="black" colorScheme='teal' variant='ghost' onClick={onOpen}>NOTE</Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Note To Diary</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           <Input onChange={(e)=>setTitle(e.target.value)} value={title} mb="3" placeholder="Heading" />
           <Textarea onChange={(e)=>setBody(e.target.value)} value={body} h="30vh" >

          </Textarea>
          </ModalBody>

          <ModalFooter>
            <Box onClick={handleSubmit} >
            <Button  colorScheme='green' mr={3} onClick={onClose}>
              Save
            </Button>
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}