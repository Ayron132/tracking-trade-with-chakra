import {
  Flex,
  Text,
  Tooltip,
  Image,
  Select,
  MenuList,
  MenuButton,
  Button,
  Menu,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import Calendar from '../Calendar';

type Props = {
  name: string;
  presence: number;
  ip: number | string;
  ipRRP: number;
  sp: number | string;
  spRRP: number;
  view: string;
}

const MarketplaceList = () => {
  const { marketplaceList } = useAuth();

  const data = marketplaceList.list

  const date = marketplaceList.date.split("-");

  const [currentDate, setCurrentDate] = useState(
    {
      year: date[0],
      month: date[1],
      day: date[2],
    });

  return (
    <Flex
      w={{ base:"100vw", md: "full" }}
      height="full"
      bg="#ffffff"
      borderRadius="8px"
      p="20px"
    >
      <Flex
        width="100%"
        height="100%"
        display="flex"
        flexDirection="column"
      >
        <Flex
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          alignItems={{ base: "stretch", md: "center" }}
          justifyContent={{ base: "flex-start", md: "space-between" }}
        >
          <Flex alignItems="center">
            <Text fontWeight="400" fontSize='xl'>Offer</Text>
            <Tooltip label='Lorem' fontSize='md'>
              <Image ml="5px" cursor="pointer" h="1rem" w="1rem" src='/about.svg' />
            </Tooltip>
          </Flex>
          <Flex>
            <Flex
              flexDirection="column"
              marginRight="10px"
            >
              <Text fontWeight="400" fontSize='md'>Date</Text>
              <Menu>
                <MenuButton as={Button}
                  fontWeight="400"
                  color="#ffffff"
                  bg="#387AE7"
                  _hover={{ bg: "#387AE7" }}
                  _active={{
                    bg: "#387AE7"
                  }}>
                  {`${currentDate.year}-${currentDate.month}-${currentDate.day}`}
                </MenuButton>
                <MenuList p="0" overflow="hidden">
                  <Calendar currentDate={currentDate} setCurrentDate={setCurrentDate} />
                </MenuList>
              </Menu>
            </Flex>
            <Flex flexDirection="column">
              <Text fontWeight="400" fontSize='md'>Price</Text>
              <Select border="none" color="#ffffff" bg="#387AE7">
                <option style={{ color: '#000' }} value='option1'>Made</option>
                <option style={{ color: '#000' }} value='option2'>Minimum</option>
                <option style={{ color: '#000' }} value='option3'>Maximum</option>
              </Select>
            </Flex>
          </Flex>
        </Flex>
        <Flex
        >
          <TableContainer
            overflow="auto"
            mt="20px"
            sx={{
              "::-webkit-scrollbar": {
                height: "5px"
              },
              "::-webkit-scrollbar-thumb": {
                bg: "#76798E",
                borderRadius: "20px"
              }
            }}>
            <Table
             
              variant='simple'>
              <Thead>
                <Tr>
                  <Th isNumeric>Marketplace</Th>
                  <Th isNumeric>Presence</Th>
                  <Th isNumeric>SP (R$)</Th>
                  <Th isNumeric>%RRP</Th>
                  <Th isNumeric>IP (R$)</Th>
                  <Th isNumeric>%RRP</Th>
                  <Th isNumeric>View</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data && data.map((item: Props, index: number) => (
                  <Tr key={index}>
                    <Td>
                      <Flex w="100%" justifyContent="center" fontSize='sm' fontWeight="400">{item.name}</Flex>
                    </Td>
                    <Td>
                      <Flex w="100%" justifyContent="center" fontSize='sm' fontWeight="400">{`${item.presence}%`}</Flex>
                    </Td>
                    <Td>
                      <Flex w="100%" justifyContent="center" fontSize='sm' fontWeight="400">{item.sp.toLocaleString()}</Flex>
                    </Td>
                    <Td>
                      <Flex w="140%" justifyContent="center" fontSize='sm'  bg={`rgba(255, 99, 71,${(item.spRRP / 100)})`} borderRadius="8px">{`${item.spRRP}%`}</Flex>
                    </Td>
                    <Td>
                      <Flex w="100%" justifyContent="center" fontSize='sm' fontWeight="400">{item.ip.toLocaleString()}</Flex>
                    </Td>
                    <Td>
                      <Flex w="140%" justifyContent="center" fontSize='sm'  bg={`rgba(255, 99, 71,${(item.ipRRP / 100)})`} borderRadius="8px">{`${item.ipRRP}%`}</Flex>
                    </Td>
                    <Td>
                      <Text>
                        {item.view ?
                          <a href='https://www.google.com.br'><Image w="1.2rem" h="1.2rem" src='/launch.svg' /></a>
                          :
                          <Image w="1.2rem" h="1.2rem" src='/noLink.svg' />
                        }
                      </Text>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
      </Flex>
    </Flex >
  )
}

export default MarketplaceList