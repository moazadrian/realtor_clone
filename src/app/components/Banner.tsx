import { Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

const Banner = ({purpose, imageURL}) => {
  return (
    <Flex flexWrap="wrap" justifyContent='center' alignItems='center' m='10'>
        <Image src={imageURL} width={500} height={300} alt='Banner'/>
        <Box p='5'>
            <Text color='gray.500' fontSize='sm' fontWeight='medium'>{purpose}</Text>
            <Text fontSize="3xl" fontWeight='bold'>{title1}<br />{title2}</Text>
            <Text fontSize='lg' paddingTop='3' color='gray.700'>{desc1}</Text>
            <Button fontSize='xl'>

            </Button>
        </Box>
    </Flex>
  )
}

export default Banner