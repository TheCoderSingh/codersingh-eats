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
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const { toggleColorMode } = useColorMode();
  const navbarHeading = useColorModeValue('#eee', '#333');

  return (
    <Box bg={navbarHeading} p={4}>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        w={{ base: '100%', sm: '90%' }}
        mx="auto"
      >
        <Flex alignItems="center">
          <MdEmojiFoodBeverage size={30} />
          <Link href="/">
            <Text
              ml={2}
              fontSize={{ sm: 18, md: 22, lg: 25 }}
              textTransform="uppercase"
              display={{ base: 'none', md: 'block' }}
            >
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

        <Box cursor="pointer">
          <GiHamburgerMenu size={28} />
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
