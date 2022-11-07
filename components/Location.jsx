import Link from 'next/link';
import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import { MdEmail, MdEmojiFoodBeverage, MdLocationPin } from 'react-icons/md';
import { AiFillPhone } from 'react-icons/ai';

const Location = () => {
  const location = useColorModeValue('#1a202c', '#eee');
  const locationText = useColorModeValue('#eee', '#1a202c');

  return (
    <Flex pt={20} flexDir={{ base: 'column', lg: 'row' }}>
      <Box
        p={5}
        bg={location}
        color={locationText}
        w={{ base: '100%', lg: '40%' }}
        textAlign="center"
      >
        <Flex flexDir="column" justifyContent="center">
          <Flex alignItems="center" mb={2} justifyContent="center">
            <MdEmojiFoodBeverage size={26} />
            <Text ml={2} fontSize={24} textTransform="uppercase">
              CoderSingh Eats
            </Text>
          </Flex>

          <Flex alignItems="center" mt={30} justifyContent="center">
            <MdLocationPin size={22} />
            <Heading fontSize={20}>Location</Heading>
          </Flex>

          <Box ml={2} mt={2}>
            <Text>123 Delicious Way</Text>
            <Text>Vancouver, BC</Text>
            <Text mb={2}>V1A 2A1</Text>
          </Box>

          <Flex alignItems="center" mt={30} justifyContent="center">
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

          <Flex alignItems="center" mt={30} justifyContent="center">
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
      <Box w={{ base: '100%', lg: '60%' }} h={{ base: '300px', lg: 'unset' }}>
        <iframe
          title="location"
          style={{ border: 0 }}
          loading="lazy"
          width="100%"
          height="100%"
          allowFullScreen
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.046923430523!2d-123.1156233841355!3d49.275508079199604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717d47d0fd21%3A0x1ebd8c10ad3d79b2!2sBC%20Kitchen!5e0!3m2!1sen!2sca!4v1667817019240!5m2!1sen!2sca"
        />
      </Box>
    </Flex>
  );
};

export default Location;
