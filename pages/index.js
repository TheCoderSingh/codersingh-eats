import Image from 'next/image';
import { Box, Button, Flex, Text } from '@chakra-ui/react';

import Food from '../assets/foodbg.jpg';

const Home = () => (
  <Box>
    <Box position="relative" height="calc(100vh - 70px)" overflow="hidden">
      <Image src={Food} alt="Food Background" />

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
        <Text fontSize="2em" color="#fff">
          Welcome to
        </Text>
        <Text fontSize="4em" color="#fff" fontWeight="bold">
          The CoderSingh Eats
        </Text>
        <Flex gap={4}>
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
  </Box>
);
export default Home;
