import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';

import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Reviews = () => {
  const reviews = useColorModeValue('#eee', '#1a202c');

  return (
    <Flex
      minH="100vh"
      flexDir="column"
      justifyContent="center"
      w="90%"
      mx="auto"
      pt={{ base: 20, lg: null }}
      mb={[20, 20, 20, 20, null]}
    >
      <Heading textAlign="center" textTransform="uppercase">
        See What Our Customers Say
      </Heading>

      <Flex
        justifyContent="center"
        mt={20}
        gap={5}
        textAlign="center"
        alignItems="center"
        flexWrap={{ base: 'wrap', lg: 'nowrap' }}
      >
        <Box gap={3} bg={reviews} p={5}>
          <Box
            bg="cornflowerblue"
            w="40px"
            h="40px"
            borderRadius="50%"
            mx="auto"
            mb={3}
          />
          <Text>Jaskaran Singh</Text>
          <Flex mt={1} justifyContent="center">
            <AiFillStar color="orange" size={22} />
            <AiFillStar color="orange" size={22} />
            <AiFillStar color="orange" size={22} />
            <AiOutlineStar color="orange" size={22} />
            <AiOutlineStar color="orange" size={22} />
          </Flex>
          <Text fontSize="0.9em" mt={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            praesentium, repellat quia sapiente accusamus consectetur. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Delectus enim
            expedita aut perferendis sequi fugiat quibusdam nulla ipsum rerum et
            sapiente in deserunt, quidem, repellendus voluptate dicta laborum
            minus consequatur!
          </Text>
        </Box>
        <Box gap={3} bg={reviews} p={5}>
          <Box
            bg="cornflowerblue"
            w="40px"
            h="40px"
            borderRadius="50%"
            mx="auto"
            mb={3}
          />
          <Text>Jaskaran Singh</Text>
          <Flex mt={1} justifyContent="center">
            <AiFillStar color="orange" size={22} />
            <AiFillStar color="orange" size={22} />
            <AiFillStar color="orange" size={22} />
            <AiFillStar color="orange" size={22} />
            <AiFillStar color="orange" size={22} />
          </Flex>
          <Text fontSize="0.9em" mt={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            praesentium, repellat quia sapiente accusamus consectetur. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Delectus enim
            expedita aut perferendis sequi fugiat quibusdam nulla ipsum rerum et
            sapiente in deserunt, quidem, repellendus voluptate dicta laborum
            minus consequatur!
          </Text>
        </Box>
        <Box gap={3} bg={reviews} p={5}>
          <Box
            bg="cornflowerblue"
            w="40px"
            h="40px"
            borderRadius="50%"
            mx="auto"
            mb={3}
          />
          <Text>Jaskaran Singh</Text>
          <Flex mt={1} justifyContent="center">
            <AiFillStar color="orange" size={22} />
            <AiFillStar color="orange" size={22} />
            <AiFillStar color="orange" size={22} />
            <AiOutlineStar color="orange" size={22} />
            <AiOutlineStar color="orange" size={22} />
          </Flex>
          <Text fontSize="0.9em" mt={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            praesentium, repellat quia sapiente accusamus consectetur. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Delectus enim
            expedita aut perferendis sequi fugiat quibusdam nulla ipsum rerum et
            sapiente in deserunt, quidem, repellendus voluptate dicta laborum
            minus consequatur!
          </Text>
        </Box>
      </Flex>
      <Flex
        justifyContent="center"
        mt={5}
        gap={5}
        textAlign="center"
        alignItems="center"
        flexWrap={{ base: 'wrap', lg: 'nowrap' }}
      >
        <Box gap={3} bg={reviews} p={5}>
          <Box
            bg="cornflowerblue"
            w="40px"
            h="40px"
            borderRadius="50%"
            mx="auto"
            mb={3}
          />
          <Text>Jaskaran Singh</Text>
          <Flex mt={1} justifyContent="center">
            <AiFillStar color="orange" size={22} />
            <AiFillStar color="orange" size={22} />
            <AiFillStar color="orange" size={22} />
            <AiFillStar color="orange" size={22} />
            <AiOutlineStar color="orange" size={22} />
          </Flex>
          <Text fontSize="0.9em" mt={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            praesentium, repellat quia sapiente accusamus consectetur. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Delectus enim
            expedita aut perferendis sequi fugiat quibusdam nulla ipsum rerum et
            sapiente in deserunt, quidem, repellendus voluptate dicta laborum
            minus consequatur!
          </Text>
        </Box>
        <Box gap={3} bg={reviews} p={5}>
          <Box
            bg="cornflowerblue"
            w="40px"
            h="40px"
            borderRadius="50%"
            mx="auto"
            mb={3}
          />
          <Text>Jaskaran Singh</Text>
          <Flex mt={1} justifyContent="center">
            <AiFillStar color="orange" size={22} />
            <AiFillStar color="orange" size={22} />
            <AiFillStar color="orange" size={22} />
            <AiFillStar color="orange" size={22} />
            <AiOutlineStar color="orange" size={22} />
          </Flex>
          <Text fontSize="0.9em" mt={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            praesentium, repellat quia sapiente accusamus consectetur. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Delectus enim
            expedita aut perferendis sequi fugiat quibusdam nulla ipsum rerum et
            sapiente in deserunt, quidem, repellendus voluptate dicta laborum
            minus consequatur!
          </Text>
        </Box>
        <Box gap={3} bg={reviews} p={5}>
          <Box
            bg="cornflowerblue"
            w="40px"
            h="40px"
            borderRadius="50%"
            mx="auto"
            mb={3}
          />
          <Text>Jaskaran Singh</Text>
          <Flex mt={1} justifyContent="center">
            <AiFillStar color="orange" size={22} />
            <AiFillStar color="orange" size={22} />
            <AiFillStar color="orange" size={22} />
            <AiFillStar color="orange" size={22} />
            <AiFillStar color="orange" size={22} />
          </Flex>
          <Text fontSize="0.9em" mt={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            praesentium, repellat quia sapiente accusamus consectetur. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Delectus enim
            expedita aut perferendis sequi fugiat quibusdam nulla ipsum rerum et
            sapiente in deserunt, quidem, repellendus voluptate dicta laborum
            minus consequatur!
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Reviews;
