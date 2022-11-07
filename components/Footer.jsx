import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';

const Footer = () => {
  const footer = useColorModeValue('#1a202c', '#eee');
  const footerText = useColorModeValue('#eee', '#1a202c');

  return (
    <Box mt={20} textAlign="center" bg={footer} py={2}>
      <Text fontSize="0.7em" color={footerText}>
        Copyright &copy; 2022 | CoderSingh Eats | All Rights Reserved
      </Text>
      <Text fontSize="0.7em" color={footerText}>
        Designed & Developed by
        <Link href="https://thecodersingh.com/" target="_blank">
          {' '}
          TheCoderSingh{' '}
        </Link>
      </Text>
    </Box>
  );
};

export default Footer;
