import { Checkbox, Flex, Image } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react'

type Props = {
  item: {
    name: string;
    pictureUrl: string;
  };
  selectedList: Array<{
    name: string;
  }>;
  setSelectedList: (list: Array<{
    name: string;
  }>) => void;
}

const Store = ({ item, setSelectedList, selectedList }: Props) => {
  const [isChecked, setIsChecked] = useState(false);

  const filterList = (list: { name: string }[], name: string) => {
    let newList = list.filter((item: { name: any; }) => (
      item.name !== name
    ))
    return newList
  }

  useEffect(() => {
    let List = selectedList.filter((object) => (
      object.name === item.name
    ))
    if (List.length >= 1) {
      setIsChecked(true)
    }
  }, [item.name, selectedList])

  const handleCheck = (e: { target: { name: any; checked: any; }; }) => {
    const name = e.target.name
    if (e.target.checked) {
      setIsChecked(!isChecked)
      setSelectedList([...selectedList, { name: name }])
    } else {
      setIsChecked(!isChecked)
      setSelectedList(filterList(selectedList, name))
    }
  }

  return (
    <Flex
      p="20px 5px 20px 5px"

      borderTop="1px solid #C8C8C8"
      _last={{ borderBottom: "1px solid #C8C8C8" }}
    >
      <Checkbox w="100%" onChange={handleCheck} isChecked={isChecked} name={item.name} id={item.name} >
        <Flex>
          <Flex 
          w="3rem" 
          h="3rem" 
          marginRight="20px"
          backgroundImage={`url(${item.pictureUrl})`}
          backgroundPosition="center center"
          backgroundSize="cover"
           />
          {item.name}
        </Flex>
      </Checkbox>
    </Flex>
  )
}

export default Store