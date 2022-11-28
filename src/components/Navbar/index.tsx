import React from 'react'

import { Box, Button, Flex, Input, InputGroup, InputLeftElement, Spacer, Image,  Avatar, MenuItem, MenuList, MenuButton, Menu, Text } from '@chakra-ui/react'

import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/router';

type Props = {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  openFullscreen: () => void;
}

const Navbar = ({ openFullscreen, isMenuOpen, setIsMenuOpen }: Props) => {
  const router = useRouter()

  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.push("/login");
  }
  return (
    <Flex
      pl='20px'
      pr='20px'
      h="60px"
      minWidth='max-content'
      alignItems='center'
      bg="white">
      <Box display='flex' alignItems="center">
        <Image
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          boxSize='15px'
          src='/hamburger.svg'
          mr="15px"
          cursor='pointer'
        />
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'>
             <Image boxSize='15px' src='/search.svg' />
            </InputLeftElement>
          <Input bg="gray.100" w="70%" borderRadius="20px" variant='ghost' placeholder='Search...' />
        </InputGroup>
      </Box>
      <Spacer />
      <Box display='flex' alignItems="center">
        <Image
          boxSize='15px'
          mr="15px"
          src='/fullscreen.svg'
          cursor='pointer'
          onClick={openFullscreen}
        />
        <Menu closeOnSelect={false}>
          <MenuButton
            as={Button}
            p='0'
            _hover={{ bg: 'none' }}
            _active={{
              bg: 'none'
            }}
            leftIcon={<Avatar size='sm' src={user && user.image} />}
            rightIcon={<Image
              boxSize='10px'
              src='/arrowBottom.svg'
              cursor='pointer'
            />}
            aria-label='Options'
            variant='ghost'
          >
            <Text fontWeight="400" display={{ base: "none", md: "block" }}>{user && user.name}</Text>
          </MenuButton>
          <MenuList>
            <MenuItem onClick={handleLogout}>
              <Image
                boxSize='1rem'
                borderRadius='full'
                src='/onOff.svg'
                mr='12px'
              />
              <span>Logout</span>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex >
  )
}

export default Navbar