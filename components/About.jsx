import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useMediaQuery
} from '@chakra-ui/react';
import Image from 'next/image';

import Restaurant from '../assets/restaurant.jpg';
import Team from '../assets/team.jpg';

const About = () => {
  const [isScreenMedium] = useMediaQuery('(max-width: 991px)');

  return (
    <Box w="90%" mx="auto">
      {isScreenMedium ? (
        <Box textAlign="center" textTransform="uppercase" pb={15}>
          <Heading>About Us</Heading>
        </Box>
      ) : null}
      <Flex
        textTransform="uppercase"
        alignItems="center"
        gap={5}
        flexDir={{ base: 'column', lg: 'row' }}
      >
        {isScreenMedium ? null : (
          <Box>
            <Text
              transform="rotate(-90deg)"
              fontSize="4em"
              whiteSpace="nowrap"
              w="100px"
            >
              About Us
            </Text>
          </Box>
        )}

        <Flex flexDir="column" w="100%">
          <Box>
            <Image src={Restaurant} alt="Restaurant" />
          </Box>
          <Box height={{ lg: '250px', xl: '400px' }}>
            <Text textTransform="capitalize" pt={5}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
              architecto aliquid exercitationem dolor expedita animi repellendus
              numquam, minus dolores saepe dolore unde natus asperiores eaque,
              deserunt aperiam tenetur voluptas totam!
            </Text>
          </Box>
        </Flex>
        <Flex
          flexDir={{ base: 'column-reverse', lg: 'column' }}
          w="100%"
          textAlign="center"
        >
          <Flex
            height={{ lg: '250px', xl: '335px' }}
            flexDir="column"
            justifyContent="center"
          >
            <Box pt={{ base: 10, lg: null }}>
              <Text fontSize={{ lg: '1.2em' }}>
                Exciting Opportunities | Competitive Pay | Amazing Benefits
              </Text>
            </Box>
            <Box>
              <Button textTransform="uppercase" borderRadius="none" mt={5}>
                Join Our Team
              </Button>
            </Box>
          </Flex>
          <Box>
            <Image src={Team} alt="Restaurant" />
          </Box>
        </Flex>
        {isScreenMedium ? null : (
          <Box>
            <Text
              transform="rotate(90deg)"
              fontSize="3em"
              whiteSpace="nowrap"
              w="100px"
            >
              Join Our Team
            </Text>
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default About;
