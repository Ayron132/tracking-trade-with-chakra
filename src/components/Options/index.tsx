import React, { useState } from 'react'

import Calendar from '../Calendar'
import { useAuth } from '../../context/AuthContext'
import { Box, Button, ButtonGroup, Flex, Menu, MenuButton, MenuList, SimpleGrid, Text } from '@chakra-ui/react'
import AllMarketplaces from '../AllMarketplaces'

type Props = {}

const Options = (props: Props) => {

  const [currentDate, setCurrentDate] = useState({
    year: "2022",
    month: "01",
    day: "06",
  })

  const { marketplaces } = useAuth();

  return (
    <Flex
      w="100%"
      minHeight="20%"
      bg="#ffffff"
      borderRadius="8px"
      alignItems="center"
      p="1.5rem"
      mb="15px"
    >
      <SimpleGrid columns={[1, 2, 2, 4]} w="100%" spacing="20px">
        <Box>
          <Text mb="10px" fontWeight="400" fontSize='md'>Period</Text>
          <ButtonGroup w="100%" isAttached>
            <Button fontWeight="400" colorScheme='messenger' w="100%" isActive>Hour</Button>
            <Button fontWeight="400" colorScheme='messenger' w="100%">Day</Button>
            <Button fontWeight="400" colorScheme='messenger' w="100%">Week</Button>
          </ButtonGroup>
        </Box>
        <Box>
          <Text mb="10px" fontWeight="400" fontSize='md'>Date</Text>
          <Menu>
            <MenuButton as={Button}
              w="100%"
              fontWeight="400"
              colorScheme='messenger'>
              {`${currentDate.year}-${currentDate.month}-${currentDate.day}`}
            </MenuButton>
            <MenuList p="0" overflow="hidden">
              <Calendar currentDate={currentDate} setCurrentDate={setCurrentDate} />
            </MenuList>
          </Menu>
        </Box>
        <Box>
          <Text mb="10px" fontWeight="400" fontSize='md'>Form of payment</Text>
          <ButtonGroup w="100%" isAttached>
            <Button fontWeight="400" colorScheme='messenger' w="100%" isActive>Spot Price</Button>
            <Button fontWeight="400" colorScheme='messenger' w="100%">Installment Price</Button>
          </ButtonGroup>
        </Box>
        <Box>
          <Text mb="10px" fontWeight="400" fontSize='md'>Marketplaces</Text>
          <AllMarketplaces data={marketplaces.marketpalces}/>
        </Box>
      </SimpleGrid>
    </Flex>
  )
}

export default Options