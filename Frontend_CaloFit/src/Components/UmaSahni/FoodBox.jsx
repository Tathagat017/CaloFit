import { Button, Flex, Input, useDisclosure } from "@chakra-ui/react"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useEffect } from "react";
import { FaAppleAlt } from "react-icons/fa";

const getData = async() =>{
 const response = await fetch("https://naughty-shorts-hare.cyclic.app/");
 const jsonData = await response.json();
  console.log(jsonData);

}


export default function FoodBox() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const handleClick = (e) =>{
    e.target.value()
  }
  useEffect(()=>{
    getData()
  },[])

  return (
    <>
      <Button leftIcon={<FaAppleAlt/>} color="black" colorScheme='teal' variant='ghost' onClick={onOpen}>FOOD</Button>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Food to Diary</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Flex> <Input/> <Button onClick={handleClick} colorScheme="green" variant={"ghost"} >Search</Button></Flex>
          
          
          </ModalBody>

          <ModalFooter>
          
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}