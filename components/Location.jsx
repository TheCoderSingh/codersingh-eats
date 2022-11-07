import Link from 'next/link';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { MdEmail, MdEmojiFoodBeverage, MdLocationPin } from 'react-icons/md';
import { AiFillPhone } from 'react-icons/ai';

const Location = () => (
  <Flex pt={20}>
    <Box pl={5} w="60%" bg="#333">
      <Flex flexDir="column" justifyContent="center" h="100%">
        <Flex alignItems="center" mb={2}>
          <MdEmojiFoodBeverage size={26} />
          <Text ml={2} fontSize={24}>
            The CoderSingh Eats
          </Text>
        </Flex>

        <Flex alignItems="center" mt={30}>
          <MdLocationPin size={22} />
          <Heading fontSize={20}>Location</Heading>
        </Flex>

        <Box ml={2} mt={2}>
          <Text>123 Delicious Way</Text>
          <Text>Vancouver, BC</Text>
          <Text mb={2}>V1A 2A1</Text>
        </Box>

        <Flex alignItems="center" mt={30}>
          <AiFillPhone size={22} />
          <Heading fontSize={20} ml={2}>
            Call Us
          </Heading>
        </Flex>

        <Box ml={2} mt={2}>
          <Link href="tel:6041234567">
            <Text>+1 (604) 123-4567</Text>
          </Link>
        </Box>

        <Flex alignItems="center" mt={30}>
          <MdEmail />
          <Heading fontSize={20} ml={2}>
            Email Us
          </Heading>
        </Flex>

        <Box ml={2} mt={2}>
          <Link href="mailto:thecodersingh@gmail.com">
            <Text ml={2}>thecodersingh@gmail.com</Text>
          </Link>
        </Box>
      </Flex>
    </Box>
    <Box>
      <iframe
        title="location"
        width="800"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCqXqpEylnSvZboZEzl2EIwpR8s8_BL8SI&q=Kitchen,Vancouver+BC"
      />
    </Box>
  </Flex>
);

export default Location;
