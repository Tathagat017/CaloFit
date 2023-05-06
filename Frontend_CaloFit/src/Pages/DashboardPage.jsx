import React from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Image,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';


const LinkItems = [
  { name: 'Dashboard', icon: FiHome ,  title:"/dashboard"},
  { name: 'Diary', icon: FiTrendingUp , title:"/diary"},
  { name: 'Foods', icon: FiCompass ,  title:"/foods"},
  { name: 'Favourites', icon: FiStar ,  title:"/diary"},
  { name: 'Settings', icon: FiSettings ,  title:"/diary"},
];

export default function DashboardPage({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box  minH="100vh" bg={"#fffcf6"}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
         bg="#262a3b"
         color="white"
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
       
        >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box w={"100%"}  bg="white" >
        <Text fontSize={"larger"} fontWeight={"semibold"}  alignItems={"center"} padding={"2"} textAlign={"right"} >Account</Text>
      </Box>
      <Box ml={{ base: 0, md: 60 }} p="4">
       
        {children}
     
      </Box>
    </Box>
  );
}



const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
       bg="#262a3b"
       color={"white"}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Image src="calofit-white.png" />
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} title={link.title} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};


const NavItem = ({ icon, children,title, ...rest  }) => {
  return (
    <Link to={title}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};


const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
       bg="#262a3b"
       color={"white"}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Image src="calofit-white.png" />
    </Flex>
  );
};











// export default function DashboardPage