import { Flex } from '@chakra-ui/react';
import React from 'react'

import { useAuth } from '../../context/AuthContext';
import Presence from './Presence';
import Price from './Price';
import Temperature from './Temperature';

type Props = {}

const Graphics = (props: Props) => {

  const { price, temperature } = useAuth();

  return (
    <Flex
      display="grid"
      gap="15px"
      gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
      alignItems="center"
    >
      <Price data={price} />
      <Price data={price} />
      <Temperature data={temperature} />
      <Temperature data={temperature} />
      <Presence />
      <Presence />
    </Flex>
  )
}

export default Graphics