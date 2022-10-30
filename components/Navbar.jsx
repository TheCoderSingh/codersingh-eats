import Link from 'next/link';
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Switch,
  Text,
  useTheme
} from '@chakra-ui/react';
import { MdEmojiFoodBeverage } from 'react-icons/md';

const Navbar = () => {
  const themex = useTheme();

  return (
    <Box bg="light.navbarHeading" p={4}>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        w="90%"
        mx="auto"
      >
        <Flex alignItems="center">
          <MdEmojiFoodBeverage size={30} />
          <Text ml={2} fontSize={25} textTransform="uppercase">
            CoderSingh Eats
          </Text>
        </Flex>

        <Flex gap={4}>
          <Link href={'/menu'}>Menu</Link>
          <Link href={'/about'}>About</Link>
          <Link href={'/contact'}>Contact Us</Link>
        </Flex>

        <Box>
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="toggle-theme" mb="0">
              Theme
            </FormLabel>
            <Switch colorScheme="gray" id="toggle-theme" />
          </FormControl>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
