import React, { useState } from 'react'

import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';
import {
  Flex,
  HStack,
  Image,
  FormLabel,
  Input,
  Box,
  Button,
  Text,
  FormErrorMessage,
  FormHelperText,
  Alert
} from '@chakra-ui/react';

type Props = {}

const Login = (props: Props) => {
  const [invalidCredentials, setInvalidCredentials] = useState(false);

  const [noEmail, setNoEmail] = useState(false);
  const [noPassword, setNoPassword] = useState(false);

  const { user, login } = useAuth();
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const router = useRouter()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setInvalidCredentials(false);
    if (data.email === '') {
      setNoEmail(true)
    } else {
      setNoEmail(false)
    }
    if (data.password === '') {
      setNoPassword(true)
    } else {
      setNoPassword(false)
    }
    if (data.email !== '' && data.password !== '') {
      try {
        await login(data.email, data.password)
        setInvalidCredentials(false)
        router.push("/")

      } catch (error) {
        setInvalidCredentials(true)
        console.log(error)
      }
      return
    }
  }
  return (
    <HStack spacing={0} w="full" h="100vh" display="flex" flexDirection={{ base: 'column', md: 'row' }}>
      <Flex w={{ base: '100%', md: '50%' }} h={{ base: '20%', md: 'full' }} >
        <Image
          objectFit="cover"
          w="100%"
          h="full"
          src="/bird.jpg"
        />
      </Flex>
      <Flex
        w={{ base: '100%', md: '50%' }}
        h={{ base: '80%', md: 'full' }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box w={{ base: '80%', md: '50%' }}>

          <Text mb="3" fontSize='2xl' color='#387AE7'>Log In</Text>
          {invalidCredentials &&
            <Alert status='error'>
              Invalid Credentials
            </Alert>
          }
          <form
            onSubmit={handleSubmit}
          >
            <FormLabel mt="2" htmlFor="inputEmail">Email address</FormLabel>
            <Input
              type='email'
              placeholder='Enter email'
              id="inputEmail"
              onChange={(e: any) => setData({ ...data, email: e.target.value })}
              value={data.email}
            />
            {noEmail &&
              <Text mt="2" color="#E53E3E">Email required.</Text>
            }
            <FormLabel mt="5" htmlFor="inputPassword">Email address</FormLabel>
            <Input
              type='password'
              id="inputPassword"
              placeholder='Enter password'
              onChange={(e: any) => setData({ ...data, password: e.target.value })}
              value={data.password}
            />
            {noPassword &&
              <Text mt="2" color="#E53E3E">Password required.</Text>
            }
            <Button w="100%" mt="5" type="submit" bg='#387AE7'>Log In</Button>
          </form>
        </Box>
      </Flex>
    </HStack>
  )
}

export default Login;