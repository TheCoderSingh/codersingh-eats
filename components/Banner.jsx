import Image from 'next/image';
import { Box, Button, Flex, Text } from '@chakra-ui/react';

import Food from '../assets/foodbg.jpg';

const Banner = () => (
  <Box position="relative" height="calc(100vh - 70px)" overflow="hidden">
    <Image
      src={Food}
      alt="Food Background"
      style={{ objectFit: 'cover', height: '100%' }}
    />

    <Flex
      background="rgba(51, 51, 51, 0.85)"
      position="absolute"
      height="100vh"
      width="100vw"
      top={0}
      left={0}
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      textTransform="uppercase"
    >
      <Text fontSize={['0.8em', '1.2em', '1.7em', '2em']} color="#fff">
        Welcome to
      </Text>
      <Text
        fontSize={['2em', '2.5em', '3.5em', '4em']}
        color="#fff"
        fontWeight="bold"
      >
        The CoderSingh Eats
      </Text>
      <Flex
        gap={4}
        direction={{ base: 'column', md: 'row' }}
        mt={2}
        w={{ base: '60%', sm: '60%', md: 'unset' }}
      >
        <Button borderRadius="0" textTransform="uppercase">
          Menu
        </Button>
        <Button borderRadius="0" textTransform="uppercase">
          Book a Table
        </Button>
        <Button borderRadius="0" textTransform="uppercase">
          Order Takeout
        </Button>
      </Flex>
    </Flex>
  </Box>
);

export default Banner;
