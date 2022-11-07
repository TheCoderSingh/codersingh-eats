import {
  Flex,
  Grid,
  GridItem,
  Heading,
  useColorModeValue
} from '@chakra-ui/react';
import Image from 'next/image';

import Burger from '../assets/burger.jpg';
import Meat from '../assets/meat.jpg';
import Noodles from '../assets/noodles.jpg';
import Pizza from '../assets/pizza.jpg';
import Breakfast from '../assets/breakfast.jpg';

const Featured = () => {
  const featured = useColorModeValue('#eee', '#1a202c');

  return (
    <Flex
      textAlign="center"
      pt={10}
      bg={featured}
      minH="100vh"
      flexDir="column"
      justifyContent="center"
    >
      <Heading textTransform="uppercase">Featured Faves</Heading>
      <Grid
        templateRows={{ lg: 'repeat(2, 1fr)' }}
        templateColumns={{ lg: 'repeat(4, 1fr)' }}
        gap={4}
        mt={20}
        w="90%"
        mx="auto"
        alignItems="center"
        mb={{ base: 20, lg: null }}
      >
        <GridItem colSpan={{ lg: 2 }} rowSpan={{ lg: 2 }}>
          <Image src={Burger} alt="Burger" />
        </GridItem>
        <GridItem overflow="hidden">
          <Image src={Meat} alt="Meat" />
        </GridItem>
        <GridItem overflow="hidden">
          <Image src={Noodles} alt="Noodles" />
        </GridItem>
        <GridItem overflow="hidden">
          <Image src={Pizza} alt="Pizza" />
        </GridItem>
        <GridItem overflow="hidden">
          <Image src={Breakfast} alt="Breakfast" />
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default Featured;
