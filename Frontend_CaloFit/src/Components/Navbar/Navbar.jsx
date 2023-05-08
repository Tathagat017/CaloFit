import React from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  Flex,
  HStack,
  IconButton,
  Image,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef()
  return (
    <Box>
      <Flex
        w="100%"
        align="center"
        justify="space-between"
        border={"1px solid red"}
      >
        <Box paddingLeft={"10"} fontWeight="bold" fontSize="xl">
          <Image width={"25vh"} src="calofit.png" />
        </Box>
        <IconButton
          aria-label="Open menu"
          display={{ base: "block", md: "none" }}
          onClick={onOpen}
          icon={<HamburgerIcon />}
          ref={btnRef} 
        />
        <HStack
          as="nav"
          spacing={8}
          display={{ base: "none", md: "flex" }}
          justifyContent="flex-end"
          paddingRight={"10"}
        >
          <Link>
            <Text _hover={{
          color: "gray.500",
        }} fontSize={"1.2rem"} fontWeight={"semibold"} >Products</Text>
          </Link>
          
          <Link>
            <Text _hover={{
          color: "gray.500",
        }} fontSize={"1.2rem"} fontWeight={"semibold"} >Support</Text>
          </Link>

          <Link>
            <Text _hover={{
          color: "gray.500",
        }} fontSize={"1.2rem"} fontWeight={"semibold"} >Blog</Text>
          </Link>

          <Link>
            <Text _hover={{
          color: "gray.500",
        }} fontSize={"1.2rem"} fontWeight={"semibold"} >Forums</Text>
          </Link>

          <Link>
            <Text _hover={{
          color: "gray.500",
        }} fontSize={"1.2rem"} fontWeight={"semibold"} >About</Text>
          </Link>
          <Button  bg="white" border={"1px solid black"} >Log In</Button>
        </HStack>
      </Flex>
      {isOpen && (
        <Drawer
        isOpen={isOpen}
        placement='top'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
         <DrawerContent>
             <DrawerCloseButton />
             <VStack m={8} align={"stretch"}  spacing={10} >
            <Link>
            <Text _hover={{
          color: "gray.500",
        }} fontSize={"1.2rem"} fontWeight={"semibold"} >Products</Text>
          </Link>
          
          <Link>
            <Text _hover={{
          color: "gray.500",
        }} fontSize={"1.2rem"} fontWeight={"semibold"} >Support</Text>
          </Link>

          <Link>
            <Text _hover={{
          color: "gray.500",
        }} fontSize={"1.2rem"} fontWeight={"semibold"} >Blog</Text>
          </Link>

          <Link>
            <Text _hover={{
          color: "gray.500",
        }} fontSize={"1.2rem"} fontWeight={"semibold"} >Forums</Text>
          </Link>

          <Link>
            <Text _hover={{
          color: "gray.500",
        }} fontSize={"1.2rem"} fontWeight={"semibold"} >About</Text>
          </Link>
          <Button width={"5rem"} bg="white" border={"1px solid black"} >Log In</Button>
         </VStack>
         </DrawerContent>
         
      </Drawer>
        
      )}
    </Box>
  );
};

export default Navbar;
