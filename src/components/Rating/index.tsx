import { Flex, Image } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react'

type Props = {
  value: number;
}

const Rating = ({ value }: Props) => {
  const [hasValue, setHasValue] = useState(false);

  const [star, setStar] = useState({
    stars: [false, false, false, false, false],
  })

  useEffect(() => {
    let newStars = star;
    if (value >= 0) {
      for (var i = 0; i < value; i++) {
        newStars.stars[i] = true;
      }
      setHasValue(true);
    }
  }, [value])
  return (
    <Flex
      alignItems="center"
      ml="0.3rem"
      mr="0.3rem"
    >
      {hasValue && star.stars.map((star, index) =>
        <Image w="1rem" h="1rem" key={index} src={star ? '/star.svg' : '/starOff.svg'} />
      )}
    </Flex>
  )
}

export default Rating