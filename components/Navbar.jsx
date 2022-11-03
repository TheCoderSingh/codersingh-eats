import Link from 'next/link';
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Switch,
  Text,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react';
import { MdEmojiFoodBeverage } from 'react-icons/md';

const Navbar = () => {
  const { toggleColorMode } = useColorMode();
  const navbarHeading = useColorModeValue('#eee', '#333');

  return (
    <Box bg={navbarHeading} p={4}>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        w="90%"
        mx="auto"
      >
        <Flex alignItems="center">
          <MdEmojiFoodBeverage size={30} />
          <Link href="/">
            <Text ml={2} fontSize={[14, 18, 22, 25]} textTransform="uppercase">
              CoderSingh Eats
            </Text>
          </Link>
        </Flex>

        <Flex gap={4} display={{ base: 'none', lg: 'flex' }}>
          <Link href="/menu">
            <Text textTransform="uppercase" fontWeight="500">
              Menu
            </Text>
          </Link>
          <Link href="/about">
            <Text textTransform="uppercase" fontWeight="500">
              About
            </Text>
          </Link>
          <Link href="/contact">
            <Text textTransform="uppercase" fontWeight="500">
              Contact Us
            </Text>
          </Link>
        </Flex>

        <Box>
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="toggle-theme" mb="0">
              Theme
            </FormLabel>
            <Switch id="toggle-theme" onChange={toggleColorMode} color="#333" />
          </FormControl>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
