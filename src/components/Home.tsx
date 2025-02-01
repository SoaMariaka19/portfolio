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
            Junior Front-End Developer passionate about building intuitive and effective user interfaces.
          </StyledSubtitle>
        </Box>
        <StyledImage src={img} alt="Soa Mariaka"/>
      </StyledHomeBox>
    </HomeContainer>
  );
};

export default Home;
