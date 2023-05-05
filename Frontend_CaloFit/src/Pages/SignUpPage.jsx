import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import Terms from "../Components/OneTimeUse.jsx/Terms";

const SignUpPage = () => {
  return (
    <div>
      <Box bgColor={"#fffcf6"}>
        <Box h={"11vh"} width={"100%"} bg="#262a3b">
          {" "}
          <Image h="11vh" src="calofit-white.png" />{" "}
        </Box>
        <Box
          backgroundImage={"DotPatternLarge.svg"}
        
          bgRepeat={"no-repeat"}
          bgSize="cover"
        >
          <Heading
            m="10"
            fontFamily={"heading"}
            fontWeight={"bold"}
            fontSize={"3xl"}
          >
            Create Your Free Account
          </Heading>
          
  <Flex
   
            margin={"auto"}
            p={"8"}
            maxWidth={"700px"}
            background={"white"}
            // border={"1px solid black"}
            borderRadius={"8"}
            boxShadow= "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
          >
<FormControl>
  <Box display="flex" flexDirection="column">
    <Wrap  mb="4">
        <FormLabel  width={"30%"} >
          <Text fontWeight="semibold" fontSize="lg">First Name</Text>
        </FormLabel>
        <Input  border="1px solid gray" width={"60%"}  type="text" />
    </Wrap>

    <Wrap mb="4">
      <FormLabel  width={"30%"} >
        <Text fontWeight="semibold" fontSize="lg">Email</Text>
      </FormLabel>
      <Input border="1px solid gray" width={"60%"}  type="email" />
    </Wrap>

    <Wrap mb="4">
      <FormLabel  width={"30%"} >
        <Text fontWeight="semibold" fontSize="lg">Password</Text>
      </FormLabel>

      <Input border="1px solid gray" width={"60%"} type="password" />
     
    </Wrap>

    <Wrap>
      <FormLabel width={"30%"} >
        <Text fontWeight="semibold" fontSize="lg">Confirm Password</Text>
      </FormLabel>
      
      <Input border="1px solid gray" width={"60%"}  type="password" />
     
    </Wrap>
  </Box>
</FormControl>

  </Flex>

{/* ------------------ Profile Details ------------------------------------------------------ */}

 <Flex margin={"auto"} p={"8"} mt="8" maxWidth={"700px"} background={"white"} borderRadius={"8"} boxShadow= "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
            <FormControl  >
            <Wrap mb="8" >
              <FormLabel width={"30%"} >
                <Text fontWeight={"semibold"} fontSize={"lg"}  > Gender </Text>
               
              </FormLabel>
            <Stack direction={['column', 'row']} spacing='24px'>
               <Flex width={"25rem"}   >
                <RadioGroup  >
                <Radio mr="4" colorScheme='orange' size={"lg"} value='1'>Male</Radio>
                <Radio colorScheme='orange' size={"lg"} value='2'>Female</Radio>
                </RadioGroup>
            </Flex>
            </Stack>
            </Wrap>
 {/*--------------------------------BirthDay----------------------------------- */}
            <Wrap mb="8">
              <FormLabel  width={"30%"} >
                <Text fontWeight={"semibold"} fontSize={"lg"}  >Birthday</Text>
              </FormLabel>
        <Stack direction={['column', 'row']} spacing='24px'>
           <FormLabel >
            Day
              <Select width={"30"} >
                <option value='option1'>1</option>
                <option value='option2'>2</option>
                <option value='option3'>3</option>
              </Select>
            </FormLabel>
           
            <FormLabel>Month
               <Select width={"30"} >
                <option value='option1'>January</option>
                <option value='option2'>February</option>
                <option value='option3'>March</option>
              </Select>
            </FormLabel>
           
          <FormLabel>Year
              <NumberInput size='md' maxW={32} defaultValue={1999} >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormLabel>
           </Stack>
            </Wrap>
{/* ------------------------------------Height------------------------------------------------------------------ */}
            <Wrap  mb="8" >
              <FormLabel  width={"30%"} >
                <Text fontWeight={"semibold"} fontSize={"lg"}  >Height</Text>
              </FormLabel>
             <Stack direction={['column', 'row']} spacing='24px'>
              <FormLabel >
            ft
              <Select width={"30"} >
                <option value='option1'>4</option>
                <option value='option2'>5</option>
                <option value='option3'>6</option>
              </Select>
            </FormLabel>

            <FormLabel>in
               <Select width={"30"} >
                <option value='option1'>1</option>
                <option value='option2'>2</option>
                <option value='option3'>3</option>
              </Select>
            </FormLabel>
          
          <FormLabel>cm
              <NumberInput size='md' maxW={32} defaultValue={165} >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormLabel>
          </Stack>
            </Wrap>
{/* ------------------------------Weight--------------------------------------------------------- */}

<Wrap>
     <FormLabel width={"30%"}  >
       <Text fontWeight={"semibold"} fontSize={"lg"}  > Weight</Text>
     </FormLabel>
  <Box width={"25rem"} alignItems={"flex-start"} display={"flex"} >
   <NumberInput size='md' maxW={32} defaultValue={45} >
     <NumberInputField />
     <NumberInputStepper>
      <NumberIncrementStepper />
      <NumberDecrementStepper />
     </NumberInputStepper>
     </NumberInput>
          <Text margin={"auto"} textAlign={"center"} fontWeight={"semibold"} >Kilometer</Text>
  </Box>
            
</Wrap>
 </FormControl>
 </Flex>

{/* ------------------------Terms & Conditions-------------------------------------------- */}
<Terms/>

<Button mt="3" mb="3" width={"15rem"} colorScheme="green" >SIGN UP</Button>

<br/>
<br/>

<Box margin={"auto"} >
<Text fontWeight={"semibold"} >Need help?</Text>
<Text fontWeight={"semibold"} color={"orange"} >support@cronometer.com</Text>
</Box>
  </Box>
  </Box>
    </div>
  );
};

export default SignUpPage;
