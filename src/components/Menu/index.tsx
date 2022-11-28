import { Box, Flex, Text, Image } from '@chakra-ui/react'
import React from 'react'

type Props = {
  isMenuOpen: boolean;
}
const Menu = ({ isMenuOpen }: Props) => {
  return (
    
    <Flex 
      minHeight="full"
      minWidth={`${isMenuOpen ? '15rem' : '5rem'}`}
      bg="#2a3042"
      display={{ base: 'none', md: 'block' }}
      >
      {
        isMenuOpen ?
          <Flex
            pt="3rem"
            display="flex"
            flexDirection="column"
            pl="0.5rem"
          >
            <Text mb="1rem" fontSize='lg' color="#5f667c">Menu</Text>
            <Box>
              <Flex >
                <Image boxSize='20px' mr="1" src='/house.svg' />
                <Text fontSize='lg' color="#FFFFFF">
                  Dashboard
                </Text>
              </Flex>
            </Box>
          </Flex> :
          <Flex
            w="100%"
            pt="1.5rem"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Image boxSize='25px' mr="1" src='/house.svg' />
          </Flex>
      }
    </Flex>
  )
}

export default Menu