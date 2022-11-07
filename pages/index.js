import { Box } from '@chakra-ui/react';
import {
  About,
  Banner,
  Contact,
  Featured,
  Location,
  Reviews
} from '../components';

const Home = () => (
  <Box>
    <Banner />
    <Featured />
    <Reviews />
    <About />
    <Location />
    <Contact />
  </Box>
);
export default Home;
