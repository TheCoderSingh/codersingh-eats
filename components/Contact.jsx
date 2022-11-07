import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  Textarea
} from '@chakra-ui/react';

const Contact = () => (
  <Box>
    <Heading textTransform="uppercase" pt={20} textAlign="center">
      Contact Us
    </Heading>

    <Box mt={20} maxW="50%" mx="auto">
      <form>
        <FormControl>
          <Input
            placeholder="Name"
            borderTop="none"
            borderX="none"
            borderRadius="none"
            isRequired
          />
        </FormControl>
        <FormControl mt={10}>
          <Input
            placeholder="Phone"
            borderTop="none"
            borderX="none"
            borderRadius="none"
            isRequired
          />
        </FormControl>
        <FormControl mt={10}>
          <Input
            placeholder="Email"
            type="email"
            borderTop="none"
            borderX="none"
            borderRadius="none"
            isRequired
          />
        </FormControl>
        <FormControl mt={10}>
          <Textarea
            placeholder="Message"
            borderTop="none"
            borderX="none"
            borderRadius="none"
            minH="unset"
            resize="none"
            isRequired
          />
        </FormControl>
        <Button
          type="submit"
          borderRadius="none"
          mt={10}
          textTransform="uppercase"
        >
          Send Message
        </Button>
      </form>
    </Box>
  </Box>
);

export default Contact;
