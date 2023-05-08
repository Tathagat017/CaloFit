import { Box, Checkbox, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Terms = () => {
  return (
    <div>
      <Box  margin={"auto"} p={"14"} mt="8" maxWidth={"700px"} background={"white"} borderRadius={"8"} boxShadow= "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
    <Box>
     <Heading margin={"auto"}  size={"md"} >Terms of Service & Privacy Settings</Heading>
    </Box>
     <br/>
    <Box
  borderRadius="8px"
  padding="16px"
>
  <Checkbox
    size="lg"
    colorScheme="orange"
    mb="16px"
  >
    By checking the box below you are indicating you have read and agree to our Terms of Service and Privacy Policy.
  </Checkbox>
  <Checkbox
    size="lg"
    colorScheme="orange"
    mb="16px"
  >
    I agree to the Cronometer Terms of Service and Privacy Policy.
  </Checkbox>
  <Checkbox
    size="lg"
    colorScheme="orange"
  >
    In order to give you the best experience using Cronometer, we need certain data permissions. (These are optional and can be updated in your settings any time.)
  </Checkbox>
</Box>
      </Box>
    </div>
  )
}

export default Terms