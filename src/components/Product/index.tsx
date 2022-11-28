import { Flex, Text, Image, Tooltip } from '@chakra-ui/react';
import React from 'react'

import { useAuth } from '../../context/AuthContext';
import Rating from '../Rating';

type Props = {}

const Product = (props: Props) => {
  const { queryProducts } = useAuth();
  return (
    <Flex
      overflow="hidden"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      position="relative"
      width="100%"
      height="18rem"
      borderRadius="8px"
      mb="15px"
    >
      <Flex
        width="100%"
        height="50%"
        bg="#2360c3"
        padding="10px"
        flexDirection="column"
      >
        <Text fontSize="0.9rem" color="#FFFFFF">{queryProducts && queryProducts.name}</Text>
        <Text fontSize="0.8em" color="#FFFFFF" fontWeight="400">{queryProducts && queryProducts.brand}</Text>
        <Text fontSize="0.8em" color="#FFFFFF" fontWeight="400">RRP: R$ {queryProducts && queryProducts.price.toLocaleString()}</Text>
      </Flex>
      <Flex
        width="100%"
        height="50%"
        bg="#FFFFFF"
        padding="10px"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <Flex
          alignItems="center"
        >
          <Text fontSize="0.8rem" color="#000000" fontWeight="400">Ranking: </Text>
          <Rating value={queryProducts && queryProducts.ranking} />
          <Tooltip label='Lorem' fontSize='md'>
            <Image cursor="pointer" h="1rem" w="1rem" src='/about.svg' />
          </Tooltip>
        </Flex>
        <Flex>
          <Text fontSize="0.8rem" color="#000000" fontWeight="400">Last scraping: {queryProducts && queryProducts.lastScraping}</Text>
        </Flex>
      </Flex>
      <Image
        w="5rem"
        h="5rem"
        padding={1}
        borderRadius="8px"
        backgroundColor="#FFF"
        position="absolute"
        ml="10px"
        src={queryProducts && queryProducts.pictureUrl}
      />
    </Flex>
  )
}

export default Product