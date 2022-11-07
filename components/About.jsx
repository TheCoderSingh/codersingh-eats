import { Box, Button, Grid, GridItem, Text } from '@chakra-ui/react';
import Image from 'next/image';

import Restaurant from '../assets/restaurant.jpg';
import Team from '../assets/team.jpg';

const About = () => (
  <Grid
    gridTemplateRows="repeat(2, 1fr)"
    gridTemplateColumns="1fr 3fr 3fr 1fr"
    textTransform="uppercase"
  >
    <GridItem rowSpan={2} alignSelf="center">
      <Text transform="rotate(-90deg)" fontSize="2.8em">
        About Us
      </Text>
    </GridItem>
    <GridItem maxH="350px" overflow="hidden">
      <Image src={Restaurant} alt="Restaurant" />
    </GridItem>
    <GridItem textAlign="center" alignSelf="center">
      <Box h="100%">
        <Text fontSize="1.2em">
          Excellent Opportunities | Competitive Pay | Amazing Benefits
        </Text>
        <Button textTransform="uppercase" borderRadius="none" w="80%" mt={5}>
          Join Our Team
        </Button>
      </Box>
    </GridItem>
    <GridItem />
    <Box h="100%" pt={5}>
      <Text textTransform="capitalize">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
        architecto aliquid exercitationem dolor expedita animi repellendus
        numquam, minus dolores saepe dolore unde natus asperiores eaque,
        deserunt aperiam tenetur voluptas totam!
      </Text>
    </Box>
    <GridItem maxH="350px" overflow="hidden">
      <Image src={Team} alt="Restaurant" />
    </GridItem>
    <GridItem textAlign="center">
      <Text transform="rotate(90deg)" fontSize="3em">
        Join Our Team
      </Text>
    </GridItem>
  </Grid>
);

export default About;
