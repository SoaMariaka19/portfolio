import { HomeContainer, StyledTitle, StyledSubtitle, StyledHomeBox, StyledImage } from '../styles/customStyles';
import img from '../assets/img.png';
import { Box } from '@mui/material';

const Home = () => {
  return (
    <HomeContainer id="home">
      <StyledHomeBox>
        <Box>
          <StyledTitle variant="h4" gutterBottom>
            Hello! I'm Soa Mariaka
          </StyledTitle>
          <StyledSubtitle variant="h6" paragraph>
            Junior Front-End Developer, passionate about creating intuitive and efficient interfaces. Curious and motivated, I'm constantly learning and evolving to improve. My goal? Build a fulfilling career in web development          
          </StyledSubtitle>
        </Box>
        <StyledImage src={img} alt="Soa Mariaka"/>
      </StyledHomeBox>
    </HomeContainer>
  );
};

export default Home;
