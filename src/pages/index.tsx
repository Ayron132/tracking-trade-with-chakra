import React, { useState, useEffect } from 'react';

import { Grid, GridItem, Flex } from '@chakra-ui/react'
import Menu from '../components/Menu'
import Navbar from '../components/Navbar'

import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';
import Product from '../components/Product';
import MarketplaceList from '../components/MarketplaceList';
import Options from '../components/Options';
import Graphics from '../components/Graphics';

export default function Home() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [loading, setLoading] = useState(true);

  const router = useRouter()

  const { user } = useAuth();
  useEffect(() => {
    if (!user) {
      router.replace('/login');
      return;
    }
    setLoading(false);
  }, [])

  const containerRef = React.useRef<HTMLDivElement>(null);

  const openFullscreen = () => {
    if (fullscreen) {
      document.exitFullscreen();
      setFullscreen(false);
      return;
    }
    if (containerRef.current) {
      containerRef.current.requestFullscreen();
      setFullscreen(true);
      return;
    }
  }

  return (
    <>
      {
        loading ? <p>Loading...</p> :
          <Flex 
            ref={containerRef}
          >

            <Menu isMenuOpen={isMenuOpen} />
            <Flex
              flexDirection="column"
              h="full"
              bg="#f6f6f9"
            >
              <Navbar openFullscreen={openFullscreen} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

              <Flex p="15px"
                boxSize="border-box"
                flexDirection={{ base: 'column', md: 'row' }}
                >
                <Flex
                  w={{ base: '100%', md: '30%' }}
                  flexDirection="column"
                  marginRight="15px" 
                  marginBottom={{ base: '15px', md: '0px' }}
                >
                  <Product />
                  <MarketplaceList />
                </Flex>
                <Flex
                  w={{ base: '100%', md: '70%' }}
                  flexDirection="column"
                  h="full"
                >
                  <Options />
                  <Graphics />
                </Flex>
              </Flex>
            </Flex>
          </Flex>
      }
    </>
  )
}
