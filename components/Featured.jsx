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
  const featured = useColorModeValue('#eee', '#333');

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
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={4}
        mt={20}
        w="90%"
        mx="auto"
        alignItems="center"
      >
        <GridItem colSpan={2} rowSpan={2}>
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
