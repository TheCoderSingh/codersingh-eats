import Link from 'next/link';
import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Switch,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react';
import { MdEmojiFoodBeverage } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const { toggleColorMode } = useColorMode();
  const navbarHeading = useColorModeValue('#eee', '#1a202c');

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={navbarHeading} p={4} position="fixed" w="full" zIndex={999}>
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
            <Switch
              id="toggle-theme"
              onChange={toggleColorMode}
              color="#1a202c"
            />
          </FormControl>
        </Box>

        <Box cursor="pointer" onClick={onOpen} display={{ lg: 'none' }}>
          <GiHamburgerMenu size={28} />

          <Modal onClose={onClose} isOpen={isOpen}>
            <ModalOverlay
              bg="blackAlpha.300"
              backdropFilter="blur(10px) hue-rotate(90deg)"
            />
            <ModalContent height="calc(100vh - 65px)">
              <ModalHeader textAlign="center" mt={10}>
                THE CODERSINGH EATS
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody textTransform="uppercase" textAlign="center">
                <Flex direction="column">
                  <Link href="/menu">
                    <Text mt={10} pb={5}>
                      Menu
                    </Text>
                  </Link>
                  <Divider />
                  <Link href="/about">
                    <Text mt={10} pb={5}>
                      About
                    </Text>
                  </Link>
                  <Divider />
                  <Link href="/contact">
                    <Text mt={10} pb={5}>
                      Contact Us
                    </Text>
                  </Link>
                </Flex>
              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
