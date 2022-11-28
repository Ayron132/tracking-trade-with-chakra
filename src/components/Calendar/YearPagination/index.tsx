import { Flex, Image, Text } from '@chakra-ui/react';
import React from 'react'

type Props = {
  selectedYear: number
  setSelectedYear: (year: number) => void;
  setDaysOfMonth: (year: number[]) => void;
  getFebDays: (year: number) => number
}
const YearPagination = ({ getFebDays, selectedYear, setSelectedYear, setDaysOfMonth }: Props) => {
  const numberOfYears = 10000;
  const MAX_ITEMS = 5;
  const maxLeft = (MAX_ITEMS - 1) / 2;

  const current = selectedYear - 1

  const handleYear = (year: number) => {
    setDaysOfMonth([
      30,
      getFebDays(year),
      30,
      29,
      30,
      29,
      30,
      30,
      29,
      30,
      29,
      30
    ])
    console.log(getFebDays(year))
    setSelectedYear(year)
  }

  const maxFirst = Math.max(numberOfYears - (MAX_ITEMS - 1), 1);
  const first = Math.min(
    Math.max(current - (maxLeft - 1), 1),
    maxFirst
  );
  return (
    <Flex
      w="100%"
      h="100%"
      alignItems="center"
      justifyContent="center"
    >
      <Image w="15px"
        h="15px"
        cursor="pointer"
        onClick={() => handleYear(selectedYear - 1)}
        src="arrow.svg" />
      {Array.from({ length: Math.min(MAX_ITEMS, numberOfYears) })
        .map((_, index) => index + first)
        .map((year) => (
          <Text 
            color="#fff"
            fontSize={`${current === (year - 1) ? '1rem' : '0.7rem'}`}
            _hover={{ fontSize: "1rem" }}
            cursor="pointer"
            marginRight="10px"
            onClick={() => handleYear((year))}
            _first={{ marginLeft: "10px" }}
            key={year}>
            {year}
          </Text>
        ))
      }
      <Text

      ></Text>
      <Image w="15px"
        h="15px"
        cursor="pointer"
        transform="rotate(180deg)"
        onClick={() => handleYear((selectedYear + 1))}
        src="arrow.svg" />
    </Flex>
  )
}

export default YearPagination