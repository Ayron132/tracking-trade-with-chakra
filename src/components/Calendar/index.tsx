import { Flex, Image, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import YearPagination from './YearPagination';


type Props = {
  currentDate: {
    year: string
    month: string
    day: string
  }
  setCurrentDate: (
    currentDate: {
      year: string
      month: string
      day: string
    }) => void;
};
type Day = string | number | null;

const Calendar = ({ currentDate, setCurrentDate }: Props) => {
  const [selectedYear, setSelectedYear] = useState(parseInt(currentDate.year));
  const [selectedMonth, setSelectedMonth] = useState(parseInt(currentDate.month) - 1);
  const [selectedDay, setSelectedDay] = useState<Day>(parseInt(currentDate.day));

  const [activeYear, setActiveYear] = useState(false);

  const days = ["Sun", "Mun", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


  const getFebDays = (year: number) => {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
      return 28;
    }
    return 27;
  }
  const [daysOfMonth, setDaysOfMonth] = useState([
    30,
    getFebDays(selectedYear),
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
  const [monthDays, setMonthDays] = useState<(Day)[]>()
  useEffect(() => {
    let startDay = new Date(selectedYear, selectedMonth);
    let cont = 1;
    let tempDays = [];
    for (let i = 0; i < daysOfMonth[selectedMonth] + startDay.getDay() + 1; i++) {
      if (i >= startDay.getDay()) {
        tempDays.push(cont);
        cont++;
      } else {
        tempDays.push(null);
      }
    }
    setMonthDays(tempDays);

  }, [selectedMonth, selectedYear, selectedDay])

  const changeMonth = (type: string) => {
    setSelectedDay("");
    if (type === "next") {
      if (selectedMonth === 11) {
        setSelectedMonth(0)
        if (0 === parseInt(currentDate.month) - 1) {
          setSelectedDay(parseInt(currentDate.day));
        }
      } else {
        setSelectedMonth(selectedMonth + 1);
        if (selectedMonth + 1 === parseInt(currentDate.month) - 1) {
          setSelectedDay(parseInt(currentDate.day));
        }
      }
      return;
    }
    if (selectedMonth === 0) {
      setSelectedMonth(11)
      if (11 === parseInt(currentDate.month) - 1) {
        setSelectedDay(parseInt(currentDate.day));
      }
    } else {
      setSelectedMonth(selectedMonth - 1);
      if (selectedMonth - 1 === parseInt(currentDate.month) - 1) {
        setSelectedDay(parseInt(currentDate.day));
      }
    }

  }

  const saveDate = (day: Day) => {
    if (day == null) {
      return
    }
    setSelectedDay(day);
    setCurrentDate({
      year: `${selectedYear}`,
      month: selectedMonth + 1 >= 10 ? `${selectedMonth + 1}` : `0${selectedMonth + 1}`,
      day: day != null && day >= 10 ? `${day}` : `0${day}`,
    })
  }

  return (
    <Flex
      w="15rem"
      flexDirection="column"
      h={`${activeYear ? "18rem" : "15rem"}`}
    >
      <Flex
        w="100%"
        h={`${activeYear ? '6.75rem' : '3.75rem'}`}
        display="flex"
        flexDirection="column"
        pl="10px"
        pr="10px"
        bg="#2b72e8"
      >
        <Flex
          width="100%"
          height="60%"
          alignItems="center"
          justifyContent="space-between"
        >
          <Image w="15px"
            h="15px"
            cursor="pointer"
            onClick={() => changeMonth("prev")}
            src="arrow.svg" />

          <Text color="#fff">{months[selectedMonth]}</Text>
          <Text onClick={() => setActiveYear(!activeYear)} color="#fff" display="flex" alignItems="center" cursor="pointer">
            <Image w="10px" h="10px" mr="5px" src="arrowBottomWhite.svg" transform={`rotate(${activeYear ? '180deg' : '0deg'})`} />
            {selectedYear}
          </Text>
          <Image w="15px"
            h="15px"
            cursor="pointer"
            transform="rotate(180deg)"
            onClick={() => changeMonth("next")}
            src="arrow.svg" />
        </Flex>
        {activeYear &&
          <Flex h="50px">
            <YearPagination getFebDays={getFebDays}
              setDaysOfMonth={setDaysOfMonth}
              selectedYear={selectedYear}
              setSelectedYear={setSelectedYear}
            />
          </Flex>
        }
        <Flex
          width="100%"
          height="40%"
          alignItems="center"
          justifyContent="space-between"
        >
          {days && days.map((day, index) => (
            <Flex
              alignItems="center"
              color="#fff"
              key={index}>{day}</Flex>
          ))}
        </Flex>
      </Flex>
      <Flex
        display="grid"
        gridTemplateColumns="25px 25px 25px 25px 25px 25px 25px"
        gridTemplateRows="25px 25px 25px 25px 25px 25px"
        alignItems="center"
        justifyContent="space-between"
        p="10px"
        width="100%"
        height="11.25rem"
      >
        {monthDays && monthDays.map((day, index) => (
          day === selectedDay ?
            <Text
              display="flex"
              width="100%"
              height="100%"
              alignItems="center"
              justifyContent="center"
              cursor="pointer"
              bg="#2b72e8"
              fontSize="0.8rem"
              borderRadius="50%"
              color="#fff"
              fontWeight="400"
              key={index}>{day}</Text>
            :
            <Text
              display="flex"
              width="100%"
              height="100%"
              fontSize="0.8rem"
              alignItems="center"
              justifyContent="center"
              fontWeight="400"
              cursor="pointer"
              _hover={{ bg: "#387AE7", borderRadius: "50%", color: "#fff" }}
              onClick={() => saveDate(day)} key={index}>{day}</Text>
        ))}
      </Flex>
    </Flex >
  )
}

export default Calendar