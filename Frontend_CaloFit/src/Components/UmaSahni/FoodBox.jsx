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
import { FaAppleAlt } from "react-icons/fa";
export default function FoodBox() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button leftIcon={<FaAppleAlt/>} color="black" colorScheme='teal' variant='ghost' onClick={onOpen}>FOOD</Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Food to Diary</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Flex> <Input/> <Button colorScheme="green" variant={"ghost"} >Search</Button></Flex>
          </ModalBody>

          <ModalFooter>
          
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}