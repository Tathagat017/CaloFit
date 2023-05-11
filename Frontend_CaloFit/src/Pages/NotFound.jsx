import React from 'react'
import NavbarSignUp from '../Components/LoginPage_Components/NavbarSignUp'
import Footer from '../Components/Footer/Footer'
import { Box, Center, Image } from '@chakra-ui/react'

const NotFound = () => {
  return (
    <div>
  <NavbarSignUp/>
  <Center >
  <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_ghfpce1h.json"  background="transparent"  speed="1"  style={{width: "300px", height: "300px"}}  loop  autoplay></lottie-player>
  </Center>
  <Footer/>
    </div>
  )
}

export default NotFound