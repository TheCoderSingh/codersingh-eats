import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';

const Footer = () => (
  <Box mt={20} textAlign="center" bg="#333" py={2}>
    <Text fontSize="0.8em">
      Copyright &copy; 2022 | CoderSingh Eats | All Rights Reserved | Designed &
      Developed by
      <Link href="https://thecodersingh.com/" target="_blank">
        {' '}
        TheCoderSingh{' '}
      </Link>
    </Text>
  </Box>
);

export default Footer;
