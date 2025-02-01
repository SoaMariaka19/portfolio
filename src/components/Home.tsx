import { HomeContainer, StyledTitle, StyledSubtitle} from '../styles/customStyles';
import { Box } from '@mui/material';
import img from '../assets/img.png';

const Home = () => {
  return (
    <HomeContainer id="home">
      <Box display="flex" justifyContent="space-between" alignItems="center" paddingTop="80px">
        <Box>
          <StyledTitle variant="h4" gutterBottom>
            Hello! I'm Soa Mariaka
          </StyledTitle>
          <StyledSubtitle variant="h6" paragraph>
            Junior Front-End Developer passionate about building intuitive and effective user interfaces.
          </StyledSubtitle>
        </Box>
        <img src={img} alt="Soa Mariaka" />
      </Box>
    </HomeContainer>
  );
};

export default Home;