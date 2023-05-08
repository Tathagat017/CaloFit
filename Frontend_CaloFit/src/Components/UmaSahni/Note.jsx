import { Button, Textarea, useDisclosure } from "@chakra-ui/react"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { FaListAlt } from "react-icons/fa";
export default function Note() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button leftIcon={<FaListAlt/>} color="black" colorScheme='teal' variant='ghost' onClick={onOpen}>NOTE</Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Note To Diary</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           <Textarea h="30vh" >

           </Textarea>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='green' mr={3} onClick={onClose}>
              Save
            </Button>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}