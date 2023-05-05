import React from 'react'
import Footer from '../Components/Footer/Footer'
import { Box } from '@chakra-ui/react'
import HomePageData from './HomePageData'

const HomePage = () => {
  return (
    <div>
    <Box>
        <HomePageData/>
        <Footer/>
    </Box>
    </div>
  )
}

export default HomePage