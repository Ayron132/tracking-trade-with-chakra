import React, { useState, useMemo } from 'react'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  InputGroup,
  Input,
  InputLeftElement,
  Image,
  Flex
} from '@chakra-ui/react'

import Store from './Store';

type Props = {
  data: [
    {
      name: string;
      pictureUrl: string;
    }
  ]
}
const AllMarketplaces = ({ data }: Props) => {

  const [selectedList, setSelectedList] = useState<Array<{ name: string }>>([{
    name: ""
  }]);

  const [searchValue, setSearchValue] = useState("");

  const filtered = useMemo(() => {
    const lowerSearch = searchValue.toLowerCase();
    return data.filter((item) => item.name.toLowerCase().includes(lowerSearch))
  }, [searchValue, data])
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button fontWeight="400" w="100%" colorScheme='messenger' onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontWeight="400">Marketplaces</ModalHeader>
          <ModalCloseButton />
          <ModalBody borderTop="1px solid #C8C8C8">
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'>
                <Image boxSize='15px' src='/search.svg' />
              </InputLeftElement>
              <Input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                bg="#ffffff"
                w="100%"
                borderRadius="20px"
                placeholder='Search...' />
            </InputGroup>
            <Flex
              height="70vh"
              marginTop="1.5rem"
              boxSizing="border-box"
              flexDirection="column"
              overflowY="auto"
              overflowX="hidden"
              sx={{
                "::-webkit-scrollbar": {
                  width: "5px"
                },
                "::-webkit-scrollbar-thumb": {
                  bg: "#76798E",
                  borderRadius: "20px"
                }
              }}
            >
              {filtered && filtered.map((item, index) => (
                <Store key={index} setSelectedList={setSelectedList} selectedList={selectedList} item={item} />
              ))}
            </Flex>
          </ModalBody>
          <ModalFooter borderTop="1px solid #C8C8C8">
            <Button colorScheme='blue' bg="#6c757d" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='messenger'>Confirm</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AllMarketplaces